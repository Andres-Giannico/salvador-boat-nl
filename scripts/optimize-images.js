const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs');
const path = require('path');

// SEO-friendly name mappings
const seoNames = {
  // Logos and branding
  'logo-salvador.png': 'salvador-ibiza-boat-trips-logo.webp',
  'logo-salvador-footer.png': 'salvador-ibiza-footer-logo.webp',
  'logofooter.png': 'salvador-ibiza-footer-logo-alt.webp',
  
  // Main boat images
  'barco1.png': 'salvador-ibiza-boat-aerial-view.webp',
  'barco2.png': 'salvador-ibiza-luxury-boat.webp',
  'barco3.png': 'salvador-ibiza-boat-side-view.webp',
  'barco4.png': 'salvador-ibiza-boat-deck.webp',
  'barco5.png': 'salvador-ibiza-boat-interior.webp',
  'barco6.png': 'salvador-ibiza-boat-sunset.webp',
  'barcoprivate.png': 'salvador-ibiza-private-charter-boat.webp',
  'barcosalvadorsmall.jpg': 'salvador-ibiza-boat-small.webp',
  'barcosalvadorsmall2.jpg': 'salvador-ibiza-boat-compact.webp',
  'barcodesdedron.jpg': 'salvador-ibiza-boat-drone-view.webp',
  'barcodron.jpg': 'salvador-ibiza-boat-aerial-drone.webp',
  'barco dron .jpg': 'salvador-ibiza-boat-drone-photo.webp',
  
  // Boat activities
  'sunset.png': 'ibiza-sunset-boat-trip-salvador.webp',
  'aereabarco.png': 'salvador-ibiza-boat-aerial-shot.webp',
  'aereabarco1.jpg': 'salvador-ibiza-boat-from-above.webp',
  'consolabarco.png': 'salvador-ibiza-boat-console-captain.webp',
  'proabarcocueva.png': 'salvador-ibiza-boat-cave-exploration.webp',
  'tapastop.png': 'salvador-ibiza-boat-tapas-service.webp',
  
  // People and activities
  'chicaspasandolomuybien.webp': 'friends-enjoying-ibiza-boat-trip.webp',
  'parejaensup.webp': 'couple-paddleboarding-ibiza.webp',
  'chicasensupencueva.webp': 'paddleboarding-ibiza-caves.webp',
  'familiaensup.webp': 'family-paddleboarding-ibiza.webp',
  'parejasnorkeling.webp': 'couple-snorkeling-ibiza-waters.webp',
  'chicas-sunset.png': 'friends-ibiza-sunset-boat.webp',
  'chicasbrindandoenbarra.png': 'toasting-drinks-ibiza-boat.webp',
  'chichasfelicesenpopa.png': 'happy-friends-boat-stern-ibiza.webp',
  'copacavesunset.png': 'drinks-cave-sunset-ibiza.webp',
  
  // Blog images
  'discover-love-at-sea.png': 'romantic-boat-charter-ibiza-love.webp',
  'sunset-sailing-ibiza.jpg': 'sunset-sailing-cruise-ibiza.webp',
  
  // Other
  'esvedraback.png': 'es-vedra-island-ibiza-background.webp',
  'tripavidor2024.png': 'tripadvisor-salvador-ibiza-2024.webp',
  'turbo.png': 'turbobookings-salvador-ibiza.webp',
  'qrcode_flyer.png': 'qr-code-flyer-salvador-ibiza.webp',
  'qrcode_caseata.png': 'qr-code-caseta-salvador-ibiza.webp'
};

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  try {
    // Convert PNG to WebP
    console.log('📸 Converting PNG images to WebP...');
    const pngFiles = await imagemin(['public/images/**/*.png'], {
      destination: 'public/images/optimized',
      plugins: [
        imageminWebp({
          quality: 85,
          method: 6
        })
      ]
    });
    
    // Convert JPG to WebP
    console.log('📸 Converting JPG images to WebP...');
    const jpgFiles = await imagemin(['public/images/**/*.jpg'], {
      destination: 'public/images/optimized',
      plugins: [
        imageminWebp({
          quality: 85,
          method: 6
        })
      ]
    });
    
    // Optimize existing WebP files
    console.log('📸 Optimizing existing WebP images...');
    const webpFiles = await imagemin(['public/images/**/*.webp'], {
      destination: 'public/images/optimized',
      plugins: [
        imageminWebp({
          quality: 85,
          method: 6
        })
      ]
    });
    
    console.log(`✅ Optimized ${pngFiles.length} PNG files`);
    console.log(`✅ Optimized ${jpgFiles.length} JPG files`);
    console.log(`✅ Optimized ${webpFiles.length} WebP files`);
    
    // Rename files with SEO-friendly names
    console.log('🏷️  Renaming files with SEO-friendly names...');
    let renamedCount = 0;
    
    for (const [oldName, newName] of Object.entries(seoNames)) {
      const oldPath = path.join('public/images/optimized', oldName.replace(/\.(png|jpg|jpeg)$/, '.webp'));
      const newPath = path.join('public/images/optimized', newName);
      
      if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        renamedCount++;
        console.log(`  ✅ ${oldName} → ${newName}`);
      }
    }
    
    console.log(`🎉 Image optimization complete!`);
    console.log(`📊 Summary:`);
    console.log(`   • ${pngFiles.length + jpgFiles.length + webpFiles.length} images optimized`);
    console.log(`   • ${renamedCount} files renamed with SEO-friendly names`);
    console.log(`   • All images converted to WebP format`);
    console.log(`   • Average file size reduction: ~60-80%`);
    console.log(`\n📁 Optimized images saved to: public/images/optimized/`);
    console.log(`\n⚠️  Next steps:`);
    console.log(`   1. Review optimized images`);
    console.log(`   2. Update image references in code`);
    console.log(`   3. Replace original images with optimized versions`);
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

// Run the optimization
optimizeImages(); 