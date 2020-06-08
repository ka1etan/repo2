// https://www.hackerrank.com/challenges/30-abstract-classes/problem

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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

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
    constructor (title, author, price) {
        super (title, author)
        this.price = price
    }

    display(){
        console.log(`Title: ${this.title} \nAuthor: ${this.author} \nPrice: ${this.price}`)
    }

}



function xxx() {

  
}

function main() {
    
    let title = readLine()
    let author = readLine()
    let price = readLine()

    let book = new MyBook(title, author, price)
    book.display()
   
}