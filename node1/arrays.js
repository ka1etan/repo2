

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
function dedupCopy(a)
{
    let b = [];
    let c = [];
    
    for (let i = 0, j = i + 1; i < a.length && j < a.length; i++, j++) 
    {
        if (a[i] == a[j]) 
        {
            b.push(a[i]);
            
            i += 1;
            j += 1;
        } 

    
    }

    for (let i = 0; i < a.length; i++)
    {
        for (let j = 0, k =1; j < b.length && k < b.length; j++, k++)
        {
            if (a[i] !== b[j] && a[i] !== b[k])
            {
                c.push(a[i]);
            }
        }
    }

    //return b;
    console.log(b);
    console.log(a);
    console.log(c);
    
}

function testDedup()
{
 let a = [1,1,2,2,3];
 let b = [1, 10, 10, 10, 20, 30, 30];
 let c = [2,2,2,3,4,4,4,5,5,6,6];

 console.log(dedupCopy(a));
 console.log(dedupCopy(b));
 console.log(dedupCopy(c));
}

// Like dedupCopy, but modifies 'a' instead of returning its copy. Don't introduce new array.
// a is an array of numbers, sorted
// modify 'a' of a such that it contains only unique elements of a (in sorted order).
// Examples:
// [1,1,2,2,2,3,4,4,4,4,5,6] returns [1,2,3,4,5,6]
// [1, 10, 10, 10, 20, 30, 30] return [1,10,20,30]
// If after deduping the modifed array is shorter than before, be sure to remove older elements.
function dedupInPlace(a)
{
}


function main(){
    let a = ["abba", "eye", "1234321", "luke"]

    for (let i = 0; i < a.length; i++){
        console.log("is Palindrome: " + isPalindrome4(a[i]));
    }
}

//main();
//isSortedTest();

testDedup();