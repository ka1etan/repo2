function klyk() {
  var b = document.getElementById("przycisk").value;
  document.getElementById("klykit").innerHTML = b;
}

function tekstt() {
  var e = document.getElementById("tekst").value;
  document.getElementById("itext").innerHTML = e;
}

function pswd() {
  var x = document.getElementById("myPsw").value;
  document.getElementById("pass").innerHTML = x;
}

function radioc() {
  var a = document.getElementById("myRadio").checked;
  document.getElementById("checkit").innerHTML = a;
}

function tac() {
  var c = document.getElementById("ta").value;
  document.getElementById("txtit").innerHTML = c;
}


function lb() {
var d = document.getElementById("so");
  document.getElementById("show").innerHTML = d.value;
}

var ListUtil = new Object();

function showSelectedIndexes() {
                var oListbox = document.getElementById("selListbox");
                var arrIndexes = ListUtil.getSelectedIndexes(oListbox);
                document.getElementById("disp").innerHTML = "selected: " + arrIndexes.length +
				" with indexes: " + arrIndexes + " " + oListbox.value;
            }

ListUtil.getSelectedIndexes = function (oListbox) {
    var arrIndexes = new Array;

    for (var i=0; i < oListbox.options.length; i++) {
        if (oListbox.options[i].selected) {
            arrIndexes.push(i);
        }
    }

    return arrIndexes;
};
