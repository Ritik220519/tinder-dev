const express = require("express");


const app = express();


app.get("/user" , (req, res)=>{
    res.send("data fetch from user")
})
app.post("/user" , (req,res)=>{
    res.send("database saved successfully!")
})
app.delete("/user" , (req , res)=>{
    res.send("data deleted successfully!")
})

app.use("/test" , (req, res)=>{
    res.send("Hello from test");
})


app.listen(3528 , ()=>{
    console.log("server is running on port 3528")
});