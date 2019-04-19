var userData = {
  name: "",
}

var dataObj;

function readfile() {

  const inputElement = document.getElementById("browse");
  inputElement.addEventListener("change", readfile);
  rfile = inputElement.files[0];
  var reader = new FileReader();
  reader.addEventListener("load", function() {
    var text = reader.result;
    dataObj = JSON.parse(text);
    document.getElementById("tbox").value = dataObj.email;
    applyInitialData();
  }, false);
  if (rfile) {
    reader.readAsText(rfile);
  }
}

function applyInitialData() {
  document.getElementById("tbox").value = dataObj.email;
}


function init() {
  readfile();
//applyInitialData();
}

window.addEventListener("load", init);
