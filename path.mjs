import path from "path";
//Standard library yang digunakan untuk bekerja dengan lokasi file dan directory/folder

const locPath = "/Users/lenovo/contoh.html"; //bebas ngk harus ada filenya

console.info(path.sep);
console.info(path.dirname(locPath));
console.info(path.basename(locPath));
console.info(path.extname(locPath));
console.info(path.parse(locPath));