//dalam pembuatan web 
// penerimaan data biasanya dilakukan dalam bentuk buffer
const buffer = Buffer.from("Yosep R Silaban");
console.info(buffer);
console.info(buffer.toString());
buffer.reverse();
console.info(buffer.toString());

console.info("  ")
//buffer bisa digunaka untuk melakkan encoding dari satu encoding ke encoding yang lain
const buffer2 = Buffer.from("Yosep R Silaban", "utf8");

console.info(buffer2.toString())
console.info(buffer2.toString("base64"));
console.info(buffer2.toString("latin1"));
console.info(buffer2.toString("hex"));

const hex = Buffer.from("596f73657020522053696c6162616e", "hex");
console.info(hex.toString("latin1"));

const bufferBase64 = Buffer.from("WW9zZXAgUiBTaWxhYmFu", "base64");
bufferBase64.reverse();
console.info(bufferBase64.toString("utf8"))

