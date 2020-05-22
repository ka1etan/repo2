// https://www.hackerrank.com/challenges/30-binary-numbers/submissions/code/128242309

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("binary.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();

});

function readLine() {
    return inputString[currentLine++];
}

function convertAndFind(a) {
    //Enter your code here
    let binary = []

    let mod = a % 2
    let div = Math.floor(a / 2)

    while (div > 0) {

        if (mod == 0) {
            binary.push(0)
        } else { binary.push(1) }

        mod = div % 2
        div = Math.floor(div / 2)

        if (div == 0) {
            binary.push(1)
        }

    }

    console.log(binary.reverse())

    //console.log(max(
    console.log(max(findCons(binary.reverse())))

    return binary.reverse()
}

function findCons(array) {

    let counter = 0
    let cons = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 1) {
            counter++
        } else {

            cons.push(counter)
            counter = 0
        }
    }

    cons.push(counter)

    return cons

}

function max(array) {

    let max = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }

    return max
}


function main() {

    var value = parseInt(readLine(), 10);
    convertAndFind(value)
}