import timers from "timers/promises";

console.log(new Date())
const date = await timers.setTimeout(5000, "Hello");
console.info(new Date());
console.info(date);

for await (const startTime of timers.setInterval(1000, new Date())) {
   console.info(`Start Timer at ${startTime}`)
}