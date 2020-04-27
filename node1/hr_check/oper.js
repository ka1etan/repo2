// https://www.hackerrank.com/challenges/30-operators/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("oper.txt");

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

function solve(meal_cost, tip_percent, tax_percent) {

    let mealSum = meal_cost + ((tip_percent/100)*meal_cost) + ((tax_percent/100)*meal_cost)
    // 1,7425 + 0,5125
    console.log(Math.round(mealSum))
    return Math.round(mealSum)

}


function main() {

   
        var meal_cost = parseFloat(readLine());
        var tip_percent = parseInt(readLine(), 10);
        var tax_percent = parseInt(readLine(), 10);
        solve(meal_cost, tip_percent, tax_percent)
    
}