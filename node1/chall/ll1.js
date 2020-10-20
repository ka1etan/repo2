// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("ll1.txt");

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

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep) {
    while (node != null) {
        console.log(node.data);

        node = node.next;

        if (node != null) {
            console.log(sep);
        }
    }
}


function insertNodeAtPosition(head, data, position) {

    let node = new SinglyLinkedListNode(data)
    let counter = 0

    if (head !== null) {

        let current = head

        if (position == 0) {
            node.next = current
            head = node
        } else {

            while (counter !== position) {
                
                counter++

                if (current.next !== null) {
                    let prev = current
                    current = current.next
                    if (counter == position) {
                        prev.next = node
                        node.next = current
                    }
                } else {
                    current.next = node
                }

            }
        }
    } else {
        head = node
    }
    return head
}


function main() {

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
        llist.insertNode(llistItem);
    }

    //printSinglyLinkedList(llist.head, " ")

    const data = parseInt(readLine(), 10);

    const position = parseInt(readLine(), 10);

    let llist_head = insertNodeAtPosition(llist.head, data, position);

    printSinglyLinkedList(llist_head, " ")

    console.log("\n");

}

