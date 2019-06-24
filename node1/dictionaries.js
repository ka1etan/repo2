function numCheckObj4(x) {

    let counters = {
        // name: counter, 
        // "0": 0,
        // "1": 0,
    } 

    //counters["0"]


    for (let i = 0; i < x.length; i++) 
    {
        
        let o = counters[x[i].toString()];


        if (o)
        {
            o += 1; 
        }
        else
        {

            o = 1; 
        }

        counters[x[i].toString()] = o;        
    }

    return counters;
}

let x = [1,1,1,2,4,6,9,1,4,6,0,0,7,4];
//let x = ["DIV", "DIV", "SELECT", "BR", "DIV", "BR", "INPUT", "BR"];
// let check = numCheck(x);
// let check2 = numCheckObj(x);
// let check3 = numCheckObj2(x);
// console.log(check);
// console.log(check2);
// console.log(check3);

// console.log( numCheckObj4(x) )

function checkd(a)
{
    let x = false;
    for (var props in a) 
    {
        
        if (props=="a" && a[props]==1 )
        {
            x = true;
            break;
        } 
        else 
        {
        x = false;
        };
    }

    return x;
}

let a = { a: 1, b: 2, c: "zxzx" };
console.log(checkd(a));

function objcre(o,a,b) {
    return o[a] = b,o;
}


let d1 = {};
let name1 = "k";
let number1 = 123;
let name2 = "k";
let number2 = 123;

x = objcre(d1, name1, number1);
console.log(x);