
function browseFile() {
  const inputElement = document.getElementById("browse");
  inputElement.addEventListener("change", browseFile);

  let nBytes = 0;
  oFiles = document.getElementById("browse").files;
  nFiles = oFiles.length;
  for (let i=0; i < nFiles; i++){
    nBytes += oFiles[i].size;
  }
  let sOutput = nBytes + " bytes";

document.getElementById("fileNum").innerHTML = nFiles;
document.getElementById("fileSize").innerHTML = sOutput;
}

function upload(file) {

const uploadFile1 = document.getElementById("browse2");
uploadFile1.addEventListener("change", upload);

const uri = "upload.php";
const xhr = new XMLHttpRequest();
const fd = new FormData();

xhr.open("POST", uri, true);
xhr.onreadystatechange = function() {
  if (xhr.onreadystatechange==4 && xhr.status==200){
    alert(xhr.responseText);
  }
  fd.append("fupl", file);
  xhr.send(fd);
}


}

function init() {
 browseFile();
 upload();
}

window.addEventListener("load", init);
