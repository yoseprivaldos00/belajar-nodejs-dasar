import { Console } from "console";
import fs from "fs";

const logFile = fs.createWriteStream("application.log");

// membuat output dan err console kedalam file
const log = new Console({
   stdout: logFile,
   stderr: logFile
});

log.info("Hellow")
log.error("ups")

const person = {
   firstname: "Yosep",
   lastname: "Silaban"
}

log.table(person)

