var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Hello Wolrd3');
});

app.listen(1337,'localhost');