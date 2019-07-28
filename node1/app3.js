var session = require('cookie-session')
var express = require('express');
const path = require('path');
var cors = require('cors');
var app = express();
app.use(cors({credentials: true}));

var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // LR: this is what parses JSON body (application/json). See: https://www.npmjs.com/package/body-parser#expressconnect-top-level-generic

app.use(session({
  name: 'session-x',
  keys: ['key1', 'key2'],
  cookie: {
    //secure: true,
    //httpOnly: true,
    expires: expiryDate,
    path: '/'
    }
}))


app.get('/', function (req, res) {
    var options = {
        root: path.join(__dirname, ''),
        // dotfiles: 'deny',
        // headers: {
        //   'x-timestamp': Date.now(),
        //   'x-sent': true
        // }
      }    
    res.set('Cache-control', 'no-cache');
    res.sendFile('webapp.html', options);
    res.cookie('cias', "test",  { maxAge: 500000 });
});

app.get('/script.js', function (req, res) {
    var options = {
        root: path.join(__dirname, ''),
        // dotfiles: 'deny',
        // headers: {
        //   'x-timestamp': Date.now(),
        //   'x-sent': true
        // }
      }    
    res.set('Cache-control', 'no-cache');
    res.sendFile('script.js', options);
    // let resultCheck = req.body.add;
    // resultCheck.addEventListener("click", app.post);
});

app.get('/test.txt', function (req, res) {
  var options = {
      root: path.join(__dirname, ''),
    
    }    
  res.set('Cache-control', 'no-cache');
  res.sendFile('test.txt', options);
  
});

app.post('/result', function (req, res) {
    console.log("Received: " + JSON.stringify(req.body))
    // let input = { a: parseInt(req.body.inputBox1), b: parseInt(req.body.inputBox2)};
    // let ret = { add: input.a + input.b};
    // let ret1 = { inputA: "test"};
    //let ret = { result: 123.456 };
    let data = req.body;
    let result = {add: parseInt(data.a) + parseInt(data.b) }
   // res.cookie('inputBox1', data.a,  { maxAge: 500000 });
    res.cookie("data-a", data.a);
    res.cookie("data-b", data.b);
    res.send(result);
});

app.get('/result2', function (req, res) {
  console.log("Received: " + JSON.stringify(req.query))
  let data = req.query;
  let result = {add: parseInt(data.a) + parseInt(data.b) }
  res.cookie("data-a", data.a);
    res.cookie("data-b", data.b);
    res.send(result);
    
});

app.post('/cookiename', function (req, res) {
  console.log("Received: " + JSON.stringify(req.body))
  let data = req.body;
  let discookie = {usernameCookie: data.name }
  res.send(discookie);
});

// var http = require('http');
// http.createServer(function (req, res) {
 
//    if (req.method == 'POST') {
//       var post_data = '';
//       req.on('data', function (data) {
//          post_data += data;
//       });
//       req.on('end', function () {
//          res.writeHead(200, {'Content-Type': 'text/plain'});
//          res.end('\n');
 
//          console.log('RECEIVED THIS DATA:\n'+ post_data)
 
//       });
//    }
//    else
//    {
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//       res.end('\n');
//    }
 
// }).listen(5000, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:5000/');



// var server = app.listen(5000, function () {
//     console.log('Node server is running...');
// });

var server = app.listen(5000, '127.0.0.1');
console.log('Node server is running...');
   
    

