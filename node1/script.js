console.log("Hello script.js")

function testClick()
{
    alert("Click");
}

function buttons()
{

var buttonClick = document.getElementById("button1");
buttonClick.addEventListener("click", inputData);

}

function inputData()
{
    // let input = { a: parseInt(document.getElementById(inputBox1)), b: parseInt(document.getElementById(inputBox2))};
    // let ret = { result: input.a + input.b};

    let a = document.getElementById("inputBox1").value;
    let b = document.getElementById("inputBox2").value;
    //let ret = parseInt(a) + parseInt(b);
    let ret = "tst";
    document.getElementById("result").innerHTML = ret;

    //  let xhr = new XMLHttpRequest();
    //  xhr.open("POST", "/test.txt");
    //  xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    //  xhr.send(ret);
}

function inputData2(url, data)
{
    

    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    //xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhr.send(data);
}

function xhr()
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:5000', true);
    xhr.withCredentials = true;
    xhr.send(null);
}



function main()
{
    buttons();
    console.log("main response");
    //inputData2("http://127.0.0.1:5000", "tst");
     xhr();

}

window.addEventListener("load", main);