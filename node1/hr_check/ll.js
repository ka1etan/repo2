// https://www.hackerrank.com/challenges/30-linked-list/problem

'use strict';

var fs = require("fs");
var stream = fs.createReadStream("ll.txt");

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

function Node(data) {
    this.data = data;
    this.next = null;
}
function Solution() {

    this.insert = function (head, data) {
        //complete this method
        //console.log(`${head} ${data}`)
        let node = new Node(data)
        
        if (head !== null) {
            let current = head
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        else {
            head = node
        }

        return head
    };

    this.display = function (head) {
        var start = head;
        while (start) {
            console.log(start.data + " ");
            start = start.next;
        }
    };
}


function main() {

    var T = parseInt(readLine());
    var head = null;
    var mylist = new Solution();
    for (let i = 0; i < T; i++) {
        var data = parseInt(readLine());
        head = mylist.insert(head, data);
    }
    mylist.display(head);
}