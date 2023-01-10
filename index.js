const express = require("express")
const app = express()

app.get("/",function(req,res){
    res.send("woprking fine new final!!");
});

app.listen(process.env.port || 5000);

