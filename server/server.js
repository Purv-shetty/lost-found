//! This is a simple HTTP server that listens on port 8080 and responds with "Hello World!" to any incoming requests. It also logs the platform and hostname of the server when it starts.
let http = require("http");
const os = require("os") //NOTE - OPERATING SYSTEM
const fs = require("fs"); //NOTE - FILE SYSTEM
const fs1 = require("fs/promises"); //NOTE - FILE SYSTEM PROMISES

console.log(os.platform());
http
  .createServer(function (req, res) {
    console.log("Received request for: " + req.url);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  })
  .listen(8080);
console.log("Server is running on: " + os.hostname() + ":8080");

// ! This is an Express Version of the same server. It listens on port 8080 and responds with "Hello World!" to any incoming requests to the root URL ("/"). The Express framework simplifies the process of handling HTTP requests and responses compared to the built-in http module.

/* const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(8080); */

// ! FILE SYSTEM OPERATIONS
//NOTE - Create File

// fs.writeFile("index.html", "<p>HELLO WORLD</p>", function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("File created successfully!");
// });

// const create = async () => {
//     try {
//         await fs1.writeFile("index.html", "<p>Krishna Loves Poorvi</p>"); 
//         console.log("File created successfully!");
//     } catch (error) {
//         console.log(error);
//     }
// }
// create();

const create1 = async (fname, data) =>{
    try {
        await fs1.writeFile(fname, data);
        console.log("File created successfully!");
    } catch (error) {
        console.log(error);
    }
}
create1("index.html",  "<p>Krishna Poorvi</p>");

//NOTE - Read File
const read = fs.readFile("index.html" , function(err,data){
    if(err){ 
        console.log("The error is"+err)
    }else{
        console.log(data.toString())
    }
})

console.log(read)

//NOTE - Rename A File
fs.rename("index.html","kp.html",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File Rename Successful")
    }
})

fs.copyFile("kp.html","server/kp.html",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file copied")
    }
})


fs.unlink("delete.docx", err => console.log(err))