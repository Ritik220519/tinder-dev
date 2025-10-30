const express = require("express");


const app = express();


app.use("/hello" , (req, res)=>{
    res.send("Hello from Ritik");
})

app.use("/user" , (req,res)=>{
    res.send("Hello from the user")
})
app.use("/" , (req, res)=>{
    res.send("Hello from backend");
});

app.listen(3528 , ()=>{
    console.log("server is running on port 3528")
});