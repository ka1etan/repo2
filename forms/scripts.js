var userData = {
  buttonclick: "",
  text: "",
  password: "",
  radioChecked: "",
  text_Area: "",
  comboSelect: "",
  selectedItems: [],

};

function showUserData() {
  var json = JSON.stringify(userData, null, 2);
  document.getElementById("userData").textContent = json;
}

function firstClick() {
  var b = document.getElementById("firstButton").value;
  userData.buttonclick = b;

  showUserData();
}

function showText() {
  var e = document.getElementById("editBox").value;
  userData.text = e;

  showUserData();
}

function passwordInput() {
  var x = document.getElementById("myPsw").value;
  userData.password = x;

  showUserData();
}

function radioCheck() {

  var myRadio = document.forms[0];
  var record = "";
  var j;
  for (j = 0; j < myRadio.length; j++) {
    if (myRadio[j].checked) {
      record = record + myRadio[j].value;
    }
  }
  document.getElementById("checkit").value = record;

  var y = document.getElementById("checkit").value;
  userData.radioChecked = y;

  showUserData();
}

function checkText() {
  var c = document.getElementById("textfield").value;


  var q = c;
  userData.text_Area = q;

  showUserData();
}

function comboBox() {

  var d = document.getElementById("combo");
  //document.getElementById("show").innerHTML = d.value;

  var z = d.value;
  userData.comboSelect = z;

  showUserData();

}

function updateSelectedItems() {
  var oListbox = document.getElementById("selListbox");
  var items = getSelectedItems(oListbox);
  userData.selectedItems = items;

  showUserData();
}

function getSelectedItems(oListbox) {
  var items = [];

  for (var i = 0; i < oListbox.options.length; i++) {
    if (oListbox.options[i].selected) {
      items.push(oListbox.options[i].value);
    }
  }

  return items;
};


function init() {

  var firstButton = document.getElementById("firstButton");
  firstButton.addEventListener("click", firstClick);

  var editBox = document.getElementById('editBox');
  editBox.addEventListener("input", showText);

  var myPsw = document.getElementById("myPsw");
  myPsw.addEventListener("input", passwordInput);

  var myRadioButton = document.getElementById("myRadioButton");
  myRadioButton.addEventListener("click", radioCheck);

  var textfield = document.getElementById("textfield");
  textfield.addEventListener("input", checkText);

  //var myRadio2 = document.getElementById("myRadio2");
  //myRadio2.addEventListener("click", radioCheck);

  var combo = document.getElementById("combo");
  combo.addEventListener("change", comboBox);

  var oListbox = document.getElementById("selListbox");
  oListbox.addEventListener("change", updateSelectedItems);

}

window.addEventListener("load", init);
