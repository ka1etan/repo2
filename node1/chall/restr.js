// https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup


'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("restr.txt");

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

function repeatedString(s, n) {

    let stringLength = parseInt(s.length)
    let aCounter = 0

    let checkDivide = Math.floor(n / stringLength)
    let checkModule = Math.round(n % stringLength)

    for (let i = 0; i < stringLength; i++) {

        if (s[i] == "a") {
            aCounter++
        }
    }

    aCounter *= checkDivide

    if (checkModule !== 0) {
        let j = 0
        while (j < checkModule) {
            if (s[j] == "a") {
                aCounter++
            }
            j++
        }

    }


    // while(stringLength<=n){
    // s = s.concat(s)
    // stringLength = parseInt(s.length, 10)

    // }

    // for (let i=0; i<n; i++){

    //         if(s[i]=="a"){
    //             aCounter++
    //         }
    // }

    return aCounter

}



function main() {

    const s = readLine()
    const n = parseInt(readLine(), 10);

    //console.log(s, n)

    let result = repeatedString(s, n);
    console.log(result)


}