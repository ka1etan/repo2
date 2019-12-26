// https://www.hackerrank.com/challenges/30-queues-stacks/problem

'use strict';

var assert = require('assert')

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

function Solution() {
    //Write your code here
    let array = []
    // let tmp = null
    let tail = 0
    let queue = {}
    let del = 0

    this.pushCharacter = function(a)
    {
        array.push(a)
    }

    this.enqueueCharacter = function(a)
    {
        queue[tail] = a
        queue["head"] = queue[0]
        tail++
    }

    this.popCharacter = function()
    {
        return array.pop()
    }

    this.dequeueCharacter = function()
    {
        let tmp = queue["head"]
        delete queue["head"]
        del++
        queue["head"] = queue[del]
        return tmp
    }
  }
  
  function main(){
      // read the string s
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