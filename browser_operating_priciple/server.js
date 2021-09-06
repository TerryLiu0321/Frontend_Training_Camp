const { on } = require('events');
const http = require('http');

http.createServer((request, response) => {
    let body = [];
    http.request.on('error', err => {
        console.error(err);
    }).on('data', chunk => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log('body:', body);
        response.writeHead(200, {'Content-Type': 'text/html'});
    });
}).listen(8088);

console.log('server started');