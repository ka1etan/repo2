// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting


'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("sort1.txt");

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

function countSwaps(a) {

    let swapCount = 0

    for (let i=0;i<a.length;i++){

        for (let j=0;j<a.length-1;j++){
            if (a[j]>a[j+1]){
                //swap(a[j], a[j+1])
                let tmp = a[j]
                a[j] = a[j+1]
                a[j+1] = tmp
                swapCount++
            }
        }
    }

    console.log(`Array is sorted in ${swapCount} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[a.length-1]}`)

}



function main() {

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);


}