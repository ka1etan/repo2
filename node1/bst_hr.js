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
    this.getHeight = function(root) {

        // Add your code here
        let data = []
        let firstNode = root.data
        let lcount=0
        let rcount=0
        let count = 0

        function max(a) {
            let max = 0
            for (let i = 0; i < a.length; i++) {
                if (a[i] > max) {
                    max = a[i]
                }
            }
            return max
        }

        // function treeWalk(root, data) {

        //     if (root != null) {

        //         // if (root.left !== null && root.data < first) {
        //         if (root.data < firstNode) {

        //             lcount++
        //         }
        //         if (root.data > firstNode)  {

        //             rcount++
        //         }
        //         treeWalk(root.left, data)
        //         treeWalk(root.right, data)

        //     }
            
        //     data.push(lcount, rcount)
        //     console.log(JSON.stringify(data))
        //     return max(data)
        // }

    //     if (root == null)
    //     {
    //         return 0
    //     } else {
    //         let lDepth = treeWalk(root.left)
    //         let rDepth = treeWalk(root.right)

    //         if (lDepth > rDepth)
    //         {
    //             return lDepth + 1
    //         } else {
    //             return rDepth + 1
    //         }
    //     }
    // }
    //     return treeWalk(root, data)

    function checkDepth(root, data, count)
    {
        if (root!==null)
        {
            count++
            checkDepth(root.left, data, count)
            checkDepth(root.right, data, count)
        }

        data.push(count)
        //console.log(JSON.stringify(data))
        return max(data)-1
    }
    return checkDepth(root, data, count)
    }; // End of function getHeight
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
    
    console.log(tree.getHeight(root))
}