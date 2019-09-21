var assert = require('assert')

assert.throws(
    function() {
      throw new Error("Wrong value");
    },
    Error
  );

//   assert.doesNotThrow(
//     function() {
//       console.log("Nothing to see here");
//     },
//     Error
//   );

var list1 = [1, 2, 3, 4, 4];
var list2 = [1, 2, 3, 4, 5];

function add(a, b)
{
    return a+b
}

var expected = add(1,2)

assert(expected === 3, 'one plus two is three')
//assert.ok(expected == 3, 'one plus two is three')
assert.equal(expected, 3, 'one plus two is three')
assert.ok(expected != 4, 'one plus two is three')
assert.notEqual(expected, 4, 'one plus two is three (NOT Four!)')

//assert.deepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical')
assert.notDeepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical')

function sayHello(name, callback) {
    var error = false;
    var str   = "Hello "+name;
    callback(error, str);
  }
  
  // use the function
  sayHello('zzz', function(err, value){
    assert.ifError(err);
    assert.equal(value, "Hello World");
  })