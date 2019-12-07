// https://www.hackerrank.com/challenges/30-linked-list/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("llist.txt");

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

function Node(data){
    this.data=data;
    this.next=null;
}

function Solution(){

	this.insert=function(head,data){
          //complete this method
        let nodeList = { data: data, next: null }
        if (head) {
            for (let n = head; n != null; n = n.next) {
                if (n.next == null) {
                    n.next = nodeList
                    return head
                }
            }
        }

        else {
            head = nodeList
            return head
        }
    };

	this.display=function(head){
        var start=head;
            while(start){
                console.log(start.data+" ");
                start=start.next;
            }
    };
}
function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(let i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}