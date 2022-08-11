import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("Yosep\n")
writer.write("Rivaldo\n")
writer.write("Silaban\n")

writer.end();

const reader = fs.createReadStream("target.log")
//reader.read()
reader.addListener("data", (data) => {
   console.log(data.toString())
})

// fs.readFile("target.log", (err, data) => {
//    if (err) {
//       console.log(err)
//    }
//    console.log(data.toString())
// })


