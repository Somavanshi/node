const express=require("express");

const app=express();


app.get('/',(req,res)=>{
    res.send("Hello from this side");
});

app.listen(3000,()=>{
    console.log("app is listening on the port 3000");
});