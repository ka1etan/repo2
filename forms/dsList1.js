// https://www.interviewbit.com/courses/programming/topics/linked-lists/



class LinkedListNode {
    constructor(data) {
       // this[head] = null;
        this.data = data;
        this.next = null;
    }

   // class LinkedList{
     ///  constructor(){
      //      this.data = null;
      //  }
    
 addData(data){
     if (this.data==null){
         let buf = new LinkedListNode(data);
         return buf;
     } else {
         let current = this.data;
         while (current.next != null) {
            current = current.next;
        }
         current.next = buf;
     }
 }   
}

function printList(first)
{
    for (let n = first; n != null; n = n.next)
    {
        console.log(n.data);
        
        
        
    }
    
}

function listExample()
{
    
    let listNode1 = { data: 2, next: null };
    let listNode2 = { data: 4, next: null };
    let listNode3 = { data: 6, next: null };
    listNode1.next = listNode2
    listNode2.next = listNode3
    console.log(listNode1);
   // for (data in listNode1) {arr.push(listNode1.data)};
    
   // console.log(arr);
    printList(listNode1)

    listNode1.next = listNode3;
    listNode2.next = null;
    console.log(" ")
    console.log(" ")
    printList(listNode1)
    console.log(" ")
    printList(listNode2)
}

function arrayToList(a) {
    let prev = null;
    let first = null;
    for (let i=0; i<a.length; i++){
        let nlist = {data: a[i], next: null};
        if (prev) {
            prev.next = nlist;
        } else {first = nlist; } 
        prev = nlist;
    }
     return first;
}

function elemToList(a,b,c){
   let prev = null;



   let nlist1 = {data: a, next: null};
   if (prev) {
       prev.next = nlist1;
   } 
   prev = nlist1;

   let nlist2 = {data: b, next: null};
   if (prev) {
    prev.next = nlist2;
   }
   prev = nlist2;

   let nlist3 = {data:c, next: null};
   if (prev) {
    prev.next = nlist3;
   }
   prev = nlist3;

   return nlist1;
}

function listToArray(llist)
{
    let mat = [];
    //convert linked list to array and return
    for (let i = llist; i != null; i = i.next)
    {
        
        mat.push(i.data);
        
    }
    return mat;

}

function addItem(){
    let list = new LinkedListNode();
    console.log(list.addData("0"));
    console.log(list.addData("1"));
    //console.log(list);
    }

//listExample();

// let nlist1 = { data: 0, next: null };
// let nlist2 = { data: 1, next: null };
// let nlist3 = { data: 2, next: null };
// let nlist4 = { data: 3, next: null };
// nlist1.next = nlist2;
// nlist2.next = nlist3;
// nlist3.next = nlist4;
// let llist = nlist1;

// let x = listToArray(llist);
// console.log(" ");
// console.log(x);
// console.log(" ");

// addItem();
// console.log(" ");

// let a = 0;
// let b = "zzz";
// let c = "c";
// let y = elemToList(a,b,c);
// console.log(y);
// printList(y);

let a = [0, 1, "a", "b"];
let z = arrayToList(a);
printList(z);

