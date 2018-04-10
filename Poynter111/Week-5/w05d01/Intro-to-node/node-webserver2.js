const http = require('http');

http.createServer(function(req, res){
  if (req.url === '/'){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('Welcome to the Home page !');
  }else if (req.url === '/about'){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('Welcome to the about page !');
  }else {
    res.writeHead(404, {'Content-type': 'text/plain'});
    res.end('DOE ! That page does not exsist');
  }
}).listen(3000, 'localhost');

console.log('Server running at http://localhost:3000');
