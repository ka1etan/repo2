function comp(o, a)
{
    let x = [];
    for (var props in o) 
    {
        
        for (let i=0; i < a.length; i++)
        {
        if (a[i]==props)
        {
            x.push(o[props]);
            //break;
            console.log(a[i]+"="+o[props])
        } 
        else 
        {
            //console.log("not found")
        };
    }
    }

    return x;
}

let o = {zz: 11, v1: 222, v2: 123};
let a = ['v1', 'v2', 'v3'];

console.log(comp(o, a));