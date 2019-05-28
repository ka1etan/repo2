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
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function processData(input) {
    //var str = readLine();
    //console.log(str);
    let a1 = [];
    let a2 = [];
    
    // for ( let  j = 0;  j < str.length;  j++)
    // {
    //     if (str[j] !== "\n"){
    //     if (j%2 == 0){
    //        a1.push(str[j]);
    //     } else {a2.push(str[j])}
    // }
    // }
    
    // console.log(a1.join("")+" "+a2.join(""));

    // for (let j = 0, i = 1; j < str.length && i < str.length; j = j+2, i= i + 2){
    //     a1.push(str[j]);
    //     a2.push(str[i]);

    // }

    for (let j = 0; j < input.length; j++) {
        if (input[j] !== "\n") {
            if (j % 2 == 0) {
                a1.push(input[j]);
            } else { a2.push(input[j]) }
        }
    }

    console.log(a1.join("") + " " + a2.join(""));
    
}

function main()
{
    var T = parseInt(readLine());
    for (i = 0; i < T; i++) {
        var str = readLine();
        processData(str);
    }

}