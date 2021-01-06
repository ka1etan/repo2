// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=strings


'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("sherlock.txt");

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

function isValid(s) {

    let obj = {}
    let check = "NO"
    let checkFirst = 0
    let counter = 1

    for (let i = 0; i < s.length; i++) {

        if (!obj[s[i]]) {

            obj[s[i]] = 1

        } else {

            obj[s[i]]++

        }

        checkFirst = obj[s[0]]

    }

    for (let props in obj) {

        if ((checkFirst !== obj[props])) {

            if (obj[props] == 1) { counter-- } else {

                let diff = (checkFirst - obj[props])
                counter--

                if (diff > 1) {
                    while (diff > 1) {
                        diff--
                        counter--
                    }
                }
                else if (diff < -1) {
                    while (diff < -1) {
                        diff++
                        counter--
                    }
                }
            }
        }
    }

    if (counter == 0 || counter == 1) {
        check = "YES"
    }

    console.table(obj)
    //console.table(letterCheck)

    return check

}


function main() {

    const s = readLine()

    let result = isValid(s);

    console.log(result + "\n");
    console.log(`${s}`)

}