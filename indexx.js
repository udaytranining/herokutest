const express = require("express")
const app = expres()

app.get("/",function(res,req){
    res.send("woprking!!");
});

app.listen(process.env.port || 5000);

