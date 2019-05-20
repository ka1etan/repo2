// https://www.hackerrank.com/challenges/30-operators/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("operators.txt");

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
    //console.log("done")
});

function readLine() {
    return inputString[currentLine++];
}

function solve(meal_cost, tip_percent, tax_percent) {
    let tip;
    let tax;
    let totalCost;

    tip = meal_cost * (tip_percent / 100);
    tax = meal_cost * (tax_percent / 100);
    totalCost = meal_cost + tip + tax;

    console.log(totalCost.toFixed(0));

}

function main(){
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}