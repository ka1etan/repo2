// https://www.hackerrank.com/challenges/js10-bitwise/problem

var fs = require("fs");
var stream = fs.createReadStream("inBitwise.txt");
// var stream = process.stdin;

// process.stdin.resume();
// process.stdin.setEncoding('ascii');
stream.resume();
stream.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

//process.stdin.
stream.on('data', function (data) {
    input_stdin += data;
});

//process.stdin.
stream.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

// a is array, returns index of max element of the array
function max(a, k, op) {
    let max = 0;
    let maxind = -1;
    for (let i = 0; i < a.length; i++) {
        let result = op(a[i],a[i]);
        if (result >= max && result < k) {
            max = result;
            maxind = i;
        }
    }
    return maxind;
}

function max2(n, k, op) {
    let max = 0;
    let result = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            result = op(a, b)
            if (result >= max && result < k) {

                max = result;

            }
        }
    }
    return max;
}

function getMaxLessThanK(n, k) {
    let max = 0;
    let result = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            result = a & b;
            if (result >= max && result < k) {

                max = result;

            }
        }
    }
    return max;
}

function testMax1(){
    let and = (a,b) => a & b;
    let a = [1,2,3,4];
    let m = max(a, 10, and);
    console.log(m);
}

function testMax2(){
    let and = (a,b) => a & b;
    
    let m = max2(4, 3, and);
    console.log(m);
}

function maxOpN(n, k, op)
{
    // 1 <= a <= n
    // op(a,a) is max - meaning for any other 1 <= b <= n  op(b,b) <= op(a,a)
    for (let i=1; i <= n; i++){
        let a;
        
    }
}

function maxarray(a) {
    let maxi;
    for (i = 0; i < a.length; i++) {
        let x = a[i];
        for (j = 0; j < a.length; j++) {

            let y = a[j];
            if (x >= y) {
                maxi = x;
            } else { maxi = y };
            x = maxi;
        }

    }
    return maxi;
}

function bitwise2(n, k) {

    let s = [];
    let bit = [];
    let andresult;

    if (n >= 2 && k >= 2 && k <= n) {
        for (let i = 1; i <= n; i++) {
            s.push(i);
        }

        for (let j = 0; j < n; j++) {
            let a = s[j];

            for (g = 1; g <= n; g++) {
                let b = s[g];
                if (a < b) {
                    andresult = a & b;
                    if (andresult < k) {
                        bit.push(andresult);
                    }
                }
            }
        }

        return maxarray(bit);

    } else return "n < 2";
}



function unitTest1() {
    console.log(bitwise2(5, 2));
}

function unitTest2() {
    console.log(bitwise2(8, 5));
}

function unitTest3() {
    console.log(bitwise2(2, 2));
}

function unitTest4() {
    console.log(bitwise2(1, 2));
}

function unitTest5() {
    console.log(bitwise2(8, 3));
}




// unitTest1()
// unitTest2()
// unitTest3()
// unitTest4()
// unitTest5()
//testMax1();
// testMax2();

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}

main()
console.log("done")