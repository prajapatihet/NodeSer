var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200);
    if (req.url == '/') {
        res.write('<h1>Welcome to Node Server</h1>');
        res.end();
    }
    else if (req.url == '/course') {
        res.write('<h1>Welcome to Course Page</h1>');
        res.end();
    }
    else if (req.url == '/contact') {
        res.write('<h1>Welcome to Contact Us</h1>\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14766.869241846365!2d73.3533972615338!3d22.2886958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fda2400192473%3A0xc319c9237f2928e8!2sParul%20University!5e0!3m2!1sen!2sin!4v1712207804353!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
        res.end();
    }
    else {
        res.end('Invalid Responce');
    }
}).listen(3000);

console.log('Server running at http://localhost:3000');