const http = require('http'); // To import HTTP module.

http.createServer((req, resp)=>{
    // resp.write("This is normal write function.");
    resp.write("<h1>This is write function with HTML tags</h1>");
    resp.end(); // To end node server
}).listen(4500); // To accept response and request at port number 4500.