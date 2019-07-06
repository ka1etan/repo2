var a = [];

function check()
{

if (a.length==0)
{
    console.log("empty")
} else 
{
    console.log("not empty")
}
}

check();

function objToArray(a) {
    let arr = [];
    for (var property1 in a) {
        arr.push(parseInt(property1));
    }
    return arr;
}

function numCheckObj4(x) {

    let counters = {
        // name: counter, 
        // "0": 0,
        // "1": 0,
    } 

    //counters["0"]


    for (let i = 0; i < x.length; i++) 
    {
        
        let o = counters[x[i]];

        if (o)
        {
            o += 1; 
        }
        else
        {

            o = 1; 
        }

        counters[x[i]] = o;        
    }

    //return counters;
    console.log(counters);
    let y = objToArray(counters);
    return y;
}

function aWrite(a)
{
    for (let i=0; i<a.length; i++)
    {
        if (a[i]==1)
        {
            a[a.length - 1] = "";
        }
    }

    return a;
}

let x = [1,1,1,2,4,6,9,1,4,6,0,0,7,4];
let e = [1,2];


console.log( numCheckObj4(e) )
console.log( numCheckObj4(x) )
console.log( aWrite(x) )