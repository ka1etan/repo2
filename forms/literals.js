// const a = 2;
// const b = 3;

// console.log(`The sum of a and b is ${a + b}. 
// The product of a and b is ${a * b}.`);

var a = 5;
var b = 10;

function foo(strings, ...values) {
    let a = values[0];
    let b = values[1];

    return `Sum ${a + b}
Product ${a * b} 
Division ${b / a}`;
}

console.log(foo`Num1 ${a + 10}
Num2 ${b * 2} 
Num3 ${b / a}`);