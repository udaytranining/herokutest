const express = require("express")
const app = express()

app.get("/",function(res,req){
    res.send("woprking!!");
});

app.listen(process.env.port || 5000);

