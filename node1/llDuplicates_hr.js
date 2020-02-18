//https://www.hackerrank.com/challenges/30-linked-list-deletion/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("llDuplicates_hr.txt");

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

    this.removeDuplicates = function (head) {
        //Write your code here
        var check = head;
        var tmp = null
        while (check) {
            if (tmp !== null && check.data == tmp.data) {
                console.log(check.data + " duplicated")
                tmp.next = check.next
                check = check.next
            } else {
                tmp = check
                check = check.next
            }
        }
        return head
    }

    this.insert = function (head, data) {
        var p = new Node(data);
        if (head == null) {
            head = p;
        }
        else if (head.next == null) {
            head.next = p;
        }
        else {
            var start = head;
            while (start.next != null) {
                start = start.next;
            }
            start.next = p;
        }
        return head;

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
    head = mylist.removeDuplicates(head);
    mylist.display(head);
}