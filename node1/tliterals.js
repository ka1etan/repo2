// https://www.hackerrank.com/challenges/js10-template-literals/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("tliterals.txt");

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

function sides(literals, ...expressions) {
    let area = expressions[0]
    let perimiter = expressions[1]

    let s1 = (perimiter+(Math.sqrt(Math.pow(perimiter,2)-(16*area))))/4
    let s2 = (perimiter-(Math.sqrt(Math.pow(perimiter,2)-(16*area))))/4

    let results = [s1,s2]

    return results.sort()
}

// var a = 5;
// var b = 10;

// function foo(strings, ...values) {
//     let a = values[0];
//     let b = values[1];

//     return `Sum ${a + b}
//             Product ${a * b} 
//             Division ${b / a}`;
// }


function main() {

    // console.log(foo`Num1 ${a + 10}
    // Num2 ${b * 2} 
    // Num3 ${b / a}`)
  

    let s1 = parseInt(readLine(),10)
    let s2 = parseInt(readLine(),10)

    //console.log(sides`check area ${s1*s2}\ncheck perimiter ${2 * (s1 + s2)}`)

    // console.log(s1)
    // console.log(s2)
    
    let [s01, s02] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s01 === x) ? s01 : -1);
    console.log((s02 === y) ? s02 : -1);
}