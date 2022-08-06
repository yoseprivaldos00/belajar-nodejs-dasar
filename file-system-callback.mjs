import fs from "fs";
// cara asynchrounus with callback
// membaca temp.txt
fs.readFile("temp.txt", (err, data) => {
   if (err) {
      console.log(err)
   };
   console.log(data.toString())
})






