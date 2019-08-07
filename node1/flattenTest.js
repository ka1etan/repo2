
function iterate(a, collect)
{
    let count = 0;

    for (let i=0; i<a.length; i++)
    {
        let x = Array.isArray(a[i])

        if (x)
        {
            count++
            count+=iterate(a[i], collect)
        }
        else
        {
            collect.push(a[i]);
        }
    }
    return count
}

function main(a)
{
    let collect = []
    iterate(a, collect)
    return collect
}

function test()
{

let a = [1, 1, [2, [3, [4, 5], 6], 7]];
let b =  [1, [[2, 3], [4, 5]], 6, [7], [1, 2]]; 

console.log(main(a))
console.log(main(b))
}

test()

function flattenCore(a, result)
{
   
    let count = 0;
    for (let i = 0; i < a.length; i++)
    {
        let x = Array.isArray(a[i]);
        
        if (x)
            {
                count++;
                count += flattenCore(a[i], result);
            }
            else
            {
                result.push(a[i])
            }
    }
        
    return count;
}

function flattenArrayRecursive(a)
{
    let result = []
    flattenCore(a, result)
    return result
}

function testFlatten()
{
    
    let a =  [1, 1, [2, [3, [4, 5], 6], 7, 8]];
    let b =  [1, [[2, 3], [4, 5]], 6, [7], [1, 2]]; 

    console.log(flattenArrayRecursive(a));
    console.log(flattenArrayRecursive(b));

}

testFlatten()