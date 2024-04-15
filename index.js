
//module exports
// const a={
//     sum(a,b){
//         console.log(a+b /2);
//     },
//     percent(a,b){
//         console.log((a/b)*100);
//     }
// }
// module.exports= a;


//read file
// const fs=require("fs");
// // console.log(fs)
// fs.writeFile("./index.txt","i am always here for you",()=>{
//     console.log("written")
// })
// fs.readFile("./sample.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     console.log(data);
// })


//path
// const path=require("path")
// const b="/hello";

// // const a=path.extname("./index.js");
// // const a=path.join("./index.js"+b);
// const a=path.dirname("./node/index.js");

// console.log(a)

//os
// const os=require("os");
// console.log(os.hostname());
// console.log(os.freemem());
// console.log(os.version());
// console.log(os.machine());
// console.log(os.arch());

const fs=require("fs");

const http=require("http");
const port=4500;
const hostname="localhost";

const Server=fs.readFileSync("./index.html","utf-8");
// console.log(Server)

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        return res.end(Server);
    }
    if(req.url==="/about"){
        return res.end("<h1>About Page</h1>");
    }
    if(req.url==="/contact"){
       return res.end("<h1>Contact Page</h1>");
    }
    if(req.url==="/service"){
        return res.end("<h1>service Page</h1>");
    }
    else{
        return res.end("error found 404")
    }

})
server.listen(port,hostname,()=>{
    console.log(`server is working on http://${hostname}:${port}`)
})
