//https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("tc.txt");

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

function convert(a) {

    // let b = parseInt(a)
    // try {

        
    //     if (isNaN(b))
    //     {
    //     throw NaN}
    //     //throw undefined


    // }
    // catch (error) {
    //     console.log("Bad string")
    // }

    // finally {
    //     console.log(b)
    // }

    try {

        let b = parseInt(a)
        let c = isNaN(b) && raiseError()
        // b = b + 0
        // b = b * 1

        // if (isNaN(b)) {
        //     throw new Error("bad string")

        // } else { 
        console.log(b) 


    }
    catch (error) {
        console.log("Bad String")
    }
}

function raiseError()
{
    throw "error"
}

function convert2(a)
{
	let b = parseInt(a)
    
    // if(isNaN(b))
    // {
    //     throw new Error
    // }
    return b
}

function check(a)
{
	try {
		convert2(a)
		return true
}

catch(e){
  return false
}
}

function main() {
    const S = readLine();
    //console.log("checking data")
    convert(S)
    //console.log("Bad String")
}
