function convert(a)
{
    
    let matrix = []
    
    let y = 0

    for (let i = a ; i > 0; i = Math.floor(i/2))
    {
        let x =  i % 2
        if(x!==0)
        {
            y = 1
            matrix.push(y)
        } else
        {
            y = 0
            matrix.push(y)
        }

       // a = Math.floor(a/2)
       
    }
   

    return matrix
}

function ones(a)
{
    let mat = []
    let count = 0

    for (let i = 0; i < a.length; i++)
    {
        

        if (a[i]==1)
        {
            count++
        } else
        {
            mat.push(count)
            count = 0
        }

    }
    mat.push(count)
    return mat
}

function reverse(a)
{
    let b = [];
     
    for (i = a.length - 1; i >=0; i=i-1){
        b.push(a[i]);
    }
    
    return b;
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


function main()
{
     
    //convert(5)
    let x = convert(75)
    console.log(ones(x))
    console.log(max(ones(x)))
    console.log(reverse(x))

    let a = 5
    console.log(a.toString(2))

    let y= [22,1,43,4]
    console.log(max(y))
}

main()