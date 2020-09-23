// https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=recursion-backtracking

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("fibo.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();

});

function readLine() {
    return inputString[currentLine++];
}


function fibonacci(n) {

    if(n <= 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}



function main() {

    let n = parseInt(readLine())

    let result = fibonacci(n);

    //console.log(n)

    console.log(result + "\n");

}

// dla n=4:
// 3
// 2
// 1 return ( end n-1)

// 4-2 = 2
// 2-1 = 1
// return 1
// 2 -2 = 0
// return 0

// 3-2 = 1
// return 1

// 2-2 = 0
// return 0