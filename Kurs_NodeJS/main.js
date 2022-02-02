var server = require('http');

server.createServer(function (request, response) {

    var url = request.url;
    response.writeHead(200, {
        'Content-Type': 'text'
    });

    console.log(request.url);
    response.end(url);
}).listen(8001);

console.log('Serwer nasłuchuje pod adresem 172.0.0.1:8001')