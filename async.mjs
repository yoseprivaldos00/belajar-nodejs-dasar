// pada javascript modules by default nya merupakan async function
function samplePromise() {
   return Promise.resolve("Yosep")
}
const name = await samplePromise();
console.info(name);


