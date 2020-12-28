// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting


'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("toyz.txt");

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

function maximumToys(prices, budget) {

    let maximum = 0
    let sum = 0
    let sortPrices = prices.sort((a, b) => { return a - b })

    for (let i = 0; i < sortPrices.length; i++) {

        if (sum < budget && budget > sortPrices[i]) {

            sum += sortPrices[i]

            if (sum < budget) {
                maximum++
            }

        }
    }

    return maximum

}


function main() {

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const prices = readLine().split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

    let result = maximumToys(prices, k);

    console.log(result + "\n");
    //console.log(`prices: ${prices}, budget: ${k}`)

}