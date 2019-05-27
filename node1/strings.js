//https://www.hackerrank.com/challenges/30-review-loop/problem


var fs = require("fs");
var stream = fs.createReadStream("strings.txt");
// var stream = process.stdin;

// process.stdin.resume();
// process.stdin.setEncoding('ascii');
stream.resume();
stream.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

//process.stdin.
stream.on('data', function (data) {
    input_stdin += data;
});

//process.stdin.
stream.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    processData();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function processData(input) {
    var str = readLine();
    //console.log(str);
    let a1 = [];
    let a2 = [];
    
    for ( let  j = 0;  j < str.length;  j++)
    {
        if (j%2 == 0){
           a1.push(str[j]);
        } else {a2.push(str[j])}
    }
    
    console.log(a1.join("")+" "+a2.join(""));
    
}