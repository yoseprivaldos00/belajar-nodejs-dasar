function samplePromise() {
   return Promise.resolve("Yosep")
}
async function run() {
   const name = await samplePromise();
   console.info(name);
}

run();