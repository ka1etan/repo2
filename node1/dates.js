//https://www.hackerrank.com/challenges/js10-date/topics/javascript-dates


var fs = require("fs");
var stream = fs.createReadStream("in2.txt");
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
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main(input) {
    var date1 = new Date(readLine());
    console.log(date1.toString());
    console.log(date1.toISOString());


    var date2 = new Date(readLine());
    console.log(date2.toString());
    console.log(date2.toISOString());
}