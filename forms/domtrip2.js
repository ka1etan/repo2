function trip() {

  var collect = [];
  var collectdiv = [];
  var collecta = [];
  var collectp = [];
  var collectscript = [];
  var collectform = [];
  var collecttable = [];
  var collecttr = [];
  var collecttd = [];
  var collectinput = [];
  var collectbr = [];
  var collectselect = [];
  var collectfieldset = [];
  var collectpre = [];


 for (i = 0; i < document.all.length; i++) {
    collect.push(document.all[i].nodeName);
}

  for (j = 0; j < collect.length; j++) {

    if (collect[j] == "SCRIPT") {
      collectscript.push(collect[j]);

    } else if (collect[j] == "DIV") {
      collectdiv.push(collect[j]);
    } else if (collect[j] == "TABLE") {
      collecttable.push(collect[j]);
    } else if (collect[j] == "TR") {
      collecttr.push(collect[j]);
    } else if (collect[j] == "TD") {
      collecttd.push(collect[j]);
    } else if (collect[j] == "INPUT") {
      collectinput.push(collect[j]);
    } else if (collect[j] == "SELECT") {
      collectselect.push(collect[j]);
    } else if (collect[j] == "FIELDSET") {
      collectfieldset.push(collect[j]);
    } else if (collect[j] == "BR") {
      collectbr.push(collect[j]);
    } else if (collect[j] == "PRE") {
      collectpre.push(collect[j]);
    } else if (collect[j] == "A") {
      collecta.push(collect[j]);
    } else if (collect[j] == "FORM") {
      collectform.push(collect[j]);
    } else if (collect[j] == "P") {
      collectp.push(collect[j]);
    }
}

  alert("SCRIPT: " + collectscript.length + "\n" +
    "DIV: " + collectdiv.length + "\n" +
    "TABLE: " + collecttable.length + "\n" +
    "TR: " + collecttr.length + "\n" +
    "TD: " + collecttd.length + "\n" +
    "FORM: " + collectform.length + "\n" +
    "INPUT: " + collectinput.length + "\n" +
    "SELECT: " + collectselect.length + "\n" +
    "FILEDSET: " + collectfieldset.length + "\n" +
    "A: " + collecta.length + "\n" +
    "P: " + collectp.length + "\n" +
    "BR: " + collectbr.length + "\n" +
    "PRE: " + collectpre.length
  );

}

window.addEventListener("load", trip);
