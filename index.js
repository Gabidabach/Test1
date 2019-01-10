http.createServer(function (request, response) {

  response.writeHead(200, { 'Content-Type': 'text/plain' });

  response.end('Li213123123123ad\n');
}).listen(8081);

console.log;
