import util from "util";
import fs from "fs";
console.info(util.format(`nama %s`, `Yosep`));

const JSON = fs.readFileSync("util.json");
console.info(util.format("%s", JSON));

