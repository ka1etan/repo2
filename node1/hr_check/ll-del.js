// https://www.hackerrank.com/challenges/30-linked-list-deletion/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("ll-del.txt");

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

    this.removeDuplicates = function (head) {
        //Write your code here
        if (head !== null) {
            let node = head
            while (node.next) {
                let nextNode = node.next
                if (node.data == nextNode.data) {
                    //(console.log(''))
                    let afterNext = nextNode.next
                    node.next = afterNext
                    //node = afterNext
                } else { node = node.next }

            }
        }

        return head
    }

	this.insert=function(head,data){
        var p=new Node(data);
        if(head==null){
            head=p;
        }
        else if(head.next==null){
            head.next=p;
        }
        else{
            var start=head;
            while(start.next!=null){
                start=start.next;
            }
            start.next=p;
        }
        return head;
        
    };

	this.display=function(head){
        var start=head;
            while(start){
                console.log(start.data+" ");
                start=start.next;
            }
    };
}


function main() {

    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(let i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    head=mylist.removeDuplicates(head);
    mylist.display(head);
}