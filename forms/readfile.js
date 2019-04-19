function readfile() {

  const inputElement = document.getElementById("browse");
  inputElement.addEventListener("change", readfile);
  rfile = inputElement.files[0];
  var reader = new FileReader();
  reader.addEventListener("load", function() {
    var text = reader.result;
    document.getElementById("content").innerHTML = text;
    alert(text);
  }, false);
  if (rfile) {
    reader.readAsText(rfile);
  }
}


function init() {
  readfile();
}

window.addEventListener("load", init);
