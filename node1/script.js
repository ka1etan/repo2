console.log("Hello script.js")

function testClick() {
  alert("Click");
}

function buttons() {

  var buttonClick = document.getElementById("button1");
  buttonClick.addEventListener("click", xhr);

}



function xhr() {
  var xhr = new XMLHttpRequest();
  let reqResult;
  let output;

  //var expiryDate = new Date(Date.now() + 60 * 60 * 1000) 
  //var expires = "expires="+expiryDate.toUTCString();
      // xhr.open('GET', 'http://127.0.0.1:5000', true);
      // xhr.withCredentials = true;
      // xhr.send();


  // LR: always use relative URLs for own site's resources/queries !

 // xhr.open('GET', '/result'); // LR: this must be /result (so full URL is: http://127.0.0.1:5000/result - not http://127.0.0.1:5000)
   // LR: alternative - see app3.js/get('/result2')
 // xhr.open('GET', '/result2?a');

xhr.open('POST', '/result');  
//xhr.open('GET', '/result2?a=4&b=6');

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("result").innerHTML = xhr.response;
      console.log("xhr");
      reqResult = xhr.response;
      output = JSON.parse(reqResult);
      console.log(output.add);
    }
  }

  // let a = document.getElementById("inputBox1").value;
  // let b = document.getElementById("inputBox2").value;

// let input = {
  //   x: parseInt(a),
  //   y: parseInt(b)
  // };

// let ret = JSON.stringify({add: input.x + input.y});

  // LR: you're sending the wrong thing here ...

  let numbers = {a: document.getElementById("inputBox1").value, b: document.getElementById("inputBox2").value}
  let numberString = JSON.stringify(numbers)

  xhr.send(numberString);

  //document.cookie =  "add_data=" + numberString + ";" + expires + ";path=/";
  document.cookie =  "data=" + numberString + ";" +  ";path=/";

  //showCookies();

}

function showCookies()
{
  document.getElementById("cookies").innerHTML = document.cookie;
}

function readCookies()
{
  var expiryDate = new Date(Date.now() + 72 * 60 * 60 * 1000);
  var expires = "expires="+expiryDate.toUTCString();

  let name, userName, value, dcookies = {}; 
  
  var xhr = new XMLHttpRequest();
  
  acookies = document.cookie.split("; ");

  for (let i =0; i < acookies.length; i++)
  {
      name = acookies[i].split("=")[0];
      value = acookies[i].split("=")[1];
      console.log("name: " + name + " , value: " + value);
      dcookies[name] = value;

  }

  console.log(dcookies);

  if (dcookies["name"])
  {
    document.getElementById("readCookie").innerHTML = dcookies["name"];
  } 

  else
  {
    userName = prompt("Provide your username:");
    userNameJ = {name: userName};
    userNameStr = JSON.stringify(userNameJ);

    document.cookie =  "name=" + userName + ";" + expires + ";path=/";

    xhr.open('POST', '/cookiename');  
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("readCookie").innerHTML = xhr.response;
        console.log("xhrCookie");
       }
    }
    xhr.send(userNameStr);
  }

  if(dcookies["data"])
  {
  //document.getElementById("readCookie").innerHTML = dcookies["data-a"];
  document.getElementById("inputBox1").value = dcookies["data-a"];
  document.getElementById("inputBox2").value = dcookies["data-b"];
  }

 //alert(JSON.stringify(dcookies));

  for (var prop in dcookies) {
    if (prop == "data")
    {
      console.log("true");
      console.log(dcookies["data-a"]);
    }
    else
    {
      console.log("false")
    }
}

}

function main() {
  buttons();
  console.log("main response");
  //xhr();
  //showCookies()
  readCookies()
}

window.addEventListener("load", main);
