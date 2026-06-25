import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "src/assets";
const outputDir = "src/assets-optimized";

const supportedFormats = [".jpg", ".jpeg", ".png"];

function getAllImages(dir) {
  const files = fs.readdirSync(dir);
  let images = [];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      images = images.concat(getAllImages(fullPath));
    } else if (supportedFormats.includes(path.extname(file).toLowerCase())) {
      images.push(fullPath);
    }
  }

  return images;
}

async function optimizeImages() {
  const images = getAllImages(inputDir);

  for (const imagePath of images) {
    const relativePath = path.relative(inputDir, imagePath);
    const parsed = path.parse(relativePath);

    const outputPath = path.join(
      outputDir,
      parsed.dir,
      `${parsed.name}.webp`
    );

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    await sharp(imagePath)
      .resize({
        width: 1600,
        withoutEnlargement: true,
      })
      .webp({
        quality: 80,
      })
      .toFile(outputPath);

    console.log(`Optimized: ${imagePath} → ${outputPath}`);
  }
}

optimizeImages();