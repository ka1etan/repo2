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

function printList(first) {
    for (let n = first; n != null; n = n.next) {
        if(n.next==null)
        {
            console.log("last node: "+ n.data)
        } else 
        {console.log(n.data)}
    }
}

function addNode(node, value)
{
    let nodeList= { data: value, next: null }
    
    if (node)
            {
           

            for (let n = node; n!=null ; n= n.next) {
                if(n.next==null)
                {
                    n.next = nodeList
                    return node
                }
            }
            
        }

        else {
            node = nodeList
            return node
        }
        
    
}

function createList(){
// let a = 0
// let b = 1
// let c = 2
//let list = arrayToList(a)

let a = [0, 1 , 2, 3]
let list = null

for (let i = 0;  i < a.length; i++)
{
   
    list = addNode(list, a[i])
         
}
return list

}

function test()
{
    let list = createList()
    printList(list)
}

test()
