// https://www.hackerrank.com/challenges/30-2d-arrays/problem

var fs = require("fs");
var stream = fs.createReadStream("2d.txt");

stream.resume();
stream.setEncoding("ascii");

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

function glassHour(array, startA, startB, a, b) {
    let sum = 0

    for (let i = startA; i < a; i++) {
        for (let j = startB; j < b; j++) {
            if (i == startA + 1 && j == startB || i == startA + 1 && j == startB + 2) {

            } else {
                //console.log(array[i][j] + " ")
                sum += array[i][j]

            }


        }

    }
    console.log("sum: " + sum)
    return sum
}

function glassHour2(array, a, b)
{
    let sum = array[a][b] + array[a][b+ 1] + array[a][b +2] + array[a+1][b+1] + array[a+2][b] + array[a+2][b+1] + array[a+2][b+2]

    return sum
}

//glasshour2: bez petli, tylko zlicza wspolrzedne + offset
// pozniej przerobic na uniwersalne dla n kwadratu

function traverse(x) {
    let maxcount = 0
    let current = 0
    let mat = []

    var i, j = 0

    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {

           // let sum = glassHour(x, i, j, i + 3, j + 3)
            let sum = glassHour2(x, i, j)
            mat.push(sum)
            current = sum
            // if(j==0)
            // {
            //     maxcount = current
            // }
            if (j==0&&i==0||maxcount < current) {
                maxcount = current
            }
        }

    }

    console.log(JSON.stringify(mat))
    console.log("max x: " + maxcount)
}

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    traverse(arr)
}