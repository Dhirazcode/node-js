
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
const fs=require("fs");
// console.log(fs)
fs.writeFile("./index.txt","i am always here for you",()=>{
    console.log("written")
})
fs.readFile("./sample.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    console.log(data);
})