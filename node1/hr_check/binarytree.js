// https://www.hackerrank.com/challenges/30-binary-search-trees/problem

'use strict';

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

    
    
    this.getHeight = function(root){

        if (root!==null) {
        
        let lLength = this.getHeight(root.left)
        let rLength = this.getHeight(root.right)

        if (lLength > rLength){

            return lLength+1 
        } else 
        
        {return rLength+1}

    } else return -1
        
        
        
    }
    
  
}; // End of function BinarySearchTree

var fs = require("fs");
var stream = fs.createReadStream("binarytree.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    var values = inputString.split('\n').map(Number)

    //console.log(values)
    var tree = new BinarySearchTree();
    var root = null;

    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }
    
    
    console.log(tree.getHeight(root));

});

