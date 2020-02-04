// https://www.hackerrank.com/challenges/30-binary-search-trees/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("bst.txt");

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
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function getHeight
     // End of function getHeight

    //let data = []
    this.levelOrder = function (root) {
        function treeWalk(root) {
            if (root == null) {
                return 0
            } else {
                let lDepth = treeWalk(root.left)
                let rDepth = treeWalk(root.right)

                if (lDepth > rDepth) {
                    return lDepth + 1
                } else {
                    return rDepth + 1
                }
            }
        }

        function printGivenLevel(root, level) {
            if (root == null) {
                return
            }
            if (level == 1) {
                console.log(root.data + ' ')
            }
            else if (level > 1) {
                printGivenLevel(root.left, level - 1)
                printGivenLevel(root.right, level - 1)
            }
        }

        let height = treeWalk(root)

        for (let i = 1; i <= height; i++) {
            printGivenLevel(root, i)
        }
    }

    

}

function main()
{
    var tree = new BinarySearchTree();
    var root = null;
    let x = parseInt(readLine())
    var values = [];
    for (let i=0; i < x; i++)
    {
        values.push(parseInt(readLine()))
    }
    //console.log(values)
    
    
    for (var i = 0; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    
    tree.levelOrder(root)
}