//

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("inheri.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    inputString = inputString.split(new RegExp('[ \n]+'))
    //.split(' ')
    //.map(str => str.replace(/\s*$/, ''));

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

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here

    constructor(firstName, lastName, id, testScores) {
        super(firstName, lastName, id)

        this.testScores = testScores
    }

    calculate() {
        
        let arr = this.testScores
        let sum = 0

        for (let i = 0; i < arr.length; i++) {
            sum += parseInt(arr[i], 10)
        }

        let average = (sum / (arr.length))

        if (average < 40 ) {
            return "T"
        }
        
        else if (average >= 40 && average < 55) {
            return "D"
        } else if (average >= 55 && average < 70) {
            return "P"
        } else if (average >= 70 && average < 80) {
            return "A"
        } else if (average >= 80 && average < 90) {
            return "E"
        } else if (average >= 90 && average <= 100) {
            return "O"
        } 
    }



}

function main() {

    let firstName = readLine()
    let lastName = readLine()
    let id = +readLine()
    let numScores = readLine()
    let testScores = []

    //console.log(`${firstName} ${lastName} ${id}  ${numScores}`)

    for (let i = 0; i < numScores; i++) {
        testScores.push(readLine())
    }

    //console.table(scores)

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())

}