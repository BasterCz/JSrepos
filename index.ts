import http from 'http';
import primes from 'primes'
//var http = require('http');
type Person = {
    id: number | string;
    name: string;
}


const createPersons = () =>{
    const nums = primes(0,100);
    const presons : Person[] = nums.map((num, index) => {
        return{
            id: index,
            name: "osoba_" + num,
        }
    })
    return presons;
}
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    createPersons().forEach((person)=>res.write(`${person.name} \n`))
    res.end('Test');
}).listen(8080);