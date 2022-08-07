import process from "process";
import readline from "readline";

const input = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

input.question("Sebutkan nama pertamamu : ", (firstname) => {
   input.question("Sebutkan nama tengahmu: ", (middleName) => {
      console.log(`Halo ${firstname} ${middleName}`)
      input.close()
   })
})


