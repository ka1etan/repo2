var userData = {
  buttonclick: "",
  text: "",
  password: "",
  radioChecked: "",
  checkbox: "",
  text_Area: "",
  comboSelect: "",
  selectedItems: [],

};

function showUserData() {
  var json = JSON.stringify(userData, null, 2);
  document.getElementById("userData").textContent = json;
}

function firstClick() {
  var b = event.target.value;
  userData.buttonclick = b;

  showUserData();
}

function showText() {
  var e = event.target.value;
  userData.text = e;

  showUserData();
}

function passwordInput() {
  var x = event.target.value;
  userData.password = x;

  showUserData();
}

function radioCheck() {

  var radiob1 = event.target.value;

  userData.radioChecked = radiob1;

  showUserData();
}

function boxCheck() {

  //var cbox = event.target.value;
  var test = event.target.checked;

/*
  if (test == false) {
    cbox = " ";
  }*/


  userData.checkbox = test;

  showUserData();

}

function checkText() {
  var c = event.target.value;

  userData.text_Area = c;

  showUserData();
}

function comboBox() {

  var d = event.target.value;

  userData.comboSelect = d;

  showUserData();

}

function updateSelectedItems() {
  var oListbox = event.target;
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

  //var myRadioButton = document.getElementById("myRadioButton");
  //myRadioButton.addEventListener("click", radioCheck);

  var idRadio1 = document.getElementById("idRadio1");
  idRadio1.addEventListener("click", radioCheck);

  var idRadio2 = document.getElementById("idRadio2");
  idRadio2.addEventListener("click", radioCheck);

  var check = document.getElementById("check");
  check.addEventListener("click", boxCheck);

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
