// https://www.hackerrank.com/challenges/30-binary-numbers/problem?isFullScreen=true

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("binary.txt");

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

function convert(a)
{
    
    let matrix = []
    
    let y = 0

    for (let i = a ; i > 0; i = Math.floor(i/2))
    {
        let x =  i % 2
        if(x!==0)
        {
            y = 1
            matrix.push(y)
        } else
        {
            y = 0
            matrix.push(y)
        }
    }
   
    return matrix
}

function convert2(a)
{
    let maxCount = 0 // count of 1s in longest series thus far
    let currentCount = 0 // count of 1s in current serie

    for (let i = a ; i > 0; i = i/2)
    {
        let x =  i % 2 //always true: x==0 || x==1
        assert(x==0 || x==1)

        // TODO
    }

    return maxCount
}

function ones(a)
{
    let mat = []
    let count = 0

    for (let i = 0; i < a.length; i++)
    {
        

        if (a[i]==1)
        {
            count++
        } else
        {
            mat.push(count)
            count = 0
        }

    }
    mat.push(count)
    return mat
}

function max(a)
{
    let max = 0
    for (let i = 0; i < a.length; i++)
    {
        if (a[i]>max)
        {
            max = a[i]
        }
    }
    return max
}

function main() {
    
    const n = parseInt(readLine(), 10);
    let x = convert(n)
    let y = max(ones(x))
    console.log(y)
    
}