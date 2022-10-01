const http = require("http");

// the parameter req and res represents the request and response.
const server = http.createServer((req, res) => {
  console.log("user hit the server.");

  res.end("home page.");
});

server.listen(5000);
