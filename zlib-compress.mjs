import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync("zlib-compress.mjs")
const result = zlib.gzipSync(source);

console.log(result.toString())
fs.writeFileSync("zlib.mjs.txt", result);


