

// function trip() {
//
//
//   if (x.parentNode) {
//     while (x.firstElementChild) {
//       alert(x.firstElementChild.nodeName);
//       x = x.firstElementChild;
//     }
//
//
//     while (x.nextElementSibling) {
//       alert(x.nextElementSibling.nodeName);
//       x = x.nextElementSibling;
//     }
//
//
//
//     while (x.lastElementChild) {
//       alert(x.lastElementChild.nodeName);
//       x = x.lastElementChild;
//     }
//   }
//
// }

// function printTreeData2(root)
// {
//     let stack = [ ]
//     let s = ""
//
//     if (root != null)
//     {
//         stack.push(root)
//     }
//
//     while (stack.length > 0)
//     {
//         let node = stack.pop()
//
//         if (node.firstElementChild != null)
//         {
//             stack.push(node.firstElementChild)
//         }
//
//         // if (node.right != null)
//         // {
//         //     stack.push(node.right)
//         // }
//
//         s += node + ", "
//     }
//
//     console.log(s)
//
// }

// function walktree(node){
//   let stack = [];
//   let dnode = node.firstElementChild;
//
//   while (dnode != null){
//     if (dnode.nextSibling) {
//     stack.push(dnode);
//     dnode = dnode.nextSibling;
//   }
//  else
//  {
//         stack.push(dnode);
//         dnode = dnode.firstChild
//          //dnode = dnode.nextElementSibling;
//        }
//
//
// // else if (dnode.nextElementSibling)
// // {
// //  stack.push(dnode);
// // dnode = dnode.nextElementSibling;
// // }
//
//    }
//    console.log(stack);
// }

function getTreeData(data, node)
{
    if (node != null)
    {
        // getTreeData(data, node.firstElementChild)
        getTreeData(data, node.nextSibling)
        getTreeData(data, node.firstChild)
        // getTreeData(data, node.nextElementSibling)
        // getTreeData(data, node.lastElementChild)
        data.push(node.nodeName)

    }
}

function printTreeData(node)
{
    let data = []
    getTreeData(data, node)
    let s = ""
    for(let i = 0; i < data.length; i++)
    {
        s += data[i] + ", "
    }
    console.log(data)
    console.log(s)
}

function init(){
// printTreeData2(x);
// walktree(document.body);
printTreeData(document.body);
}

window.addEventListener("load",init);
