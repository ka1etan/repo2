function objToArray(a) {
    let arr = [];
    for (var property1 in a) {
        arr.push(property1, a[property1]);
    }
    return arr;
}

function arrayToDict(b) // a is an array [], returns dictionary/object
{
    let o = {};

    let blength = b.length;
    let arr2 = [];
    let arr3 = [];

    for (i = 0; i < blength; i = i + 2) {
        arr2.push(b[i]);
    }

    for (j = 1; j < blength; j = j + 2) {
        arr3.push(b[j]);
    }

    for (k = 0; k < arr2.length; k++) {
        let x = arr2[k];
        o[x] = arr3[k];
    }

    return o;

}

let a = { a: 1, b: 2, c: "zxzx" };
let b = ["a", 22, "b", "zxzxz", "c", 3];
let x = objToArray(a);
let y = arrayToDict(b);
console.log(x);
console.log(y);


