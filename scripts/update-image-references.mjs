import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapeo de imágenes originales a optimizadas
const imageMapping = {
  // Logos y branding
  '/images/logo-salvador.png': '/images/optimized/salvador-ibiza-boat-trips-logo.webp',
  '/images/logo-salvador-footer.png': '/images/optimized/salvador-ibiza-footer-logo.webp',
  '/images/logofooter.png': '/images/optimized/salvador-ibiza-footer-logo-alt.webp',
  
  // Imágenes principales del barco
  '/images/barco1.png': '/images/optimized/salvador-ibiza-boat-aerial-view.webp',
  '/images/barco2.png': '/images/optimized/salvador-ibiza-luxury-boat.webp',
  '/images/barco3.png': '/images/optimized/salvador-ibiza-boat-side-view.webp',
  '/images/barco4.png': '/images/optimized/salvador-ibiza-boat-deck.webp',
  '/images/barco5.png': '/images/optimized/salvador-ibiza-boat-interior.webp',
  '/images/barco6.png': '/images/optimized/salvador-ibiza-boat-sunset.webp',
  '/images/barcoprivate.png': '/images/optimized/salvador-ibiza-private-charter-boat.webp',
  '/images/barcosalvadorsmall.jpg': '/images/optimized/salvador-ibiza-boat-small.webp',
  '/images/barcosalvadorsmall2.jpg': '/images/optimized/salvador-ibiza-boat-compact.webp',
  '/images/barcodesdedron.jpg': '/images/optimized/salvador-ibiza-boat-drone-view.webp',
  '/images/barcodron.jpg': '/images/optimized/salvador-ibiza-boat-aerial-drone.webp',
  '/images/barco dron .jpg': '/images/optimized/salvador-ibiza-boat-drone-photo.webp',
  
  // Actividades del barco
  '/images/boat/sunset.png': '/images/optimized/ibiza-sunset-boat-trip-salvador.webp',
  '/images/boat/aereabarco.png': '/images/optimized/salvador-ibiza-boat-aerial-shot.webp',
  '/images/boat/aereabarco1.jpg': '/images/optimized/salvador-ibiza-boat-from-above.webp',
  '/images/boat/consolabarco.png': '/images/optimized/salvador-ibiza-boat-console-captain.webp',
  '/images/boat/proabarcocueva.png': '/images/optimized/salvador-ibiza-boat-cave-exploration.webp',
  '/images/boat/tapastop.png': '/images/optimized/salvador-ibiza-boat-tapas-service.webp',
  '/images/boat/chicas-sunset.png': '/images/optimized/friends-ibiza-sunset-boat.webp',
  '/images/boat/chicasbrindandoenbarra.png': '/images/optimized/toasting-drinks-ibiza-boat.webp',
  '/images/boat/chichasfelicesenpopa.png': '/images/optimized/happy-friends-boat-stern-ibiza.webp',
  '/images/boat/copacavesunset.png': '/images/optimized/drinks-cave-sunset-ibiza.webp',
  
  // Imágenes del blog
  '/images/blog/discover-love-at-sea.png': '/images/optimized/romantic-boat-charter-ibiza-love.webp',
  '/images/blog/sunset-sailing-ibiza.jpg': '/images/optimized/sunset-sailing-cruise-ibiza.webp',
  
  // Otras
  '/images/esvedraback.png': '/images/optimized/es-vedra-island-ibiza-background.webp',
  '/images/tripavidor2024.png': '/images/optimized/tripadvisor-salvador-ibiza-2024.webp',
  '/images/turbo.png': '/images/optimized/turbobookings-salvador-ibiza.webp',
  '/images/qrcode_flyer.png': '/images/optimized/qr-code-flyer-salvador-ibiza.webp',
  '/images/qrcode_caseata.png': '/images/optimized/qr-code-caseta-salvador-ibiza.webp'
};

// Función para obtener todos los archivos de un directorio recursivamente
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (file.match(/\.(tsx?|jsx?|md|mdx)$/)) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Función para actualizar referencias en un archivo
function updateFileReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  let changeCount = 0;

  // Actualizar cada mapeo de imagen
  Object.entries(imageMapping).forEach(([oldPath, newPath]) => {
    // Buscar diferentes formatos de referencia
    const patterns = [
      new RegExp(`"${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'),
      new RegExp(`'${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g'),
      new RegExp(`\`${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\``, 'g'),
      new RegExp(`src=${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g'),
      new RegExp(`href=${oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g')
    ];

    patterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, (match) => {
          changeCount++;
          hasChanges = true;
          return match.replace(oldPath, newPath);
        });
      }
    });
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✅ ${path.relative(process.cwd(), filePath)} - ${changeCount} cambios`);
    return changeCount;
  }

  return 0;
}

async function updateImageReferences() {
  console.log('🔄 Actualizando referencias de imágenes en el código...\n');
  
  const srcDir = path.join(process.cwd(), 'src');
  const publicDir = path.join(process.cwd(), 'public');
  
  // Obtener todos los archivos relevantes
  const files = [
    ...getAllFiles(srcDir),
    ...getAllFiles(publicDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
  ];

  let totalChanges = 0;
  let filesChanged = 0;

  console.log(`📁 Procesando ${files.length} archivos...\n`);

  files.forEach(file => {
    const changes = updateFileReferences(file);
    if (changes > 0) {
      totalChanges += changes;
      filesChanged++;
    }
  });

  console.log(`\n🎉 ¡Actualización completada!`);
  console.log(`📊 Resumen:`);
  console.log(`   • ${filesChanged} archivos modificados`);
  console.log(`   • ${totalChanges} referencias actualizadas`);
  console.log(`   • Todas las imágenes ahora usan formato WebP optimizado`);
  console.log(`   • Nombres SEO-friendly aplicados`);
  
  if (totalChanges > 0) {
    console.log(`\n⚠️  Próximos pasos:`);
    console.log(`   1. Revisar los cambios con git diff`);
    console.log(`   2. Probar que las imágenes se cargan correctamente`);
    console.log(`   3. Hacer commit de los cambios`);
    console.log(`   4. Opcional: eliminar imágenes originales para ahorrar espacio`);
  } else {
    console.log(`\n💡 No se encontraron referencias para actualizar.`);
    console.log(`   Esto puede significar que:`);
    console.log(`   - Las imágenes se referencian de forma dinámica`);
    console.log(`   - Los nombres de archivo no coinciden exactamente`);
    console.log(`   - Ya se han actualizado previamente`);
  }
}

// Ejecutar la actualización
updateImageReferences().catch(console.error); 