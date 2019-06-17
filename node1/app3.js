var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', function (req, res) {
    res.set('Cache-control', 'no-cache');
    res.sendFile('webapp.html');
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
