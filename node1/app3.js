var express = require('express');
const path = require('path');
var cors = require('cors');
var app = express();
app.use(cors({credentials: true}));


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // LR: this is what parses JSON body (application/json). See: https://www.npmjs.com/package/body-parser#expressconnect-top-level-generic


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
    // let resultCheck = req.body.add;
    // resultCheck.addEventListener("click", app.post);

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
      // dotfiles: 'deny',
      // headers: {
      //   'x-timestamp': Date.now(),
      //   'x-sent': true
      // }
    }    
  res.set('Cache-control', 'no-cache');
  res.sendFile('test.txt', options);
  // let resultCheck = req.body.add;
  // resultCheck.addEventListener("click", app.post);
});

app.post('/result', function (req, res) {
    console.log("Received: " + JSON.stringify(req.body))
    let input = { a: parseInt(req.body.inputBox1), b: parseInt(req.body.inputBox2)};
    let ret = { result: input.a + input.b};
    res.send(ret);
});

app.get('/result2', function (req, res) {
  console.log("Received: " + JSON.stringify(req.query))
  let ret = { result: 123.456 };
  res.send(ret);
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
   
    

