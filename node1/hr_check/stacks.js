// https://www.hackerrank.com/challenges/30-queues-stacks/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("stacks.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();

});

function readLine() {
    return inputString[currentLine++];
}

function Solution(){
    //Write your code here
    let stack = []
    let queue = {}
    let i = 0
    let j = 0


    this.pushCharacter = function (s) {

        stack.push(s)

    }

    this.enqueueCharacter = function (s) {

        queue[i] = s
        i++

    }

    this.popCharacter = function () {

        let tmp = stack[stack.length - 1]
        stack.pop()
        return tmp

    }

    this.dequeueCharacter = function () {

        let tmp = queue[j]
        delete queue[j]
        j++
        return tmp
    }

  }


function main() {

    var s=readLine();
    var len=s.length;
    // create the Solution class object p
    var obj=new Solution();
    //push/enqueue all the characters of string s to stack
    for(var i=0;i<len;i++){
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }
  
    var isPalindrome=true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for(var i=0;i<len/2;i++){
        if(obj.popCharacter()!=obj.dequeueCharacter()){
            isPalindrome=false;
          	break;
        }
    }
    //finally print whether string s is palindrome or not

    if(isPalindrome)
        console.log("The word, "+s+", is a palindrome.");    
    else
        console.log("The word, "+s+", is not a palindrome.");
}