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
      // xhr.open('GET', 'http://127.0.0.1:5000', true);
      // xhr.withCredentials = true;
      // xhr.send();

  xhr.open('POST', 'http://127.0.0.1:5000');
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("result").innerHTML = ret;
      console.log("xhr");
    }
  }

  let a = document.getElementById("inputBox1").value;
  let b = document.getElementById("inputBox2").value;

  let input = {
    x: parseInt(a),
    y: parseInt(b)
  };
  let ret = JSON.stringify({result: input.x + input.y});

  xhr.send(ret);

}



function main() {
  buttons();
  console.log("main response");
  //xhr();

}

window.addEventListener("load", main);
