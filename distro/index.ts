var h=Object.create,o=Object.defineProperty,g=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,y=Object.getOwnPropertyNames,q=Object.getOwnPropertyDescriptor,P=r=>o(r,"__esModule",{value:!0}),i=(r,e)=>()=>(e||(e={exports:{}},r(e.exports,e)),e.exports),b=(r,e,s)=>{if(P(r),e&&typeof e=="object"||typeof e=="function")for(let t of y(e))!w.call(r,t)&&t!=="default"&&o(r,t,{get:()=>e[t],enumerable:!(s=q(e,t))||s.enumerable});return r},p=r=>r&&r.__esModule?r:b(o(r!=null?h(g(r)):{},"default",{value:r,enumerable:!0}),r),u=i((C,f)=>{"use strict";f.exports=function(r){if(r==1)return!1;r+=2;for(var e=Math.sqrt(r),s=new Array(r).join(",").split(",").map(function(){return!0}),t=2;t<=r;t++)if(s[t])for(var n=t*t;n<r;n+=t)s[n]=!1;return s[r-2]}}),l=i((D,a)=>{"use strict";var c=u();a.exports=function(r,e){var s;return arguments.length?r<0||e<0?[]:r===e?c(r)?[r]:[]:(~r&&~e&&r>e&&(s=r,r=e,e=s),e===void 0&&(e=r,r=0),r==0&&(r=1),new Array(e+1).join(",").split(",").map(function(t,n){return n}).slice(r,e).filter(c)):[]}}),v=p(require("http")),d=p(l()),A=()=>d.default(0,100).map((s,t)=>({id:t,name:"osoba_"+s}));v.default.createServer((r,e)=>{e.writeHead(200,{"Content-Type":"text/plain"}),A().forEach(({id:s,name:t})=>e.write(`${s} ${t} 
`)),e.end("Done!!")}).listen(8080);
