//

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("arrays.txt");

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


function reverse(n, array) {

    let half = Math.floor(n / 2)

    for (let i=0, j = n- 1; i < half || j > half; i++, j--){
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    console.log(array.join(' '))

    return array
  
}

function main() {
    const t = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10))

    //console.log(arr)

    reverse(t, arr)
    
}