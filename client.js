var express = require('express');
var request = require('request');
var http = require('http');
http.globalAgent.maxSockets = 1;

var app = express();
app.get('/', function(req, res){
  var r = request("http://127.0.0.1:3001/", function (err, response, body) {
    console.log(err, body);
    res.send("OK");
  });
});
app.listen(3002);
