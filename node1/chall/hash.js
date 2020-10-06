// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=dictionaries-hashmaps


'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("hash.txt");

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

function checkMagazine(magazine, note) {

    let check = "Yes"
    let obj = {}

    for (let i = 0; i < magazine.length; i++) {
        if (!obj[magazine[i]]) {
            obj[magazine[i]] = 1
        }
        else { obj[magazine[i]]++ }
    }

    //console.table(obj)
    for (let j = 0; j < note.length; j++) {
        if (!obj[note[j]] || obj[note[j]] < 1) {
            check = "No"
            break
        } else if (obj[note[j]] > 0) { obj[note[j]]-- }
    }

    console.log(check)

}



function main() {

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);

    //console.log(note)


}