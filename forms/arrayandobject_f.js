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

function createDictWithFewPropsThenRemoveOne() {
    let obj = { x: "x", a: 1, b: 2, c: "zzz", d: 3, e: "4" };
    let mat = [];
    let buf = null;

    //delete obj["a"];
    // return obj;
    for (var props in obj) {
        mat.push(props);
        buf = props;
    }

    delete obj[mat[0]]; // delete first key val
    delete obj[buf]; // delete last key val
    console.log(obj);
}

let a = { a: 1, b: 2, c: "zxzx" };
let b = ["a", 22, "b", "zxzxz", "c", 3];
let x = objToArray(a);
let y = arrayToDict(b);
console.log(x);
console.log(y);
createDictWithFewPropsThenRemoveOne();


