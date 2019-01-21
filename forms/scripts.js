var userData = {
  buttonclick: "",
  text: "",
  password: "",
  radioChecked: "",
  checkBox: false,
  textArea: "",
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


  userData.checkBox = test;

  showUserData();

}

function checkText() {
  var c = event.target.value;

  userData.textArea = c;

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

function handleEvent(elementName, eventName, stateUpdater)
{

    var eventHandler = () =>
    {
        var eventTarget = event.target;
        stateUpdater(eventTarget);
        showUserData();
    }

    var element = document.getElementById(elementName);
    element.addEventListener(eventName,  eventHandler);
}

function handleEventSimple(elementName, eventName, valueUpdater)
{
    handleEvent(elementName, eventName, eventTarget => valueUpdater(eventTarget.value) );
}

function handleEvent2(elementName, eventName, stateUpdater)
{

    var eventHandler = function()
    {
        var eventTarget = event.target;
        stateUpdater(eventTarget);
        showUserData();
    }

    var element = document.getElementById(elementName);
    element.addEventListener(eventName,  eventHandler);
}

function handleEventSimple2(elementName, eventName, valueUpdater)
{
    var stateUpdater = function(eventTarget)
    {
        valueUpdater(eventTarget.value);
    }

    handleEvent2(elementName, eventName, stateUpdater);
}

//function assignProperty(property, value)
//{
//    property = value;
//}
//
//assignProperty(userData.text, event.target.value);

function init() {
  showUserData();

  handleEventSimple("firstButton", "click", value => userData.buttonclick = value );
  handleEventSimple("editBox", "input", value => userData.text = value );
  handleEventSimple("myPsw", "input", value => userData.password = value );

  handleEventSimple("idRadio1", "click", value => userData.radioChecked = value );
  handleEventSimple("idRadio2", "click", value => userData.radioChecked = value );

  //handleEventSimple("check", "click", function(value) { userData.checkBox = value; } );
  handleEvent("check", "click", eventTarget => userData.checkBox = eventTarget.checked );

  handleEventSimple("textfield", "input", value => userData.textArea = value );

  handleEventSimple("combo", "change", value => userData.comboSelect = value );

  handleEvent("selListbox", "change", eventTarget => userData.selectedItems = getSelectedItems(eventTarget) );
}

function init2() {

  handleEventSimple("firstButton", "click", function(value) { userData.buttonclick = value; } );
  handleEventSimple("editBox", "input", function(value) { userData.text = value; } );
  handleEventSimple("myPsw", "input", function(value) { userData.password = value; } );

  handleEventSimple("idRadio1", "click", function(value) { userData.radioChecked = value; } );
  handleEventSimple("idRadio2", "click", function(value) { userData.radioChecked = value; } );

  //handleEventSimple("check", "click", function(value) { userData.checkBox = value; } );
  handleEvent("check", "click", function(eventTarget) { userData.checkBox = eventTarget.checked; } );

  handleEventSimple("textfield", "input", function(value) { userData.textArea = value; } );


  handleEventSimple("combo", "change", function(value) { userData.comboSelect = value; } );


  handleEvent("selListbox", "change", function(eventTarget) { userData.selectedItems = getSelectedItems(eventTarget); } );
}



function initOrig() {

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
