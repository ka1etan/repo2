
//https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

var fs = require("fs");
var stream = fs.createReadStream("ic.txt");
// var stream = process.stdin;

// process.stdin.resume();
// process.stdin.setEncoding('ascii');
stream.resume();
stream.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;


var itrim = "";
var itrim2 = "";
var mat = [];
var reg = /\r/g;

var book = {};

var input_stdin_array2 = "";


var input_currentline2 = 7;

//process.stdin.
stream.on('data', function (data) {
    input_stdin += data;
    itrim = input_stdin.trim();

    itrim2 = itrim.replace(reg, " ");

});

//process.stdin.
stream.on('end', function () {

    input_stdin_array = itrim2.split("\n");
    //input_stdin_array2 = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


function main() {


    var t = parseInt(readLine());

    for (let i = 0; i < t; i++) 
    {

        var str = readLine();
        var strdiv = str.split(" ");


        console.log(strdiv[1]);

        var name = strdiv[0];
        var phone = strdiv[1];

        book[name] = phone;
    }


    // console.log(book);

    for (let j = t; j < input_stdin_array.length - 1; j++) 
    {
        let str2 = readLine();
        let str2trim = str2.trim();

        if (book[str2trim]) 
        {
            console.log(str2trim + "=" + book[str2trim]);

        }
        else 
        {
            console.log("Not found");

        }

    }

}