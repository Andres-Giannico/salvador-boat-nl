# 🔍 Auditoría SEO — Salvador Ibiza

> Fecha: 2026-06-18 · Modo: solo lectura (sin cambios en el código)
> Stack: Next.js 15 (App Router), `next-sitemap`, multidominio (.com / .es / .nl / .fr)

La base técnica es **buena** (canonicals, hreflang, schema, llms.txt), pero hay varios
problemas serios que están limitando la indexación en Google/Bing y poniendo en riesgo
los rich snippets. Reporte priorizado por impacto.

---

## 🔴 Críticos (resolver primero)

### 1. AggregateRating inconsistente entre páginas — riesgo de penalización
Cada página declara un número de reseñas distinto, todos descoordinados:

| Página | reviewCount | ratingValue |
|---|---|---|
| `config/site.ts` (fuente real) | **278** | 4.9 |
| `boat-trips/sunset-trip` (page.tsx) | **1198** | 4.9 |
| `boat-trips/day-trip` (page.tsx) | **1198** | — |
| `boat-trips/day-trip` (page.client.tsx) | **120** | — |
| `boat-trips/sunset` | 278 | **5** |
| snorkeling / paddle / groups / all-inclusive / san-antonio / private | 278 | varía |

Google detecta esta incoherencia como **structured-data spam**: quita las estrellas de los
resultados y puede gatillar una acción manual. Además, varias páginas ponen `aggregateRating`
en `Product` **sin reseñas visibles en la página**, lo que viola las guidelines de reseñas
de Google.

**Acción:** centralizar **un único** rating real desde `businessContact.aggregateRating`
y mostrar las reseñas en la página.

### 2. Canibalización de keywords — páginas duplicadas compitiendo
Pares de URLs apuntando a la misma intención de búsqueda:

- `/boat-trips/sunset` **vs** `/boat-trips/sunset-trip` → ambas targetean "ibiza sunset boat trip"
- `/boat-trips/day` **vs** `/boat-trips/day-trip` → ambas "day boat trip ibiza"

Ambas están en el sitemap e indexables. Google reparte la autoridad entre las dos y ninguna
rankea bien. A esto se suman las landings de producto (`/all-inclusive`, `/snorkeling`,
`/paddle`, `/groups`, `/san-antonio`, `/family`), que reservan el **mismo producto**
(`companyId 2, productId 2`).

**Estrategia elegida: A — mantener las páginas con contenido único (long-tail SEO) y quitar
el `aggregateRating` descoordinado, usando el rating real centralizado.** Solo las páginas que
son duplicado real de intención se redirigen 301.

Decisión página por página tras revisar el contenido real de cada una:

| Página | Contenido | Keyword propia | Solapamiento | Decisión |
|---|---|---|---|---|
| `/boat-trips/snorkeling` | Único (dónde snorkelear, FAQ, reviews, comparativa) | snorkeling boat trip ibiza | bajo | **A — mantener** |
| `/boat-trips/family` | Único (apta para niños, FAQ, reviews, comparativa) | family boat trip ibiza | bajo | **A — mantener** |
| `/boat-trips/san-antonio` | Único (bahía, Café del Mar, galería, FAQ) | san antonio boat trips | bajo | **A — mantener** |
| `/boat-trips/paddle` | Único (contenido SUP) | paddle boarding ibiza / SUP | bajo | **A — mantener** |
| `/boat-trips/groups` | Propio (grupos, celebraciones, capacidad 35) | group boat trips ibiza | **medio** (pisa `/corporate-events` y `/private-boat-trips`) | **A — mantener, reposicionar** a grupos de amigos/celebraciones; dejar lo corporativo solo en `/corporate-events` |
| `/boat-trips/all-inclusive` | Genérico, duplica `/day-trip` (cuyo título es "All-Inclusive Day Boat Trip Ibiza"). Widget con config sospechosa (`productId 0, channelId 0`) | all inclusive boat trips ibiza | **alto** | **C — 301 a `/day-trip`** |
| `/boat-trips/sunset` vs `/sunset-trip` | Duplicado de intención | ibiza sunset boat trip | **alto** | **C — elegir canónica y 301 la otra** |
| `/boat-trips/day` vs `/day-trip` | Duplicado de intención | day boat trip ibiza | **alto** | **C — elegir canónica y 301 la otra** |

**Plan de acción:**
1. Mantener `snorkeling`, `family`, `san-antonio`, `paddle`, `groups` (A) → quitarles el
   `aggregateRating` inventado y dejar el rating real centralizado.
2. Reposicionar `/groups` hacia grupos de amigos/celebraciones para no canibalizar
   `/corporate-events`.
3. `/all-inclusive` → 301 a `/day-trip` (consolidar autoridad; además su widget parece roto).
4. Resolver los pares `sunset`/`sunset-trip` y `day`/`day-trip`: elegir la URL canónica de cada
   uno y 301 la otra.

### 3. Dos `next.config` en conflicto
Coexisten `next.config.js` (≈40 redirects) y `next.config.ts` (9 redirects, con destinos
**distintos**). Next.js carga solo uno → comportamiento ambiguo y redirects 301 que quizás no
se aplican. Ejemplo: `/interna/salvador-ibiza-style-boat-trip.html` va a `/boat-trips` en uno
y a `/private-boat-trips` en otro.

**Acción:** unificar todo en **un solo archivo** y borrar el otro.

---

## 🟠 Altos

### 4. `robots.txt` se sobreescribe en el build
`next-sitemap.config.js` tiene `generateRobotsTxt: true`, así que el `postbuild` **pisa** el
`public/robots.txt` commiteado. El generado pierde la línea `Host:` y no tenés control real
del archivo. Además no hay directivas explícitas para crawlers de IA. Para indexar en
ChatGPT/Perplexity conviene declarar explícitamente (aunque `Allow: /` ya los cubre):

```
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: PerplexityBot
User-agent: ClaudeBot
Allow: /
```

Lo bueno: ya existe `public/llms.txt`, que es exactamente lo que ayuda a la indexación en LLMs.

### 5. `SearchAction` apunta a una página que no existe
`buildWebsiteSchema` declara un Sitelinks Searchbox con `target: /search?q={...}`, pero **no
existe** la ruta `/search` (de hecho un redirect la manda a `/`). Schema inválido.

**Acción:** quitar `potentialAction` o crear la página de búsqueda real.

### 6. Imágenes sin optimizar + Core Web Vitals
`next.config.js` tiene `images.unoptimized: true`, así que Next no genera responsive/AVIF/lazy
nativo. Y en `public/images` hay PNG pesados (`barco1.png`…`barco6.png`, `esvedraback.png`).
Si alguno está en el Hero/LCP, penaliza en velocidad (factor de ranking).

**Acción:** migrar a `<Image>` optimizado o asegurar que **todo** lo above-the-fold use los
`.webp` de `/optimized` con `width/height` y `priority`.

---

## 🟡 Medios

7. **hreflang a .es / .nl / .fr**: el sitemap y `pageAlternates` referencian esos dominios para
   *todas* las URLs. Si esos sitios no están live o no sirven el mismo path traducido, Google
   reporta errores de hreflang y los ignora. → Verificar que los 4 dominios respondan 200 con
   contenido equivalente.

8. **Sitemap poco diferenciado**: todas las URLs salen con `priority 0.7` y `changefreq daily`,
   incluido el home. `lastmod` es la fecha del build, no del cambio real de contenido. → Subir el
   home a 1.0, productos a 0.8, legales a 0.3; `changefreq` realista.

9. **Blog muy fino** (4 posts), y hay un `Contenido artículos de blog faltante.pdf` en `/public`
   que confirma contenido pendiente. Poco contenido = poca captación de long-tail y menos material
   para que los LLMs te citen. → Publicar las guías faltantes (rutas, Es Vedrà, Cala Comte, precios).

10. **OG locale `en_US`** para audiencia mayormente UK/EU. Menor, pero `en_GB` encaja mejor.

11. **PDF y assets en `/public`** indexables (`arquitectura-seo.xlsx - Worksheet.pdf`, el PDF de
    blog). No deberían exponerse. → Sacarlos de `public/` o bloquearlos.

---

## 🟢 Menores

- **Doble tracking**: se carga GA vía `gtag('config', G-SP4LMTQT3E')` **y** GTM
  (`GTM-MZR67SFF`). Si GA también está dentro de GTM, se cuentan pageviews dobles (no es SEO
  directo pero ensucia datos).
- **Nombres de archivo de imagen** con espacios y en español (`barco dron .jpg`) — peor para
  image search; renombrar a slugs descriptivos en inglés con keyword.
- **`maximum-scale=5.0`** en viewport: aceptable, pero lo ideal es no limitar el zoom
  (accesibilidad).

---

## ✅ Lo que ya está bien
- `metadataBase` + canonicals absolutos por página vía `pageAlternates`.
- Schema rico: LocalBusiness/TourOperator, TouristAttraction, Organization, WebSite, FAQPage,
  BreadcrumbList, Product.
- `llms.txt` presente (clave para ChatGPT/Perplexity).
- Consent Mode v2 con denegación por defecto (GDPR ok).
- Redirects 301 de URLs legacy bien cubiertos.
- `noindex` correcto en `/book/trips` y `/book/flyer`, y excluidos del sitemap.

---

## 🎯 Top 3 acciones de mayor impacto
1. **Unificar el `aggregateRating`** real en todas las páginas (recupera estrellas y evita penalización).
2. **Resolver la canibalización** sunset/sunset-trip y day/day-trip con 301/canonical.
3. **Consolidar `next.config`** en un único archivo.
