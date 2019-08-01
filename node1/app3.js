//var session = require('cookie-session')
var express = require('express');
const path = require('path');
//var cors = require('cors');
var app = express();
//app.use(cors({credentials: true}));

var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

var bodyParser = require("body-parser");

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // LR: this is what parses JSON body (application/json). See: https://www.npmjs.com/package/body-parser#expressconnect-top-level-generic

//app.use(session({
//  name: 'session-x',
//  keys: ['key1', 'key2'],
//  cookie: {
//    //secure: true,
//    //httpOnly: true,
//    expires: expiryDate,
//    path: '/'
//    }
//}))


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
//    res.cookie('cias', "test",  { maxAge: 500000 });
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

function handleAdd(res, data)
{
  let result = {add: parseInt(data.a) + parseInt(data.b) }
  res.cookie("data", JSON.stringify(data), {encode: String});
  res.send(result);
}

app.post('/result', function (req, res) {
    console.log("Received: " + JSON.stringify(req.body))
    let data = req.body;
    handleAdd(res, data);
});

app.get('/result2', function (req, res) {
  console.log("Received: " + JSON.stringify(req.query))
  let data = req.query;
  handleAdd(res, data);
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
   
    

