var express = require('express');
const path = require('path');

var app = express();

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



var server = app.listen(5000, function () {
    console.log('Node server is running...');
});
