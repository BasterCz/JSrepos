import http from 'http';

import primes from 'primes'
//var http = require('http');
type Person = {
    id: number | string;
    name: string;
}
//  const obj = {id: "aa", name: "aaa"}
//  const {id, name} = obj;

const createPersons = (max?: number) =>{
    const nums = primes(0, max ?? 100);
    const presons : Person[] = nums.map((num, index) => {
        return{
            id: index,
            name: "osoba_" + num,
        };
    });
    return presons;
}
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    createPersons().forEach(({id, name}) =>
    res.write(`${id} ${name} \n`))
    res.end('Done!!');
}).listen(8080);