// https://www.hackerrank.com/challenges/30-inheritance/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("inher.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    inputString = inputString.trim().split(new RegExp('[ \n]+')).map(string => {
        return string.trim();
    });
    
    main();    
    
});

function readLine() {
    return inputString[currentLine++];
}

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class student extends Person{
    constructor (firstName, lastName, id, scores)
    {
        super (firstName, lastName, id)
        this.scores = scores
        
    }

    calculate()
    {
        let sum = 0
        let average = 0
        let l = this.scores.length
        let grade = "T"
        
        for(let i =0; i < this.scores.length; i++)
        {
            sum += this.scores[i]
        }
        average = sum / this.scores.length
        
        if (average >= 90 && average <= 100)
        {
            grade = "O"
        } else if (average >= 80 && average < 90)
        {
            grade = "E"
        } else if (average >= 70 && average < 80)
        {
            grade = "A"
        } else if (average >= 55 && average < 70)
        {
            grade = "P"
        } else if (average >= 40 && average < 55)
        {
            grade = "D"
        } else if ( average < 40)
        {
            grade = "T"
        } 

        return grade
    }
}

function main() {
    let firstName = readLine()
    let lastName = readLine()
    let id = readLine()
    let numScores = readLine()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = readLine()  
    }

    let s = new student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
