function createTree1()
{
    let root = { data: 2, left: null, right: null }
    let a1 = { data: 7, left: null, right: null }
    let a2 = { data: 5, left: null, right: null }

    let b1 =  { data: 2, left: null, right: null }
    let b2 =  { data: 6, left: null, right: null }
    let b3 =  { data: 9, left: null, right: null }

    let c1 =  { data: 5, left: null, right: null }
    let c2 =  { data: 11, left: null, right: null }
    let c3 =  { data: 4, left: null, right: null }

    root.left = a1
    root.right = a2

    a1.left = b1
    a1.right = b2
    a2.right = b3

    b2.left = c1
    b2.right = c2
    b3.left = c3

    return root
}



function getTreeData(data, root)
{
    
    
    if (root != null)
    {
        
        getTreeData(data, root.left)
        getTreeData(data, root.right)
        data.push(root.data)
        
    }

   
}

function max(a)
{
    let max = 0
    for (let i = 0; i < a.length; i++)
    {
        if (a[i]>max)
        {
            max = a[i]
        }
    }
    return max
}

function getTreeData2(root, obj, data) {


    if (root != null) {
        obj["height"] += 1
        if (root.left !== null) {
        obj["left"] += 1
            data[0] += 1
        }
        if (root.right !== null) {
        obj["right"] += 1
            data[1] += 1
        }
        getTreeData2(root.left, obj, data)
        getTreeData2(root.right, obj, data)

    }

    // console.log(JSON.stringify(obj) + data)
    // console.log(max(data))
    return max(data)
}


// recursive version /////
function getListData(data, node)
{
    if (node != null)
    {
        data.push(node.data)
        getListData(node.next)
    }
}

function printTreeData(root)
{
    let data = []
    getTreeData(data, root)
    let s = ""
    for(let i = 0; i < data.length; i++)
    {
        s += data[i] + ", "
    }
    console.log(s)
}

function printTreeData2(root)
{
    let stack = [ ]
    let s = ""

    if (root != null)
    {
        stack.push(root)
    }

    while (stack.length > 0)
    {
        let node = stack.pop()

        if (node.left != null)
        {
            stack.push(node.left)
        }

        if (node.right != null)
        {
            stack.push(node.right)
        }

        s += node.data + ", "
    }

    console.log(s)

}

// pre-order
// 2, 7, 2, 6, 5, 11, 5, 9, 4,

// in-order
// 2, 7, 5, 6, 11, 2, 5, 4, 9,

function countHeight()
{
    let data = [0,0]
    let count = 0
    let obj = {height: 0, left: 0, right: 0}
    console.log(getTreeData2(createTree1(), obj, data))

    //console.log(data)
}

countHeight()



//printTreeData(createTree1())
//printTreeData2(createTree1())
