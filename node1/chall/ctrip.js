// https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps


'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("ctrip.txt");

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

function countTriplets(arr, r) {

    let countTriples = 0
    //let arr = arr.sort((a, b) => { return a - b })
    let left = {}
    let objCount = {}

    for (let i = 0; i < arr.length ; i++) {

        //obj[arr[i]] = i

        if (objCount[arr[i]])
        {
            objCount[arr[i]]++
        } else {objCount[arr[i]]=1}
    }

    if (arr.length < 3) { } else {

        // for (let i = 1; i < arr.length; i++) {
        //     let a = arr[i - 1]
        //     let b = arr[i]

        //     for (let j = 2; j < arr.length; j++) {
        //         let c = arr[j]
        //         if (Math.pow(b, 2) == (a * c)) {
        //             countTriples++
        //         }
        //         b = c
        //     }
        // }

        // for (let i = 1; i < arr.length - 1; i++) {

        //     let b = obj[i]

        //     for (let j = 0; j < i; j++) {

        //         let a = obj[j]

        //         if (b == (a * r)) {

        //             for (let k = i + 1; k < arr.length; k++) {
                        
        //                 let c = obj[k]

        //                 if ((Math.pow(b, 2)) == (a * c)) {
        //                     countTriples++
        //                 }

        //             }
        //         }
        //     }

        // }

        // for (let j = 0; j < arr.length ; j++) {

        //     let check = (arr[j])/r
            
        //     if (obj[check]){
        //         //console.log('true')
        //         if(obj[check*r]){
        //             countTriples+= (objCount[check])*(objCount[check*r])
        //         }
        //     }

        // }

        for (let j = 0; j < arr.length; j++) {

            objCount[arr[j]]--

            if (left[arr[j] / r] && objCount[arr[j] * r]) {
                countTriples += left[arr[j] / r] * objCount[arr[j] * r]
            }

            if (left[arr[j]]) {
                left[arr[j]]++
            } else { left[arr[j]] = 1 }

        }

    }
    console.table(left)
    console.table(objCount)
    return countTriples


}


function main() {

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    //console.log(arr.sort((a, b)=>{return a-b}), r)
    console.log(ans)
}