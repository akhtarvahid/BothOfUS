var express = require('express');
var app= express();
var mongojs=require('mongojs');
var db=mongojs('testcases',['testcases']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/"))
app.use(bodyParser.json());




app.listen(1331);
console.log("server running on port 1331");
