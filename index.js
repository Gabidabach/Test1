http.createServer(function (request, response) {

  response.writeHead(200, { 'Content-Type': 'text/plain' });

  response.end('Fuck Hapoel\n');
}).listen(8081);

// Console will print the message
console.log;