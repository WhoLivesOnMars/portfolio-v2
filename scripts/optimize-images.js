import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "src/assets-optimized/projects";
const outputDir = "src/assets-optimized/projects-compressed";

const supportedFormats = [".jpg", ".jpeg", ".png", ".webp"];

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
  const targetFiles = ["three.webp", "eleven.webp", "eight.webp"];
  
  const images = getAllImages(inputDir).filter((imagePath) =>
    targetFiles.includes(path.basename(imagePath))
  );

  for (const imagePath of images) {
    const relativePath = path.relative(inputDir, imagePath);
    const parsed = path.parse(relativePath);

    const outputPath = path.join(
      outputDir,
      parsed.dir,
      `${parsed.name}.webp`
    );

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    const beforeSize = fs.statSync(imagePath).size;

    await sharp(imagePath)
      .resize({
          width: 2400,
          withoutEnlargement: true,
      })
      .webp({
          quality: 85,
          effort: 6,
      })
      .toFile(outputPath);

    const afterSize = fs.statSync(outputPath).size;

    console.log(
      `Optimized: ${relativePath} | ${Math.round(beforeSize / 1024)} Ko → ${Math.round(afterSize / 1024)} Ko`
    );
  }
}

optimizeImages();