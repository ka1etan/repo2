// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("clouds.txt");

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


function jumpingOnClouds(n, c) {

    let jumps = 0

    if (n > 3) {

        let prevRead = c[0]

        for (let i = 2; i < n + 1; i++) {

            let firstRead = c[i - 1]
            let nextRead = c[i]

            if (prevRead == 0 && firstRead == 0) {
                jumps++
                i = i + 1
                prevRead = nextRead
            } else

                if (prevRead == 1 && firstRead == 0) {
                    //i=i+1
                    jumps++
                    prevRead = firstRead
                } else { prevRead = firstRead }


        }
    } else { jumps = 1 }

    //console.log(arr)
    return jumps

}



function main() {
    const n = parseInt(readLine(), 10);
    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    //console.log(c)


    let result = jumpingOnClouds(n, c);
    console.log(result)


}