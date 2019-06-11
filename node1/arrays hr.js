// https://www.hackerrank.com/challenges/30-arrays/problem

var fs = require("fs");
var stream = fs.createReadStream("arrays.txt");
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

function main()
{
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let arr2 = [];
    let tmp = 0;

    console.log(arr);

    for (let i = 0; i < n; i++) {
        arr2[i] = arr[n - 1 - i];
    }

    console.log(arr2);

    for (let i = 0; i < n / 2; i++) {
        tmp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = tmp;
    }

    console.log(arr.join(" "));

}