// 

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("exc.txt");

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




function main() {

    const S = readLine()
    let check = 1

    try {

        let N = Number(S)


        check.toPrecision(N - N + 1)



        console.log(N)

    }

    catch (err) {

        console.log("Bad String")
    }
}