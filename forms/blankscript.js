var userData = {
  name: "",
  surname: "",
  email: "",
  confirmEmail: "",
  phone: "",
  cinemaLocation: "",
  movie: "",
  date: "",
  hour: "",
  quantity: "1",
  discountVoucher: false,
  discountNumber: "",
  showType: "",
  language: "",
  additionalFood: [],
  parkingPlace: false,
  payType: "",

};

function showUserData() {
  var json = JSON.stringify(userData, null, 2);
  document.getElementById("userData").textContent = json;
}

function fname() {
  var firstName = event.target.value;
  userData.name = firstName;
}


/*function slider() {

  var slide = event.target.value;
  document.getElementById('rangeValue').innerHTML = slide;

  userData.quantity = slide;

  showUserData();
} */

function boxCheck() {
  var kid = document.getElementById("kid");
  var newe = document.createElement("input");
  newe.setAttribute("type", "number", "placeholder", "zzz", "id", "discn");

  var test = event.target.checked;
  
  if (test == true) {
    kid.appendChild(newe);
  }
  //alert("true");
  else {
    kid.removeChild(kid.childNodes[1]);
  }
}

function getSelectedItems(oListbox) {
  var items = [];

  for (var i = 0; i < oListbox.options.length; i++) {
    if (oListbox.options[i].selected) {
      items.push(oListbox.options[i].value);
    }
  }

  return items;
}

function handleEvent(elementName, eventName, stateUpdater) {

  var eventHandler = () => {
    var eventTarget = event.target;
    stateUpdater(eventTarget);
    showUserData();
  }

  var element = document.getElementById(elementName);
  element.addEventListener(eventName, eventHandler);
}

function handleEventSimple(elementName, eventName, valueUpdater) {
  handleEvent(elementName, eventName, eventTarget => valueUpdater(eventTarget.value));
}

function init() {
  //alert("init");
  showUserData();

  handleEventSimple("nameBox", "input", value => userData.name = value);

  handleEventSimple("surnameBox", "input", value => userData.surname = value);

  handleEventSimple("emailBox", "input", value => userData.email = value);

  handleEventSimple("confemailBox", "input", value => userData.confirmEmail = value);

  handleEventSimple("phoneBox", "input", value => userData.phone = value);

  handleEventSimple("locationList", "change", value => userData.cinemaLocation = value);

  handleEventSimple("movieList", "change", value => userData.movie = value);

  handleEventSimple("dateBox", "input", value => userData.date = value);

  handleEventSimple("timeBox", "input", value => userData.hour = value);

  //var rangeBox = document.getElementById('rangeBox');
  //rangeBox.addEventListener("input", slider);

  handleEventSimple("rangeBox", "input", value => userData.quantity = value);

  handleEvent("discBox", "click", eventTarget => userData.discountVoucher = eventTarget.checked);

  var discBox = document.getElementById('discBox');
  discBox.addEventListener("click", boxCheck);

  //handleEventSimple("discn", "input", value => userData.discountNumber = value );

  handleEventSimple("radio1", "click", value => userData.showType = value);
  handleEventSimple("radio2", "click", value => userData.showType = value);

  handleEventSimple("langList", "change", value => userData.language = value);

  handleEvent("selListbox", "change", eventTarget => userData.additionalFood = getSelectedItems(eventTarget));

  handleEvent("parkBox", "click", eventTarget => userData.parkingPlace = eventTarget.checked);

  handleEventSimple("payList", "change", value => userData.payType = value);
}

window.addEventListener("load", init);
