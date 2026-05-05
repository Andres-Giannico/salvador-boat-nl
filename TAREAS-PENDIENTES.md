# 📋 TAREAS PENDIENTES - Salvador Ibiza Boat Website

> Documento completo con todas las tareas, verificaciones y mejoras necesarias para el proyecto

## 🔴 CRÍTICAS - Requieren Atención Inmediata

### 1. Información de Contacto en Schema.org
**Ubicación**: `src/app/layout.tsx` (líneas 35-36, 277)

**Problema**: 
- Hay TODOs en el código indicando que se debe verificar/actualizar información de contacto
- El número de teléfono tiene formato inconsistente
- El email necesita verificación

**Tareas**:
- [ ] Verificar que el teléfono `+34-871 181 393` es correcto y está actualizado
- [ ] Confirmar que el email `info@salvadoribiza.com` es válido y está activo
- [ ] Actualizar el schema de Organization (línea 277) con el número de teléfono real
- [ ] Asegurar formato consistente del teléfono en todo el código: `+34 871 181 393` o `+34-871-181-393`

**Archivos a modificar**:
- `src/app/layout.tsx` - Actualizar líneas 35, 36, 277

---

### 2. Configuración de Variables de Entorno
**Ubicación**: `.env.local` (archivo que debe existir)

**Problema**: 
- No hay archivo `.env.local` visible en el repositorio (debe estar en `.gitignore`)
- Variables críticas necesarias para producción

**Tareas**:
- [ ] Crear archivo `.env.local` con las siguientes variables:
  ```bash
  # Google Maps API
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_aqui
  
  # Site URL para sitemap
  SITE_URL=https://salvadoribiza.com
  
  # Google Analytics (opcional en desarrollo)
  NEXT_PUBLIC_GA_MEASUREMENT_ID=G-SP4LMTQT3E
  ```
- [ ] Verificar que `.env.local` está en `.gitignore`
- [ ] Crear archivo `.env.example` con valores de ejemplo (sin datos sensibles)
- [ ] Documentar en README cómo configurar las variables de entorno

---

### 3. Verificación de Google Maps API
**Ubicación**: `src/config/google.ts`

**Problema**: 
- La API key puede no estar configurada correctamente
- El Place ID necesita verificación

**Tareas**:
- [ ] Verificar que `GOOGLE_MAPS_API_KEY` está configurada en producción
- [ ] Confirmar que el Place ID `ChIJCek3no5JmRIRQc4VSbT3qiY` corresponde a "Salvador Boat Ibiza"
- [ ] Verificar que la API tiene los permisos necesarios:
  - Places API
  - Maps JavaScript API
  - Geocoding API (si se usa)
- [ ] Probar la integración de Google Maps en todas las páginas que la usan

---

## 🟡 IMPORTANTES - Deben Resolverse Pronto

### 4. Configuración de Turbobookings
**Ubicación**: Múltiples archivos de booking

**Verificaciones necesarias**:
- [ ] Verificar que `companyId: 2` es correcto
- [ ] Confirmar que `productId: 2` (trips compartidos) y `productId: 3` (charters privados) son correctos
- [ ] Validar los `billingTermIds`:
  - `[20]` para Day Trip
  - `[21]` para Sunset Trip
- [ ] Verificar los `channelId`:
  - `11` para Web
  - `176` para QR Caseta
  - `177` para QR Flyer
- [ ] Probar el flujo completo de reserva en cada canal
- [ ] Verificar que los mensajes de depósito (€20 por persona) son correctos

**Archivos a revisar**:
- `src/components/booking/TurbnbWidget.tsx`
- `src/components/booking/BookingModal.tsx`
- `src/app/boat-trips/day-trip/page.client.tsx`
- `src/app/boat-trips/sunset-trip/page.client.tsx`
- `src/app/private-boat-trips/page.client.tsx`
- `src/app/book/trips/page.client.tsx`
- `src/app/book/flyer/page.client.tsx`

---

### 5. SEO y Meta Tags
**Ubicación**: Todas las páginas en `src/app/`

**Tareas**:
- [ ] Verificar que todas las páginas tienen:
  - `title` único y descriptivo
  - `description` optimizada (150-160 caracteres)
  - `keywords` relevantes
  - `canonical` URL correcta
  - Open Graph tags completos
  - Twitter Card tags
- [ ] Revisar que las imágenes Open Graph existen y están optimizadas
- [ ] Verificar que los Schema.org están correctamente implementados
- [ ] Asegurar que no hay contenido duplicado entre páginas

**Páginas a revisar**:
- [ ] `/` (homepage)
- [ ] `/boat-trips`
- [ ] `/boat-trips/day-trip`
- [ ] `/boat-trips/sunset-trip`
- [ ] `/private-boat-trips`
- [ ] `/gallery`
- [ ] `/faq`
- [ ] `/contact`
- [ ] `/about`
- [ ] `/blog/*` (todas las entradas)
- [ ] `/partners/*`
- [ ] `/weddings`
- [ ] `/corporate-events`

---

### 6. Optimización de Imágenes
**Ubicación**: `public/images/`

**Tareas**:
- [ ] Verificar que todas las imágenes están en formato WebP
- [ ] Asegurar que las imágenes tienen tamaños apropiados:
  - Hero images: máximo 1920px de ancho
  - Gallery images: máximo 1200px de ancho
  - Thumbnails: máximo 400px de ancho
- [ ] Verificar que todas las imágenes tienen `alt` text descriptivo
- [ ] Comprobar que las imágenes están en la carpeta `optimized/` cuando corresponde
- [ ] Revisar que no hay imágenes rotas o faltantes
- [ ] Optimizar imágenes grandes que puedan estar ralentizando el sitio

**Scripts disponibles**:
- `scripts/optimize-images.js` - Verificar que funciona correctamente
- `scripts/optimize-images.mjs` - Verificar que funciona correctamente
- `scripts/update-image-references.mjs` - Verificar referencias

---

### 7. Google Analytics y Tag Manager
**Ubicación**: `src/app/layout.tsx`

**Verificaciones**:
- [ ] Confirmar que Google Tag Manager ID `GTM-MZR67SFF` es correcto
- [ ] Verificar que Google Analytics Measurement ID `G-SP4LMTQT3E` es correcto
- [ ] Probar que el consentimiento de cookies funciona correctamente
- [ ] Verificar que los eventos de tracking están configurados:
  - Page views
  - Booking events
  - Contact actions (WhatsApp, email)
  - Scroll depth
- [ ] Asegurar que el consentimiento predeterminado está configurado como `denied` (líneas 223-228)
- [ ] Probar que al aceptar cookies, el tracking se activa correctamente

---

### 8. Internacionalización (i18n)
**Ubicación**: `src/app/[locale]/`, `src/i18n/`

**Estado actual**: Preparado pero no completamente implementado

**Tareas**:
- [ ] Verificar estructura de carpetas `[locale]`
- [ ] Revisar que los archivos de traducción existen en `src/i18n/locales/`
- [ ] Implementar traducciones para:
  - [ ] Español (es)
  - [ ] Francés (fr)
  - [ ] Alemán (de)
- [ ] Verificar que el selector de idioma en Navbar funciona correctamente
- [ ] Asegurar que todas las rutas soportan múltiples idiomas
- [ ] Probar redirecciones de idioma

---

## 🟢 MEJORAS - Recomendadas

### 9. Performance y Optimización
**Tareas**:
- [ ] Verificar Core Web Vitals:
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Implementar lazy loading para componentes pesados
- [ ] Verificar code splitting automático de Next.js
- [ ] Optimizar fuentes (ya están configuradas con `display: swap`)
- [ ] Revisar bundle size y eliminar dependencias no usadas
- [ ] Implementar Service Worker para cache (opcional)

---

### 10. Accesibilidad (a11y)
**Tareas**:
- [ ] Verificar contraste de colores (WCAG AA mínimo)
- [ ] Asegurar que todos los botones tienen texto descriptivo
- [ ] Verificar navegación por teclado en todos los componentes
- [ ] Añadir `aria-label` donde sea necesario
- [ ] Verificar que las imágenes decorativas tienen `alt=""`
- [ ] Probar con lectores de pantalla
- [ ] Asegurar que los formularios tienen labels asociados

---

### 11. Testing
**Tareas**:
- [ ] Probar flujo completo de reserva en cada tipo de viaje
- [ ] Probar en diferentes navegadores:
  - [ ] Chrome/Edge
  - [ ] Firefox
  - [ ] Safari
  - [ ] Mobile browsers
- [ ] Probar en diferentes dispositivos:
  - [ ] Desktop (1920px, 1366px)
  - [ ] Tablet (768px, 1024px)
  - [ ] Mobile (375px, 414px)
- [ ] Verificar que los redirects funcionan correctamente
- [ ] Probar formularios de contacto
- [ ] Verificar integración de WhatsApp

---

### 12. Seguridad
**Tareas**:
- [ ] Verificar que no hay información sensible en el código
- [ ] Asegurar que las variables de entorno no están expuestas
- [ ] Revisar headers de seguridad (CSP, X-Frame-Options, etc.)
- [ ] Verificar HTTPS en producción
- [ ] Revisar permisos de API keys (solo los necesarios)
- [ ] Implementar rate limiting si es necesario

---

### 13. Documentación
**Tareas**:
- [ ] Actualizar README.md con información actualizada
- [ ] Documentar estructura de componentes
- [ ] Crear guía de contribución
- [ ] Documentar proceso de deployment
- [ ] Crear changelog
- [ ] Documentar configuración de Turbobookings

---

### 14. Redirects y URLs
**Ubicación**: `next.config.ts`

**Verificaciones**:
- [ ] Verificar que todos los redirects en `next.config.ts` funcionan
- [ ] Comprobar que no hay redirects rotos
- [ ] Asegurar que los redirects son permanentes (301) cuando corresponde
- [ ] Verificar que las URLs antiguas redirigen correctamente
- [ ] Revisar que no hay loops de redirects

**Redirects actuales** (8 redirects configurados):
- `/book-now/3-hours-all-inclusive-boat-trip.html` → `/boat-trips`
- `/interna/salvador-ibiza-style-boat-trip.html` → `/private-boat-trips`
- `/book-now/sunset-mix-.html` → `/boat-trips`
- `/blog/the-boat/salvador.html` → `/about`
- `/blog/the-boat/Partners.html` → `/partners`
- `/blog/the-boat/turbookings.html` → `/partners/turbookings`
- `/blog/the-boat/unlock-instant-earnings.html` → `/partners/earnings`
- `/blog/location/findes` → `/contact`
- `/blog/blog/descubre-el-amor-en-el-mar.html` → `/blog/discover-love-at-sea`

---

### 15. Sitemap y Robots.txt
**Ubicación**: `next-sitemap.config.js`, `public/robots.txt`, `public/sitemap.xml`

**Verificaciones**:
- [ ] Verificar que `next-sitemap` genera el sitemap correctamente después del build
- [ ] Comprobar que `robots.txt` está configurado correctamente
- [ ] Asegurar que todas las páginas importantes están en el sitemap
- [ ] Verificar que las páginas de booking QR (`/book/trips`, `/book/flyer`) están excluidas del sitemap (robots: noindex)
- [ ] Probar que Google puede acceder al sitemap

---

### 16. Componentes y Código
**Tareas**:
- [ ] Revisar que todos los componentes tienen TypeScript types correctos
- [ ] Verificar que no hay `any` types sin justificar
- [ ] Asegurar consistencia en el código:
  - [ ] Nombres de variables
  - [ ] Estructura de componentes
  - [ ] Manejo de errores
- [ ] Verificar que los componentes reutilizables están en `src/components/`
- [ ] Revisar que no hay código duplicado
- [ ] Asegurar que los imports están organizados

---

### 17. Formularios y Validación
**Tareas**:
- [ ] Verificar que todos los formularios tienen validación
- [ ] Asegurar que los mensajes de error son claros
- [ ] Probar envío de formularios
- [ ] Verificar que los datos se envían correctamente
- [ ] Asegurar protección contra spam (reCAPTCHA si es necesario)

---

### 18. Blog
**Ubicación**: `src/app/blog/`

**Nota**: Hay un TODO en `next.config.js` línea 65 sobre implementación de blog

**Tareas**:
- [ ] Verificar que todas las entradas de blog tienen:
  - [ ] Meta tags completos
  - [ ] Imágenes optimizadas
  - [ ] Contenido completo
  - [ ] Fechas de publicación correctas
- [ ] Revisar estructura de URLs del blog
- [ ] Asegurar que las entradas están indexadas correctamente
- [ ] Verificar que los links internos funcionan

**Entradas actuales**:
- `/blog/discover-love-at-sea`
- `/blog/hidden-coves-ibiza`
- `/blog/ibiza-midday-magic-boat-trip`
- `/blog/sunset-sailing-ibiza`

---

### 19. WhatsApp Integration
**Ubicación**: `src/components/WhatsAppButton.tsx`

**Verificaciones**:
- [ ] Verificar que el número de WhatsApp es correcto: `+34 871 181 393`
- [ ] Probar que el botón abre WhatsApp correctamente
- [ ] Verificar que el mensaje predeterminado es apropiado
- [ ] Asegurar que el botón es visible en todas las páginas
- [ ] Verificar que funciona en mobile y desktop

---

### 20. Cookie Consent Banner
**Ubicación**: `src/components/CookieConsentBanner.tsx`

**Verificaciones**:
- [ ] Verificar que el banner aparece correctamente
- [ ] Probar que al aceptar cookies, se activa el tracking
- [ ] Verificar que al rechazar cookies, no se carga ningún script de tracking
- [ ] Asegurar que la preferencia se guarda (localStorage)
- [ ] Verificar que cumple con GDPR

---

## 📊 Checklist de Deployment

### Pre-Deployment
- [ ] Todas las variables de entorno están configuradas
- [ ] Build sin errores: `npm run build`
- [ ] Linter sin errores: `npm run lint`
- [ ] Todas las imágenes están optimizadas
- [ ] Sitemap se genera correctamente
- [ ] Robots.txt está configurado

### Post-Deployment
- [ ] Verificar que el sitio carga correctamente
- [ ] Probar flujo de reserva completo
- [ ] Verificar Google Analytics está funcionando
- [ ] Comprobar que los redirects funcionan
- [ ] Verificar que las imágenes cargan
- [ ] Probar en diferentes dispositivos
- [ ] Verificar velocidad de carga
- [ ] Comprobar que el sitemap es accesible

---

## 🔧 Configuración de Desarrollo

### Scripts Disponibles
```bash
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

### Estructura de Carpetas Importantes
```
src/
├── app/              # Páginas (App Router)
├── components/      # Componentes reutilizables
├── lib/             # Utilidades
├── services/        # Integraciones externas
├── config/          # Configuraciones
└── types/           # TypeScript types

public/
├── images/          # Imágenes estáticas
│   ├── optimized/   # Imágenes optimizadas
│   ├── boat/        # Imágenes del barco
│   └── blog/        # Imágenes del blog
├── sitemap.xml      # Sitemap generado
└── robots.txt       # Robots.txt
```

---

## 📝 Notas Importantes

### IDs de Turbobookings
- **Company ID**: 2
- **Product ID 2**: Viajes compartidos (Day Trip, Sunset Trip)
- **Product ID 3**: Charters privados
- **Billing Term ID 20**: Day Trip
- **Billing Term ID 21**: Sunset Trip
- **Channel ID 11**: Web
- **Channel ID 176**: QR Caseta
- **Channel ID 177**: QR Flyer

### Precios Actuales
- **Day Trip**: €80 adultos, €45 niños (6-12 años)
- **Sunset Trip**: €80 adultos, €45 niños (6-12 años)
- **Private Charter**: Desde €1350

### Información de Contacto
- **Teléfono 1**: +34 871 181 393
- **Teléfono 2**: +34 681 611 598
- **WhatsApp**: +34 871 181 393
- **Email**: info@salvadoribiza.com (verificar)

### Redes Sociales
- **Instagram**: @boatstripsinibiza
- **Facebook**: SalvadorIbizaBoat
- **TripAdvisor**: Salvador Ibiza
- **YouTube**: Disponible

---

## 🎯 Prioridades Sugeridas

1. **Semana 1**: Tareas críticas (1-3)
2. **Semana 2**: Tareas importantes (4-8)
3. **Semana 3**: Mejoras y optimizaciones (9-15)
4. **Semana 4**: Testing y documentación (11, 13)

---

## 📞 Contacto para Dudas

Si tienes dudas sobre alguna tarea, revisa:
1. El código fuente en la ubicación indicada
2. La documentación de Next.js: https://nextjs.org/docs
3. La documentación de Turbobookings
4. El README.md del proyecto

---

**Última actualización**: $(date)
**Versión del documento**: 1.0

