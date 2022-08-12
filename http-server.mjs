import http from "http";

const server = http.createServer((request, response) => {
   if (request.method === "POST") {
      request.addListener("data", (data) => {
         response.setHeader("Content-Type", "application/json");
         response.write(`Hello ${data}`)
         response.end()
      })
   } else {
      if (request.url === "/yosep") {
         response.write(`Hello Yosep`)
      } else {
         response.write(`Hello HTTP Server`)
      }
      response.end()
   }

})

server.listen(3000)