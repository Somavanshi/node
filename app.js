const express=require("express");

const app=express();


app.get('/',(req,res)=>{
    res.send("Hello from this side");
});

const port=process.env.port || 3000;
app.listen(port,()=>{
    console.log(`app is listening on the port ${port}`);
});