// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("socks.txt");

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


function sockMerchant(n, ar) {

    let count = 0
    ar.sort()
    //console.table(ar)
    for (let i = 0; i < n; i++) {
        let check = ar[i]
        if (check == ar[i + 1]) {
            count++
            i = i + 1
        }
    }
    return count
}



function main() {
    const t = parseInt(readLine(), 10);
    const input = readLine().split(' ');
    let arr = []

    for (let i = 0; i < t; i++) {

        let color = parseInt(input[i], 10);
        arr.push(color)

    }

    let result = sockMerchant(t, arr);
    console.log(result)


}