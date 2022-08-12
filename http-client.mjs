import https from "https";


const endpoint = "https://hookb.in/YVky8EB9DbUQjy0QmEMk";
const request = https.request(endpoint, {
   method: "POST",
   headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
   }
}, (response) => {
   response.addListener("data", (data) => {
      console.info(`Receive data : ${data.toString()}`)
   })
});

const body = JSON.stringify({
   firstName: "Yosep",
   lastName: "Silaban",
})

request.write(body);
request.end()