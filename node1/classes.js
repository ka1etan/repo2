// https://www.hackerrank.com/challenges/30-class-vs-instance/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("classes.txt");

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

class Person {

    constructor(initialAge) {
        this.initialAge = initialAge;
    }

    // Add some more code to run some checks on initialAge


    amIOld() {
        // Do some computations in here and print out the correct statement to the console
        if (this.initialAge < 0) {
            console.log("Age is not valid, setting age to 0.");
            this.initialAge = 0;
            console.log("You are young.");
        }

        else if (this.initialAge < 13) {
            console.log("You are young.")
        } else if (this.initialAge >= 13 && this.initialAge < 18) {
            console.log("You are a teenager.")
        } else if (this.initialAge >= 18) {
            console.log("You are old.")
        }
    };
    yearPasses() {
        // Increment the age of the person in here
        this.initialAge += 1;
    };
}

function main() {

var T=parseInt(readLine());
for(let i=0;i<T;i++){
    var age=parseInt(readLine());
    var p=new Person(age);
    p.amIOld();
    for(let j=0;j<3;j++){
        p.yearPasses();
        
    }
    p.amIOld();
    console.log("");   
    }
}