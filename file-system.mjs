import fs from "fs/promises";
// cara asynchrounus with promise
const buffer = await fs.readFile("file-system.mjs");
console.info(buffer.toString())
await fs.writeFile("temp.txt", "file ini dibuat dari file-system.mjs")


