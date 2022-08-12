import { parentPort, threadId } from "worker_threads";

parentPort.addListener("message", (message) => {
   for (let i = 0; i < message; i++) {
      console.log(`Thread-${threadId} send message ${i}`)
      parentPort.postMessage("DATA KIRIMAN")
   }
   parentPort.close()
})