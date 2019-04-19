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

function llist(){
let list = new LinkedListNode();
console.log(list.addData("0"));
console.log(list.addData("1"));
//console.log(list);
}

llist();