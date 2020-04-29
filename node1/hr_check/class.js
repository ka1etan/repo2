// 

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("class.txt");

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

// class Person {
//     // Add some more code to run some checks on initialAge
//     constructor(initialAge) {
//         this.age = initialAge
//         if (this.age < 0) {

//             this.age = 0
//             console.log("Age is not valid, setting age to 0..")
//         }
    
//     }
    

//    amIOld()  {
//         // Do some computations in here and print out the correct statement to the console
//         console.log(this.age)
//         if (this.age < 13) {
//             console.log("You are young")
//         } else if (this.age >= 13 && this.age < 18) {
//             console.log("You are teenager")
//         } else { console.log("You are old") }
        

//     };
//     yearPasses() {
//         // Increment the age of the person in here
//         this.age += 1
        
//     };
    
// }

function Person(initialAge) {
    // Add some more code to run some checks on initialAge

    this.age = initialAge

    if (this.age < 0) {

        this.age = 0
        console.log("Age is not valid, setting age to 0.")
    }


    this.amIOld = function () {
        // Do some computations in here and print out the correct statement to the console
        if (this.age < 13) {
            console.log("You are young.")
        } else if (this.age >= 13 && this.age < 18) {
            console.log("You are a teenager.")
        } else { console.log("You are old.") }
    
    };
    this.yearPasses = function () {
        // Increment the age of the person in here
        this.age += 1
        
    };
    return this.age
}


function main() {

    var T = parseInt(readLine());
    for (let i = 0; i < T; i++) {
        var age = parseInt(readLine());
        var p = new Person(age);
        p.amIOld();
        for (let j = 0; j < 3; j++) {
            p.yearPasses();

        }
        p.amIOld();
        console.log("");
    }

}