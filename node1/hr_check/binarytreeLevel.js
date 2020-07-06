// https://www.hackerrank.com/challenges/30-binary-search-trees/problem

// przerobic bez rekursji, uzyc 2 tablic: working i result,
// umiescic w petli "while",
// np: dodajemy najpierw 3 do working, pozniej iteruje przez working
// dodaje i zdejmuje dzieci roota

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

            //console.log(`tree data: ${root.data}`)
        
        let lLength = this.getHeight(root.left)
        let rLength = this.getHeight(root.right)

        

        if (lLength > rLength){

            return lLength+1 
        } else 
        
        {return rLength+1}

    } else return 0
        
    }

    this.levelOrder = function(root) {

        

        let h = this.getHeight(root)

        function printLevelOrder(root, level){
            
            if (root==null){
                return
            } 

                if (level==1){
                    console.log(root.data)
                } else if (level>1){
                    printLevelOrder(root.left, level-1)
                    printLevelOrder(root.right, level-1)
                }
            
        }

        for (let i=1; i <= h; i++){
            printLevelOrder(root, i)
            
        }
        

    }

    this.levelOrder2 = function (root) {

        let i = 0
        let list = []
        let working = []

        if (root !== null) {
            list.push(root.data)
            // console.table(list)
            while (root) {
                if (root.left) {
                    list.push(root.left.data)
                    working.push(root.left)
                }
                if (root.right) {
                    list.push(root.right.data)
                    working.push(root.right)
                }
                if (working[i]) {
                    root = working[i]
                    i++
                }
                else { break }
            }
        }

        console.table(list)
    }
    
  
}; // End of function BinarySearchTree

var fs = require("fs");
var stream = fs.createReadStream("binarytreeLevel.txt");

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
    
    
    //console.log(tree.getHeight(root));
    //tree.levelOrder(root)
    tree.levelOrder2(root)
});

