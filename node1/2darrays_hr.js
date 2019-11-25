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

function glassHour3(a, n, startA ,startB) {
    let sum = 0
    let x = startA + n
    let y = startB + n
    for ( let i = startA; i < x; i++) {
        for (let  j = startB; j < y; j++)
            if (i == startA || i == (startA + (n - 1))) {
                sum += a[i][j]
            } else if (j !== startB && j !== (startB + (n - 1))) {
                sum += a[i][j]

            } 
    }
    console.log(sum)
    return sum
}


//glasshour2: bez petli, tylko zlicza wspolrzedne + offset
// pozniej przerobic na uniwersalne dla n kwadratu - min n = 3

function traverse(x,n) {
    let maxcount = 0
    let current = 0
    let mat = []

    var i, j = 0

    for (i = 0; i <= n/2; i++) {
        for (j = 0; j <= n/2; j++) {

           // let sum = glassHour(x, i, j, i + 3, j + 3)
            //let sum = glassHour2(x, i, j)
            let sum = glassHour3(x, n/2, i, j)
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
    let n = 6
    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    traverse(arr, n)
    //glassHour3(arr, n/2)
}