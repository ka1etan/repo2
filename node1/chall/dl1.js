// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("dl1.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();

});

function readLine() {
    return inputString[currentLine++];
}

const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
}

function printDoublyLinkedList(node, sep) {
    while (node != null) {
        console.log(node.data);

        node = node.next;

        if (node != null) {
            console.log(sep);
        }
    }
}


/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
function sortedInsert(head, data) {

    let node = new DoublyLinkedListNode(data)
    // let prev = null
    // let next = head

    if (head == null) {

        head = node

    } else if (node.data < head.data) {

        node.next = head
        head.prev = node
        head = node

    } else {

        let current = head
        while (current.next !== null && current.data < data) {

            current = current.next
        }

        if (data < current.data) {

            let prev = current.prev
            prev.next = node
            node.prev = prev
            node.next = current
            current.prev = node

        } else {

            current.next = node
            node.prev = current
        }
    }

    return head

}



function main() {

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new DoublyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            //console.log(llistItem)
            llist.insertNode(llistItem);
        }

        const data = parseInt(readLine(), 10);

        let llist1 = sortedInsert(llist.head, data);

        printDoublyLinkedList(llist1, " ")
        //printDoublyLinkedList(llist.head, " ")
        console.log("\n");
    }

}

