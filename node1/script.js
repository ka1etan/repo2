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
      // xhr.open('GET', 'http://127.0.0.1:5000', true);
      // xhr.withCredentials = true;
      // xhr.send();


  // LR: always use relative URLs for own site's resources/queries !

 // xhr.open('GET', '/result'); // LR: this must be /result (so full URL is: http://127.0.0.1:5000/result - not http://127.0.0.1:5000)
   // LR: alternative - see app3.js/get('/result2')
 // xhr.open('GET', '/result2?a');

xhr.open('POST', '/result');  
//xhr.open('GET', '/result2?a=4&b=4');

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

  

}



function main() {
  buttons();
  console.log("main response");
  //xhr();

}

window.addEventListener("load", main);
