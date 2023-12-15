import { Express } from "express";
import express from "express";

const app=express();

app.get("/hello",(req,res,next) => {
    return res.send("Hello from get");
})

app.listen(5000,()=> console.log("Server is live")); 