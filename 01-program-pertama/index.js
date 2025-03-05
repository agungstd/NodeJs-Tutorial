import http from "http";

// The 'http' module is imported to create an HTTP server.

const server = http.createServer((req, res) => {
  // The 'createServer' method of the 'http' module creates a new server instance.
  // It takes a callback function with 'req' (request) and 'res' (response) parameters.
  
  res.writeHead(200, { "Content-Type": "text/html" });
  // The 'writeHead' method sets the HTTP response header with a status code of 200 (OK).
  // It also sets the 'Content-Type' header to 'text/html' indicating that the response will be HTML content.
  
  res.write("<h1>Hello World</h1>");
  // The 'write' method sends a response body to the client, in this case, an HTML <h1> element with the text "Hello World".
  
  res.end();
  // The 'end' method signals that the response is complete.
});

server.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});
// The 'listen' method makes the server start listening for incoming connections on port 3000.
// A callback function is passed to log a message to the console once the server is listening.
