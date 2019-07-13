var express = require('express');
const path = require('path');
var cors = require('cors');
var app = express();
app.use(cors({credentials: true}));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));



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

app.post('/result', function (req, res) {
    let input = { a: parseInt(req.body.inputBox1), b: parseInt(req.body.inputBox2)};
    let ret = { result: input.a + input.b};
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
   
    

