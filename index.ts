import http from 'http';
import primes from 'primes'
//var http = require('http');

http.createServer(function(req, res) {
    const nums = primes(0,100);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    nums.forEach((num)=>res.write('cilo je ${num} \n'))
    res.end('Test');
}).listen(8080);