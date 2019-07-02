

// s is a string
// function returns true if s is a palindrome else returns false
// Examples:
// abba
// oko
// abcddcba
function isPalindrome(s) {
    let check = true;
    for (let i = 0, j = s.length - 1;
        i < Math.floor(s.length / 2) && j >= Math.ceil(s.length / 2) && check;
        i++ , j--) {
        //console.log(s[i] + " " + s[j]);
        if (s[i] == s[j]) {

        } else {
            check = false;
        }

    }
    return check;

}

function isPalindrome2(s) {
    let check = true;
    for (let i = 0;
        i < Math.floor(s.length / 2) &&  check;
        i++ ) {

        let j = s.length - 1 - i;
        if (s[i] == s[j]) {

        } else {
            check = false;
        }

    }
    return check;

}

function isPalindrome3(s) {
    let check = true;
    for (let i = 0, j = s.length-1;
         i<j && check;
        i++, j-- ) {

        
        if (s[i] == s[j]) {

        } else {
            check = false;
        }

    }
    return check;

}

function isPalindrome4(s) {
    let check = true;
    let i = 0;
    let j = s.length-1;

    while (i<j && check ) {
        
        
        if (s[i] == s[j]) {

        } else {
            check = false;
        }

        i++;
        j--;

    }
    return check;

}

// a is an array of numbers
// return true is a is sorted (for any i and j, if i < j then a[i] <= a[j], czyli a[0] <= a[1], a[1] <= a[2] etc ...)
function isSorted(a)
{
    let check = true;

    for (let i = 0, j = i + 1; i < a.length && j < a.length; i++ , j++) 
    {
        if (a[i] <= a[j]) 
        {

        } else 
        {
             check = false; 
        }


    }

    return check;
}

function isSortedTest()
{
    
    let a = [];
    let b = [1,2,3];
    let c = [3,1,2,4];
    let d = [2,1];
    let e = [0,1];
    let f = [1];

    console.log(isSorted(a));
    console.log(isSorted(b));
    console.log(isSorted(c));
    console.log(isSorted(d));
    console.log(isSorted(e));
    console.log(isSorted(f));
}

// a is an array of numbers, sorted
// create a copy of 'a' of a such that aCopy contains only unique elements of a (in sorted order). original 'a' is not changed.
// Examples:
// [1,1,2,2,2,3,4,4,4,4,5,6] returns [1,2,3,4,5,6]
// [1, 10, 10, 10, 20, 30, 30] return [1,10,20,30]



function dedupCopy(a) {

    let b = [];
    let c = [];

    for (let i = 0, j = i + 1; i < a.length && j < a.length; i++ , j++) {
        if (a[i] == a[j]) {
            b.push(a[i]);

            i += 1;
            j += 1;
        }
    }

    
    for (let i = 0; i < a.length; i++) {

        if (b.length == 0) {
            c.push(a[i])
        }
        else {

            let j = 0;

            while (j < b.length && i < a.length) {

                if (a[i] == b[j]) {

                    i += 1;

                } else if (a[i] !== b[j]) {

                    if (j == (b.length - 1)) {
                        c.push(a[i]);
                    }
                    j++;
                }

            }
        }
    }

    
    //return b;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log("");
    // console.log(b.concat(c));
    var x = b.concat(c);
    return x;
    
    
}

// zmienic tak zeby dzialalo rowniez dla nie posortowanej tablicy

function objToArray(a) {
    let arr = [];
    for (var property1 in a) {
        arr.push(parseInt(property1));
    }
    return arr;
}

function dedupCopy2(a) {
    let counters = {};

    for (let i = 0; i < a.length; i++) {

        let o = counters[a[i]];

        if (o) {
            o += 1;
        }
        else {

            o = 1;
        }

        counters[a[i]] = o;
    }

    //console.log(counters);
    let x = objToArray(counters);
    return x;
}

function dedupCopy3(a)
{
    let lastUnique;
    let b = [];

    // for (let i = a.length - 1; i >= 0; i--) {

    //     lastUnique = a[i];

    //     if (a[i] !== a[i - 1]) {
    //         b.push(lastUnique);


    //     }
    // }

    b.push(a[0]);
    
    for (let i = 1; i < a.length; i++) {

        //lastUnique = a[i];

        if (a[i - 1] !== a[i]) {
            b.push(a[i]);


        }
    }
    return b;
}

function testDedup()
{
 let a = [1,1,2,2,3];
 let b = [1, 10, 10, 10, 20, 30, 30];
 let c = [2,2,2,3,4,4,4,5,5,6,6];
 let d = [1];
 let e = [1,2];
 let f = [1,1];
 let g = [1, 1, 1, 1, 2, 3, 3, 4, 5];

 console.log(dedupCopy3(a));
 console.log(dedupCopy3(b));
 console.log(dedupCopy3(c));
 console.log(dedupCopy3(d));
 console.log(dedupCopy3(e));
 console.log(dedupCopy3(f));
 console.log(dedupCopy3(g));
}





// Like dedupCopy, but modifies 'a' instead of returning its copy. Don't introduce new array.
// a is an array of numbers, sorted
// modify 'a' of a such that it contains only unique elements of a (in sorted order).
// Examples:
// [1,1,2,2,2,3,4,4,4,4,5,6] returns [1,2,3,4,5,6]
// [1, 10, 10, 10, 20, 30, 30] return [1,10,20,30]
// If after deduping the modifed array is shorter than before, be sure to remove older elements.

// bedzie jedna petla, bez nowych struktur, uzyc dwoch indeksow,
// do zapisywania i przesuwania

function dedupInPlace(a)
{
    let tmp;
    let tmp2;

    for (let i = 1, j = 0; i < a.length && j < a.length; i++, j++) {

        

        if (a[i - 1] !== a[i])
         {
            

        } else if (a[i] == tmp)
        {
            tmp2 = a[a.length - 1];
            a[a.length - 1] = a[i];
            a[i] = tmp2;
            a.pop(a[a.length - 1]);
            i = 1;
            j = i - 1;
        }
        
        else 
        {
            tmp = a[i];
            a[j] = a[i];
            a[i] = a[i + 1];
        }
    }

    return a;
    

}

function dedupInPlace2(a) {
    let tmp;

    //[2,2,2,3,4,4,4,5,5,6,6];

    for (let i = a.length - 1, j = a.length - 2; i >= 0 && j >= 0; i-- , j--) {

        if (a[i] !== a[j]) {

        }

        else {

            tmp = a[a.length - 1];
            a[a.length - 1] = a[i];
            a[i] = tmp;
            a.pop();

        }

    }

    return a;

}
// [1,2,3]
// [10,10,20,30] - 10,20,30

//[2,2,2,3,4,4,4,5,5,6,6]
//i - next to read
//j - next to write to
// lastWritten - last one that was written (or null at the beginning)




function testDedupInPlace()
{
 let a = [1,1,2,3,3,3];
 let b = [1, 10, 10, 10, 20, 30, 30];
 let c = [2,2,2,3,4,4,4,5,5,6,6];
 let d = [1];
 let e = [1,2];
 let f = [1,1];
 let g = [1, 1, 1, 1, 2, 3, 3, 4, 5];

 console.log(dedupInPlace2(a));
 console.log(dedupInPlace2(b));
 console.log(dedupInPlace2(c));
 console.log(dedupInPlace2(d));
 console.log(dedupInPlace2(e));
 console.log(dedupInPlace2(f));
 console.log(dedupInPlace2(g));
}

// given an arbitrarily nested array a - return "flattened" version of it
// For example:
// [1, [2, [3, [4, 5], 6], 7]] should be "flattened" to [1, 2, 3, 4, 5, 6, 7]
// [1, [[2, 3], [4, 5]], 6, [7]]   --->  [1,2,3,4,5,6,7]
// etc
// so the elements of an array 'a' are either a number - or an array (of numbers or arrays)
// An easy way to solve it is by recursion - which works for "shallow" arrays (small enough not to cause "stack overflow" error)
// A bit harder way is to solve it without recursion - which works for arbitrarily deep arrays (as long as they fit in memory)
function flattenArray(a)
{

}

// skeleton of a recursive (easier) version:

function flattenArrayRecursive(a)
{
    let result = []
    flattenCore(a, result)
    return result
}

function flattenCore(a, result)
{
    // this faction just appends to result and calls itself recursively if needed
}



function main(){
    let a = ["abba", "eye", "1234321", "luke"]

    for (let i = 0; i < a.length; i++){
        console.log("is Palindrome: " + isPalindrome4(a[i]));
    }
}

//main();
//isSortedTest();

//testDedup();
testDedupInPlace();