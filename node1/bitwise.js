// https://www.hackerrank.com/challenges/js10-bitwise/problem

// function bitwise(a,b){
//     let andresult = a & b;
//     return andresult;
// }

// function test1() {
// let a = 2;    
// let b = 3;
// console.log(bitwise(a,b));
// }

// function test2() {
//     let a = 4;    
//     let b = 5;
//     console.log(bitwise(a,b));
//     }

// test1();
// test2();

// let a = [1,1,2,2]
// console.log(maxarray(a))

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




unitTest1()
unitTest2()
unitTest3()
unitTest4()
unitTest5()