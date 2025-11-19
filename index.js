const http = require("http");

const server = http.createServer((request, response) => {
  // request - sorov
  // respon - javob
  console.log(request.url);

  response.write("<h1>Hello world 1</h1>");
  response.write("<h1>Hello world 2</h1>");
  response.end();
});

server.listen(3000, () => {
  console.log("Server has beeen started on port 3000");
});
