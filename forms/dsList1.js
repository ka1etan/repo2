// https://www.interviewbit.com/courses/programming/topics/linked-lists/


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

    printList(listNode1)

    listNode1.next = listNode3;
    listNode2.next = null;
    console.log(" ")
    console.log(" ")
    printList(listNode1)
    console.log(" ")
    printList(listNode2)
}

function arrayToList(a)
{
    // convert array to list and return it
}

function listToArray(n)
{
    //convert linked list to array and return
}

listExample()