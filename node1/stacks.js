let array = []
let tail = 0
let queue = {}
let del = 0

function pushpop()
{
array.push(1)
array.push("a")
array.push(2)
return array.pop()
}

function enq(a)
{
    queue[tail] = a
    queue["head"] = queue[0]
    tail++

}

function deq()
{
    let tmp = queue["head"]
    delete queue[del]
    del++
    queue["head"] = queue[del]
    return tmp
}

function main()
{
    // let a = pushpop()
    // console.log(a)
    let a= [1,2,3,4]
    for (let i=0; i< a.length; i++)
    {
        enq(a[i])
    }
    deq()
    deq()
    console.log("")
}

main()

