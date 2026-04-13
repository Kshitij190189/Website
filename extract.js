import { exportImages } from 'pdf-export-images';
import fs from 'fs';
import path from 'path';

async function extractAll() {
  const fileNames = ['Part 1.pdf', 'Part 2.pdf', 'Part 3.pdf'];
  const outputDir = path.resolve('./src/assets');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const fileName of fileNames) {
    console.log(`Extracting from ${fileName}...`);
    try {
      const pdfPath = path.resolve(fileName);
      const images = await exportImages(pdfPath, outputDir);
      console.log(`Extracted ${images.length} images from ${fileName}`);
    } catch (e) {
      console.error(`Error extracting ${fileName}:`, e);
    }
  }
}

extractAll();
