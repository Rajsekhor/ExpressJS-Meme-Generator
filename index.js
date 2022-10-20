const express=require("express");
const server=express();
const memesList=require("./memeResource")

server.get("/meme",(request,response)=>{
    const list=[...memesList];
    const randomIndex=Math.floor(Math.random()*list.length);
    console.log(list[randomIndex])
    response.send(`<img src="${list[randomIndex]}"/>`);
})

server.get("/meme/:id",(request,response)=>{
    const list=[...memesList];
    const num=request.params.id
    console.log(list[num])
    response.send(`<img src="${list[num]}"/>`);
})

server.get("/",(request, response) => {
    response.send("<h1>Hello World!!!</h1>")
})


server.listen(3000,()=>{
    console.log("Server started on port 3000")
})