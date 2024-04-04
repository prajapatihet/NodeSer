var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200);
    if (req.url == '/') {
        res.end(fs.readFileSync("home.html"));
    }
    else if (req.url == '/course') {
        res.end(fs.readFileSync("course.html"));
    }
    else if (req.url == '/contact') {
        res.end(fs.readFileSync("contact.html"));
        res.end();
    }
    else {
        res.end('Invalid Responce');
    }
}).listen(3000);

console.log('Server running at http://localhost:3000');