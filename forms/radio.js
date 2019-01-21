function showAlert() {
  alert("test");
}

function radioCheck(coffee){

  var coffee = document.forms[0];
  var record = "";
  var j;
  for (j = 0; j < coffee.length; j++) {
    if (coffee[j].checked) {
      record = record + coffee[j].value;
    }
  }
  document.getElementById("order").value = record;
}

function boxCheck(){
  var x = document.getElementById("check").value;
  document.getElementById("cb1").innerHTML = x;
}

function init() {
  showAlert();

  var r1 = document.getElementById("r1");
  r1.addEventListener("click", radioCheck);

  var r2 = document.getElementById("r2");
  r2.addEventListener("click", radioCheck);

  var check = document.getElementById("check");
  check.addEventListener("click", boxCheck);
}

window.addEventListener("load", init);
