


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

//process.stdin.
stream.on('data', function (data) {
    input_stdin += data;
   itrim = input_stdin.trim();
   //console.log(itrim);
//    for (let j = 0; j < itrim.length; j++)
//    {
//        if (itrim[j] == "\r")
//        {
//    itrim2 = itrim[j].replace("\r", " ");
//    mat.push[itrim2];
//     } else
//     {
//         itrim2 = itrim[j];
//         mat.push(itrim2);
//     }
// }
itrim2 = itrim.replace(reg, " ");
//  console.log(mat);  
// console.log(itrim2);
});

//process.stdin.
stream.on('end', function () {
  // input_stdin_array = input_stdin.split("\n" );
    //input_stdin_array = input_stdin.split(" ");
    input_stdin_array = itrim2.split(" ");
    //input_stdin_array = input_stdin.trim();
    //input_stdin_array = input_stdin.split("\r");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}



function main()
{
    let arr = [];
    var T = parseInt(readLine());
    for (let i = 0; i < T * 2; i++) {
        var str = readLine();
        arr.push(str.trim());
        //arr.push(str);
        //console.log(str);
    }
    console.log(arr);
}