
//https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

var fs = require("fs");
var stream = fs.createReadStream("ic.txt");
// var stream = process.stdin;

// process.stdin.resume();
// process.stdin.setEncoding('ascii');
stream.resume();
stream.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;


var itrim = "";
var itrim2 = "";
var mat = [];
var reg = /\r/g;

var input_stdin_array2 = "";


var input_currentline2 = 7;

//process.stdin.
stream.on('data', function (data) {
    input_stdin += data;
   itrim = input_stdin.trim();

itrim2 = itrim.replace(reg, " ");

});

//process.stdin.
stream.on('end', function () {
  
    input_stdin_array = itrim2.split(" ");
    input_stdin_array2 = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

// function readLine2() {
//     return input_stdin_array[input_currentline++];
// }

function arrayToDict(b) // a is an array [], returns dictionary/object
{
    let o = {};

    let blength = b.length;
    let arr2 = [];
    let arr3 = [];

    for (i = 0; i < blength; i = i + 2) {
        arr2.push(b[i]);
    }

    for (j = 1; j < blength; j = j + 2) {
        arr3.push(b[j]);
    }

    for (k = 0; k < arr2.length; k++) {
        let x = arr2[k];
        o[x] = arr3[k];
    }

    return o;

}

// function checkd(a)
// {
//     let x = false;
//     let y = [];
//     let z;
//     for (var props in a) 
//     {
        
//         if (props=="xxx" && a[props]==222 )
//         {
//             x = a[props];
//             y.push(props);
//             break;
//         } 
//         else 
//         {
//         x = false;
//         };
//     }

//     //return x;
//     //console.log(y + ":"+ x);
//     z = y + ":"+ x;
//     return z;
// }
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

function main()
{
    let arr = [];
    let arr2 = [];
    var T = parseInt(readLine());
    var t1 = T / 2; 
    for (let i = 0; i < T; i++) {
        var str = readLine();
        arr.push(str.trim());
        //arr.push(str);
        //console.log(str);
    }
    console.log(arr);
    let obj = arrayToDict(arr);
    console.log(obj);
    //console.log(checkd(obj));

    for (let j = 0; j < t1; j++)
    {
        var str2 = readLine();
        arr2.push(str2.trim());
    }
    console.log(arr2);
    console.log(comp(obj, arr2));
}