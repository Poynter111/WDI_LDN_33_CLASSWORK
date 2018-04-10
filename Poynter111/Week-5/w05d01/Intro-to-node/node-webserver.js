const http = require('http');

const app = http.createServer(function(request, response){
  const answer = `
    Request URL: ${request.url}
    Request type: ${request.method}
    Request headers: ${JSON.stringify(request.headers)}
  `;

  response.writeHead(200, {
    'Content-type': 'text/plain'
  });

  response.end(answer);
});

app.listen(3000, 'localhost');
console.log('Server Running at http://localhost:3000');
