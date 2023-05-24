const http = require('http');
const data = require('./11.data');
http.createServer((req, resp) => {
    resp.writeHead(200, {"content-type":"application/json"});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4500);