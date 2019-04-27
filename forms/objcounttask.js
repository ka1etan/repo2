const assert = require('assert');

function getCount(objects) {
    let count = 0;
    for (let i = 0; i < objects.length; i++){
        if (objects[i].x == objects[i].y) {
            count += 1;
         }
    }
    return count;
}

function test1() {
    let a = [
        {x: 1, y: 1}
        ];
    // console.log(a[0].x);
    let x = getCount(a);
    assert.strictEqual(x, 1);
}

function test2() {
    let a = [
        {x: 1, y: 0}
        ];
    // console.log(a[0].x);
    let x = getCount(a);
    assert.strictEqual(x, 0);
}

function test3() {
    let a = [
        {x: 1, y: 0},
        {x: 2, y: 2},
        {x: 3, y: 3},
        {x: 0, y: 0}
        ];
    // console.log(a[0].x);
    let x = getCount(a);
    assert.strictEqual(x, 3);
}

test1();
test2();
test3();
console.log("ok");

