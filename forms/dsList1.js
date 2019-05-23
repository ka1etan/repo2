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

    addData(data) {
        if (this.data == null) {
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

function printList(first) {
    for (let n = first; n != null; n = n.next) {
        console.log(n.data);



    }

}

function listExample() {

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
    for (let i = 0; i < a.length; i++) {
        let nlist = { data: a[i], next: null };
        if (prev) {
            prev.next = nlist;
        } else { first = nlist; }
        prev = nlist;
    }
    return first;
}

function revArrayToList(a) {
    let prev = null;
    let first = null;
    for (let i = a.length - 1; i >= 0; i = i - 1) {
        let nlist = { data: a[i], next: null };
        if (prev) {
            prev.next = nlist;
        } else { first = nlist; }
        prev = nlist;
    }
    return first;
}

function elemToList(a, b, c) {
    let prev = null;



    let nlist1 = { data: a, next: null };
    if (prev) {
        prev.next = nlist1;
    }
    prev = nlist1;

    let nlist2 = { data: b, next: null };
    if (prev) {
        prev.next = nlist2;
    }
    prev = nlist2;

    let nlist3 = { data: c, next: null };
    if (prev) {
        prev.next = nlist3;
    }
    prev = nlist3;

    return nlist1;
}

function listToArray(llist) {
    let mat = [];
    //convert linked list to array and return
    for (let i = llist; i != null; i = i.next) {

        mat.push(i.data);

    }
    return mat;

}

function addItem() {
    let list = new LinkedListNode();
    console.log(list.addData("0"));
    console.log(list.addData("1"));
    //console.log(list);
}

// given a link list return count of elements in it
function listLength(head) {
    let count = 0;

    for (let node = head; node != null; node = node.next) {
        count += 1;
    }
    // (...)

    return count;
}

function createList1() {
    let nlist1 = { data: 0, next: null };
    let nlist2 = { data: 1, next: null };
    let nlist3 = { data: 2, next: null };
    let nlist4 = { data: 3, next: null };
    let nlist5 = { data: "zzz", next: null };
    nlist1.next = nlist2;
    nlist2.next = nlist3;
    nlist3.next = nlist4;
    nlist4.next = nlist5;
    let llist = nlist1;
    return llist;
}

function createList2() {
    let nlist1 = { data: 0, next: null };
    let nlist2 = { data: 1, next: null };
    let nlist3 = { data: 2, next: null };
    let nlist4 = { data: 3, next: null };
    let nlist5 = { data: "zzz", next: null };
    nlist1.next = nlist2;
    nlist2.next = nlist3;
    nlist3.next = nlist4;
    nlist4.next = nlist5;
    nlist1.next = nlist3;
    nlist2.next = null;
    let llist = nlist1;
    return llist;
}

function createList3() {
    let nlist1 = { data: 0, next: null };
    let nlist2 = { data: 1, next: null };

    nlist1.next = nlist2;

    let llist = nlist1;
    return llist;
}

function createList4() {
    let nlist1 = { data: 2, next: null };
    let nlist2 = { data: 3, next: null };
    let nlist3 = { data: 4, next: null };

    nlist1.next = nlist2;
    nlist2.next = nlist3;


    let llist = nlist1;
    return llist;
}

function createList5() {
    let nlist1 = { data: 4, next: null };
    let nlist2 = { data: 5, next: null };
    let nlist3 = { data: 6, next: null };

    nlist1.next = nlist2;
    nlist2.next = nlist3;


    let llist = nlist1;
    return llist;
}

function createList6() {
    let nlist1 = { data: 4, next: null };
    let nlist2 = { data: 2, next: null };
    let nlist3 = { data: 6, next: null };
    let nlist4 = { data: 1, next: null };

    nlist1.next = nlist2;
    nlist2.next = nlist3;
    nlist3.next = nlist4;


    let llist = nlist1;
    return llist;
}

function createList7() {
    let nlist1 = { data: 3, next: null };
    let nlist2 = { data: 1, next: null };
    let nlist3 = { data: 2, next: null };
    
    nlist1.next = nlist2;
    nlist2.next = nlist3;
    
    let llist = nlist1;
    return llist;
}

function createList8() {
    let nlist1 = { data: 4, next: null };
    let nlist2 = { data: 5, next: null };
    let nlist3 = { data: 6, next: null };
    let nlist4 = { data: 1, next: null };
    let nlist5 = { data: 1, next: null };
    let nlist6 = { data: 3, next: null };

    nlist1.next = nlist2;
    nlist2.next = nlist3;
    nlist3.next = nlist4;
    nlist4.next = nlist5;
    nlist5.next = nlist6;

    let llist = nlist1;
    return llist;
}

function createList9() {
    let nlist1 = { data: 0, next: null };
    
    let llist = nlist1;
    return llist;
}

function emptyList() {
    let nlist1 = { data: null, next: null };

    let llist = nlist1;
    return llist;
}

function testListLength() {
    let list1 = createList1();
    console.log(listLength(list1));
    console.log(listLength(null));
    console.log(listLength({ data: 0, next: null }));

}

// given a list and number n return n-th element of the list (0-based)- or null if list has less elements
// Q1. Does the loop continue after the element is found ?
// Q2. can count instructions be incorporated into "for" init/condition/iterate statement (instead of being outside/inside the body) ?
function findN(head, n) {
    let nodel, count;
    // let count = 0; // jedna zmienna powinna wystarczyc, ew jedna dodatkowa zmienna
    for (nodel = head, count = 0;
        nodel != null && count != n;
        nodel = nodel.next, count += 1) {

        // if (count == n) {
        //     node = nodel.data;
        //     break;
        // }
    }
    if (count == n) {
        return nodel;
    } else {
        return null;
    }
}

function testFindN() {
    let list1 = createList1();
    console.log(findN(list1, 0));
}

// given a list and data find a node with that data and return it
// Q1. Does the loop continue when the node is found ?
// Q2. What should the function return (what type of value / data) ? Does it always return the same type of data ?
// Q3. Can a test for whether we found the element or not be incorporated into init/condition/iterate of the loop (instead of the body) ?
// Q4. If yes to Q3  - how would return statement need to be changed ?
function findData(head, data) {
    let nodel = null

    for (nodel = head;
        nodel != null && nodel.data != data;
        nodel = nodel.next) {

    }

    if (nodel == null) {
        return null;
    }
    else if (nodel.data == data) {
        return nodel;
    } else return null;
}

function testFindData() {
    let list1 = createList1();
    try { console.log(findData(list1, 6)); }

    catch (error) { console.log("Incorrect data format"); }
    //finally{console.log(findData(list1, "6"))};
}

// given a list and a node from that list, remove the node from the list and return the previous element (or null if it was the first one)
// Q1. Should the function return the node or its data ?
// Q2. Could we track prev without using "count" variable ?
// Q3. Does 'if' from line 228 need to be in loop body ?
// Q4. Is the 'if' condition in 233 accurate ?
// Q5. Does the function actually modify the list (remove the node) ?
function removeNode(head, node) {
    let prev = null;
    let nodel = null;
    // chodzi o przesuniecie nexta
    // (...)

    let count = 0;

    for (nodel = head;
        nodel != null && nodel !== node;
        prev = nodel, nodel = nodel.next) {
    }

    if (nodel == null) {
        return null;
    }
    else if (nodel == node) {
        //        if (prev !== null) {
        //            let ret = node.next;
        //            prev.next = node.next;
        //            node.next = null;
        //            return ret;
        //
        //        } else {
        //            ret = node.next;
        //            node.next = null;
        //            return ret;
        //        }
        let ret = node.next;
        if (prev !== null) {
            prev.next = node.next;
        }
        node.next = null;
        return ret;

    }
    else return null;
}

function testRemN() {
    let list1 = createList1();
    let node2 = list1.next;
    console.log(removeNode(list1, node2));

}

// takes a linked list (list) and returns a new list which is reverse of the input one, e.g.:
// 1 -> 2 -> 3 returns 3 -> 2 -> 1
// only variables constant size
// write good unit tests
function reverseList(list) {
    let buf = [];

    for (let n = list; n != null; n = n.next) {
        buf.push(n.data);
    }

    return revArrayToList(buf);
}



function reverseList2(list) {
    let node = list,
        prev = null,
        tmp = null;

    while (node) {
        tmp = node.next;   // 1  /  2  /  3
        node.next = prev;  // -  /  0  /  1
        prev = node;       // 0  /  1  /  2
        node = tmp;        // 1  /  2  /  3
    }

    return prev;
}

function reverseListTest1() {
    console.log(reverseList2(createList1()));
}
function reverseListTest2() {
    console.log(reverseList2(createList2()));
    printList(reverseList2(createList2()));
}

function reverseListTest3() {
    console.log(reverseList2(createList3()));
}

function reverseListTest4() {
    console.log(reverseList2(createList4()));
}

// takes a linked list and returns true if the list is sorted and false otherwise
// e.g. 1 -> 2-> 3-> 5-> 10  returns true
//      3 -> 1 -> 4  returns false
// list is sorted if for each element e, e.data <= e.next.data (if e.next exists)
function isSorted(list) {
    let n = list;
    let check = null;
    let tmp = [];
    while (n != null && n.next != null) {
        if (n.data <= n.next.data) {
            if (tmp != 0) {
                for (let i = 0; i < tmp.length; i++) {
                    if (n.data < tmp[i]) {
                        check = false;
                    }
                }
                break;
            }
            check = true;
        } else {
            tmp.push(n.data);
        }
        n = n.next;
    }
    return check;
}

function isSorted2(list) {
    let n = list;
    let check = true;
    
    while (n != null  && check && n.next != null && n.next.next != null) {
       
        if ( n.data <= n.next.next.data) {
            //check = true;
        } else {
            check = false;
            break;
        }
        n = n.next;
    }
    return check;
}

function isSortedTest1(){
    console.log(isSorted2(createList5()));
}

function isSortedTest2(){
    console.log(isSorted2(createList6()));
}

function isSortedTest3(){
    console.log(isSorted2(createList7()));
}

function isSortedTest4(){
    console.log(isSorted2(createList8()));
}

function isSortedTest5(){
    console.log(isSorted2(createList9()));
}

function isSortedTest6(){
    console.log(isSorted2(emptyList()));
}

// merge 2 sorted lists
// takes two lists which are sorted and outputs sorted list which combines them both such that output is also sorted
// e.g.:
// 1 -> 5 -> 5 -> 10
// 1 -> 2 -> 3 -> 11
// outputs: 1 -> 1 -> 2 -> 3 -> 5 -> 5 -> 10 -> 11
// only variables of constant size
// write good unit tests



function mergeSortedLists(list1, list2) {
    let n1 = list1;
    let n2 = list2,
       head = emptyList();
       // head = n1;
    let prev = head;

    while (n1 !== null && n2 !== null) {
        if (n1.data <= n2.data) {
            prev.next = n1;
            n1 = n1.next
        } else {
            prev.next = n2;
            n2 = n2.next
        }
        prev = prev.next

    }

    if (n1 == null) { prev.next = n2; }
    if (n2 == null) { prev.next = n1; }

    return head.next;
}


function mergeListTest1() {
    console.log(mergeSortedLists(createList3(), createList4()));
}
function mergeListTest2() {
    console.log(mergeSortedLists(createList4(), createList5()));
    printList(mergeSortedLists(createList4(), createList5()));
}

function mergeListTest3() {
    console.log(mergeSortedLists(createList5(), createList6()));
    printList(mergeSortedLists(createList5(), createList6()));
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

// let a = [0, 1, "a", "b"];
// let z = arrayToList(a);
// printList(z);
//testListLength();

// testFindN();
// console.log(" ");
// testFindData();
// console.log(" ");
// testRemN();

// console.log(createList1());
// printList(createList1());

// reverseListTest1()
// console.log(" ");
// reverseListTest2()
// console.log(" ");
// reverseListTest3()
// console.log(" ");
// reverseListTest4()
// console.log(" ");


// mergeListTest1()
// mergeListTest2()
// mergeListTest3()


isSortedTest5();
isSortedTest6();
isSortedTest1();
isSortedTest2();
isSortedTest3();
isSortedTest4();






