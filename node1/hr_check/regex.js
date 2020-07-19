//

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("regex.txt");

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


function main() {
    const t = parseInt(readLine(), 10);

    let obj = {}
    let sort = []

    for (let tItr = 0; tItr < t; tItr++) {
        const input = readLine().split(' ');

        const name = input[0]

        const email = input[1]

        obj[email] = name
    }

    for (let props in obj) {

        if ((props.match(/@gmail/g)) !== null) {
            sort.push(obj[props])
        }

    }
    sort.sort()

    for (let i = 0; i < sort.length; i++) {
        console.log(sort[i])
    }
}