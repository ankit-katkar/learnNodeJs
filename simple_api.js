const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.write(JSON.stringify({ description: 'this is a simple API' }));
    resp.end()
}).listen(5000);
