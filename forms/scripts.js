function klyk() {
  var b = document.getElementById("przycisk").value;
  document.getElementById("klykit").innerHTML = b;
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


//////////

var userData =
{
    selectedItems: [],
    text: "",
    //...

};

function showUserData()
{
    var json = JSON.stringify(userData, null, 2);
    document.getElementById("userData").textContent = json;
}

function showText() {
  var e = document.getElementById("editBox").value;
  userData.text = e;

  showUserData();
}

function updateSelectedItems()
{
  var oListbox = document.getElementById("selListbox");
  var items = getSelectedItems(oListbox);
  userData.selectedItems = items;

  showUserData();
}

function getSelectedItems(oListbox) {
  var items = [];

  for (var i=0; i < oListbox.options.length; i++) {
    if (oListbox.options[i].selected) 
    {
      items.push(oListbox.options[i].value);
    }
  }

  return items;
};


function init()
{

  var oListbox = document.getElementById("selListbox");
  oListbox.addEventListener("change", updateSelectedItems);


  var editBox = document.getElementById('editBox');
  editBox.addEventListener("input", showText);

}

window.addEventListener("load", init);
