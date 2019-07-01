var fs = require("fs");
var stream = fs.createReadStream("2906.m3u");

stream.resume();
stream.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

var itrim = "";
var itrim2 = "";
var reg = /\r/g;

stream.on('data', function (data) {
    input_stdin += data;
    itrim = input_stdin.trim();

    itrim2 = itrim.replace(reg, " ");

});

stream.on('end', function () {
    input_stdin_array = itrim2.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main()
{
    let arr = [];
    var T = input_stdin_array.length;
    for (let i = 0; i < T; i++) {
        var str = readLine();

        if (str.charAt(0)=="D")
        {
        arr.push(str.trim());
        }
    }
    console.log(arr);
}

// function onFiles()
// {
//     let obj, f;

//     obj = new ActiveXObject("Scripting.FileSystemObject");
//     f = obj.GetFile("D:\sound&\soulseek dl\01. Boards of Chicago.mp3");
//     if (!f) {
//         console.log("failed");
//         alert("failed");
//     }
//     f.Copy("D:\\tmp\\01. Boards of Chicago.mp3")
//     alert("tst");
// }

// function init()
// {
//     onFiles();
// }



// window.addEventListener("load", init);