//https://www.hackerrank.com/challenges/30-more-exceptions/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("exc.txt");

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

class Calculator {
    power(a, b) {
        let i = 0
        let score = a
        if (b == 0) {
            score = 1

        } else if (a < 0 || b < 0) {
            throw "n and p should be non-negative"
        } else {
            while (i < (b - 1)) {
                score = score * a
                i++
            }
        }
        return score
    }
}

function main(){
    var myCalculator=new Calculator();
    var T=parseInt(readLine());
    while(T-->0){
        var num = (readLine().split(" "));
        try{
            var n=parseInt(num[0]);
            var p=parseInt(num[1]);
            var ans=myCalculator.power(n,p);
            console.log(ans);
        }
        catch(e){
            console.log(e);
        }

    }
}