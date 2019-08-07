function iterate(a)
{
    let collect = []

    for (let i = 0; i < a.length; i++)
    {
        let x = Array.isArray(a[i])

        if (x)
        {
            

            for (let j = 0; j < a[i].length; j++)
            {
               
                
                    collect.push(a[i][j])
                   // iterate(a[i])
                
            }
        }

        else
        {
            collect.push(a[i])
        }

        
    }

    return collect
}

let a = [1, 2, [3, 4, 5], [6, 7], 8, [9]]
let b =  [1, 1, [2, [3, [4, 5], 6], 7]];
let c =  [1, [[2, 3], [4, 5]], 6, [7], [1, 2]]; 

console.log(iterate(b));