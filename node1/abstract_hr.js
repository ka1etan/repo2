//https://www.hackerrank.com/challenges/30-abstract-classes/problem?h_r=next-challenge&h_v=zen

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("abstract.txt");

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

class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        }
        else {
            this.title = title;
            this.author = author;
        }
    }
    
    display() {
        console.log('Implement the \'display\' method!')
    }
}

class MyBook extends Book {
    constructor (title, author, price)
    {
        super (title, author)
        this.price = price
    }

    display()
    {
        console.log("Title: " + this.title)
        console.log("Author: " + this.author)
        console.log("Price: " + this.price)
    }
}



function main() {
    let title = readLine()
    let author = readLine()
    let price = readLine()

    let book = new MyBook(title, author, price)
    book.display()
}
