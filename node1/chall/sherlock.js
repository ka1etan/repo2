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

function isValid2(s) {

    let letters = {}
    let occurence = {}
    let check = "NO"
    let counter = 0
    let firstProp = null

    for (let i = 0; i < s.length; i++) {

        if (!letters[s[i]]) {

            letters[s[i]] = 1

        } else {

            letters[s[i]]++

        }

    }

    for (let props in letters) {

        if (!occurence[letters[props]]) {
            occurence[letters[props]] = 1
        } else {
            occurence[letters[props]]++
        }

    }

    for (let props in occurence) {

        counter++

        if (counter == 1) {
            check = "YES"
            firstProp = props
        } else if (counter == 2) {
            if (((props - firstProp == 1) && occurence[props] == 1) || (occurence[1] == 1)) {
                check = "YES"
            } else { check = "NO" }
        }
        else if (counter > 2) {
            check = "NO"
        }
    }

    // console.table(letters)
    // console.table(occurence)

    return check
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

    let result = isValid2(s);

    console.log(result + "\n");
    console.log(`${s}`)

}

// a:2
// b:3
// c:2


// 2: 2
// 3: 1

// jak sa wiecej niz 2 to nie jest