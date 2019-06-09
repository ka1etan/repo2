// var express = require("express");
// var app = express();
// app.get("k1x", (req, res, next) => {
//     //res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
//     //console.log("hello");
//     res.send('<html><body><h1>Hello World</h1></body></html>');
    
// });
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

var express = require('express');
var app = express();
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));

var tmp = "zzz";
var a = 200;
var ap = parseInt(a);
var b = 4;

function score(a)
{
 return a;
}

// app.get('/k1x', function (req, res) {
//     //res.send('<html><body><h1>Hello World</h1></body></html>');
//     res.send(tmp);
    
// });

var v1 = function (req, res) {
    res.send(b.toString());
    //next()
  }
  
  //var v2 = function (req, res) {
  //   console.log(a +b);
  // }
  
  app.get('/k1x', [v1]);

  //app.get('/:Value', (req, res) => res.send(req.params.Value.toUpperCase()))

  // app.get('/add:Value', (req, res) => res.send(req.params.Value.toUpperCase()))

// app.get('/ab?cd', function (req, res) {
//     //res.send('<html><body><h1>Hello World</h1></body></html>');
//     res.send('ab?cd');
// });

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
    console.log(tmp);
    console.log(a);
});