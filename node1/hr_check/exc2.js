// https://www.hackerrank.com/challenges/30-more-exceptions/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("exc2.txt");

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


class Calculator {


    power(a, b) {

        if (a < 0 || b < 0) {
            throw "n and p should be non-negative"
        } else {

            let result = Math.pow(a, b)
            return result
        }
    }

}

function main() {
    var myCalculator = new Calculator();
    var T = parseInt(readLine());
    while (T-- > 0) {
        var num = (readLine().split(" "));
        try {
            var n = parseInt(num[0]);
            var p = parseInt(num[1]);
            var ans = myCalculator.power(n, p);
            console.log(ans);

        }
        catch (e) {
            console.log(e);
        }

    }
}