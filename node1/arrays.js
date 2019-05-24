
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

function main(){
    let a = ["abba", "eye", "1234321", "luke"]

    for (let i = 0; i < a.length; i++){
        console.log("is Palindrome: " + isPalindrome4(a[i]));
    }
}

main();