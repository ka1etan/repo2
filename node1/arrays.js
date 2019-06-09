

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

    for (let i = 0; i < a.length; i++) {

        lastUnique = a[i];

        if (a[i] !== a[i + 1]) {
            b.push(lastUnique);


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

function arrayToList(a) {
    let prev = null;
    let first = null;
    for (let i = 0; i < a.length; i++) {
        let nlist = { data: a[i], next: null };
        if (prev) {
            prev.next = nlist;
        } else { first = nlist; }
        prev = nlist;
    }
    return first;
}

function listToArray(llist) {
    let mat = [];
    //convert linked list to array and return
    for (let i = llist; i != null; i = i.next) {

        mat.push(i.data);

    }
    return mat;

}

function removeNode(head, node) {
    let prev = null;
    let nodel = null;
    
    for (nodel = head;
        nodel != null && nodel !== node;
        prev = nodel, nodel = nodel.next) {
    }

    if (nodel == null) {
        return null;
    }
    else if (nodel == node) {
       
        let ret = node.next;
        if (prev !== null) {
            prev.next = node.next;
        }
        node.next = null;
        return ret;

    }
    else return null;
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
    
    
    let tmp = null;
    let tmp2 = null;
    let x = arrayToList(a);
    for (let i = x; i != null; i = i.next) 
    {
         tmp = i.data;
         tmp2 = i.next.data;
        if (tmp == tmp2){
            removeNode(x, i);
        }

    }
return x;

}



function testDedupInPlace()
{
 let a = [1,1,2,2,3];
 let b = [1, 10, 10, 10, 20, 30, 30];
 let c = [2,2,2,3,4,4,4,5,5,6,6];
 let d = [1];
 let e = [1,2];
 let f = [1,1];
 let g = [1, 1, 1, 1, 2, 3, 3, 4, 5];

 console.log(dedupInPlace(a));
 console.log(dedupInPlace(b));
 console.log(dedupInPlace(c));
 console.log(dedupInPlace(d));
 console.log(dedupInPlace(e));
 console.log(dedupInPlace(f));
 console.log(dedupInPlace(g));
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
//testDedupInPlace();