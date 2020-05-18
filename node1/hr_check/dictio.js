//

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("dictio.txt");

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


function checkBook(obj, name) {

    if (obj[name]) {
        console.log(name+"="+obj[name])

    } else {
        console.log("Not found")
    }
  
}

function main() {
    const t = parseInt(readLine(), 10);

    let obj = {}

    for (let i = 0; i < t; i++) {
        const nameAndPhone = readLine().split(' ');

        const name = nameAndPhone[0];

        const phone = parseInt(nameAndPhone[1], 10);

        //console.log(name, phone)

        obj[name] = phone
       
    }

    

    for (let i =0;;i++){

        let nameToCheck = readLine()

        if(typeof nameToCheck!=="undefined"){
            checkBook(obj, nameToCheck)
        } else {
        break}
    }
    

}