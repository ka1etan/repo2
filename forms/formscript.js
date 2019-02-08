var emptyError = "typing...";

var nameError = {
  idError: "nameBox", // id of input element with an error
  message: "Name cannot be empty.", // error message
};

var surnameError = {
  idError: "surnameBox",
  message: "Surname cannot be empty.",
};

var emailError = {
  idError: "emailBox",
  message: "Please provide your email or your email is invalid",
};

var confemailError = {
  idError: "confemailBox",
  message: "Please provide your email or your email is not the same",
};

var phoneBoxError = {
  idError: "phoneBox",
  message: "Please provide your phone or your number is too short",
};

var discnError = {
  idError: "discn",
  message: "Please provide your discount number or your number is too short",
};



var userData = {
  name: "",
  surname: "K1",
  email: "ka1etan@wp.pl",
  confirmEmail: "ka1etan@wp.pl",
  phone: "123321123",
  cinemaLocation: "location2",
  movie: "Movie1",
  date: "",
  hour: "18:00",
  quantity: "5",
  discountVoucher: false,
  discountNumber: "",
  showType: "Normal",
  language: "Language2",
  additionalFood: ["Drink"],
  parkingPlace: true,
  payType: "Transfer",
};



var validationErrors = []; // see exampleError

var userDataStack = [];

let userDataObj = {};

var dataObj;


var XMLHttp = new XMLHttpRequest();

function loadata() {


  XMLHttp.onreadystatechange = function() {
    if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {

      document.getElementById("userDataLoad").innerHTML =
     this.responseText;
       dataObj = JSON.parse(this.responseText);
       var userName = dataObj.name;
       var userSurname = dataObj.surname;



    //document.getElementById("userData2b").value = dataObj.surname;

    document.getElementById("nameBox").value = dataObj.name;

    Object.assign(userDataObj, dataObj.name);

    userDataStack.push(dataObj);

    userDataStack.push(userName);

    userDataStack.push(userSurname);

    //alert(userDataStack);

    document.getElementById("userData2a").textContent = userDataStack;

    document.getElementById("surnameBox").value = dataObj.surname;

    //userData.name = userName;

    }
  }
  XMLHttp.open("GET", "userdata.json");
  XMLHttp.send();


}
function validateData2(){
//alert(userDataStack);

}


function showUserData() {

var json = JSON.stringify(userData, null, 2);
  document.getElementById("userData").textContent = json;

var jsonErrors = JSON.stringify(validationErrors, null, 2);
  document.getElementById("validationErrors").textContent = jsonErrors;

  var jsonData = JSON.stringify(userDataStack, null, 2);
  document.getElementById("userData2a").textContent = jsonData;

  var jsonData2 = JSON.stringify(userDataObj, null, 2);
  document.getElementById("userData2obj").textContent = jsonData2;


}







/*function fname() {
  var firstName = event.target.value;
  userData.name = firstName;
}*/


/*function slider() {

  var slide = event.target.value;
  document.getElementById('rangeValue').innerHTML = slide;

  userData.quantity = slide;

  showUserData();
} */

function boxCheck(test) {


  var kid = document.getElementById("kid");
  var newe = document.createElement("input");
  newe.setAttribute("type", "number");
  newe.setAttribute("id", "discn");
  newe.setAttribute("placeholder", "zzz");


  if (test) {
    kid.appendChild(newe);
    handleEventSimple("discn", "input", value => userData.discountNumber = value);
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
    validateData(); // LR: podpina walidacje!
    showUserData();
    //loadata();
  }

  var element = document.getElementById(elementName);
  element.addEventListener(eventName, eventHandler);
}

function handleEventSimple(elementName, eventName, valueUpdater) {
  handleEvent(elementName, eventName, eventTarget => valueUpdater(eventTarget.value));
}




function init() {

  //alert("init");
  loadata();
  //xmlhttptest()
  applyInitialData();
  validateData();
  showUserData();

  validateData2();

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

  handleEvent("discBox", "click", eventTarget => {
    userData.discountVoucher = eventTarget.checked;
    var a = document.getElementById("discn");
    if (eventTarget.checked) {
      a.removeAttribute("disabled");
    } else {
      a.setAttribute("disabled", "true");
    }

    //boxCheck(eventTarget.checked);
  });



  //handleEventSimple("discn", "input", value => userData.discountNumber = value );

  handleEventSimple("discn", "input", value => userData.discountNumber = value);

  handleEventSimple("radio1", "click", value => userData.showType = value);
  handleEventSimple("radio2", "click", value => userData.showType = value);

  handleEventSimple("langList", "change", value => userData.language = value);

  handleEvent("selListbox", "change", eventTarget => userData.additionalFood = getSelectedItems(eventTarget));

  handleEvent("parkBox", "click", eventTarget => userData.parkingPlace = eventTarget.checked);

  handleEventSimple("payList", "change", value => userData.payType = value);
}

function applyInitialData() {
  // TODO: set HTML according to initial values in userData
//  var name = userData.name;


  document.getElementById("nameBox").value = userData.name;

  //var surn = dataObj.surname;
  //document.getElementById("surnameBox").value = dataObj.surname;

  var mail = userData.email;
  document.getElementById("emailBox").value = mail;

  var cmail = userData.confirmEmail;
  document.getElementById("confemailBox").value = cmail;

  var telep = userData.phone;
  document.getElementById("phoneBox").value = telep;

  var cinLoc = userData.cinemaLocation;
  document.getElementById("locationList").value = cinLoc;

  var movieTitle = userData.movie;
  document.getElementById("movieList").value = movieTitle;

  var cdate = new Date();
  var cdateall = cdate.toISOString().split('T')[0];

  var cdate2 = cdate.getUTCFullYear();
  var cdate3 = cdate.getMonth();
  var cdate4 = cdate.getDate();
  //var cdateall = cdate.toDateString();

  //
  //var cdateall = cdate.toLocaleDateString();
  //var cdateall = cdate.valueOf();

  var datearray = [cdate2, cdate3, cdate4];

   userData.date = cdateall;
  //document.write(cdate2 + cdate3);
  //document.getElementById("cdate").textContent = cdate;
  //document.getElementById("cdate2").textContent = cdate2;
  //document.getElementById("cdate3").textContent = cdate3;
  //  document.getElementById("cdate4").textContent = cdate4;
  document.getElementById("cdateall").textContent = cdateall;
  document.getElementById("datearray").textContent = datearray;

  document.getElementById("dateBox").value = userData.date;

  var time = userData.hour;
  document.getElementById("timeBox").value = time;

  var quant = userData.quantity;
  document.getElementById("rangeBox").value = quant;

  var dv = userData.discountVoucher;
  document.getElementById("discBox").value = dv;

  //discountNumber
  var st1 = userData.showType;
  document.getElementById("radio1").checked = st1;
  var st2 = userData.showType;
  document.getElementById("radio2").checked = st2;

  if (st1 == "Normal") {
    document.getElementById("radio1").checked = true;
  }

  var lang = userData.language;
  document.getElementById("langList").value = lang;

  var af = userData.additionalFood;
  document.getElementById("selListbox").value = af;

  var pp = userData.parkingPlace;
  document.getElementById("parkBox").checked = pp;

  var pt = userData.payType;
  document.getElementById("payList").value = pt;



}

function isEmptyString(s) {
  return (!s || typeof(s) != "string" || s.length == 0)
}

function checkMail(c) {
  var correctmail = /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+$/;
  var mailtest = correctmail.test(c);
  return (!c || typeof(c) != "string" || c.length == 0 || mailtest != true)
}

function confMail(d) {
  var emailconf = userData.email;
  var correctmail = /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+$/;
  var mailtest = correctmail.test(d);
  return (!d || typeof(d) != "string" || d.length == 0 || mailtest != true || d != emailconf)
}

function checkPhone(p) {
  //var phone = "1122"
  return (!p || typeof(p) != "string" || p.length == 0 || p.length < 9)
  //alert(typeof p);
}

function checkDiscn(p) {
  if (userData.discountVoucher) {
    return (!p || typeof(p) != "string" || p.length == 0 || p.length < 6)
  }
}



function validateData() {
  validationErrors = []; // clear errors first
  // TODO: validate all data here

  //    // example error
  //    var validationError =  {};
  //    validationError.idError = "nameBox";
  //    validationError.message = "Name can't be empty.";
  //
  //
  //    validationErrors.push(validationError); // add to the errors table



//  if (isEmptyString(userData.name)) // LR: zrob to zamiast tego
//  {
//   validationErrors.push(nameError);
//  }

  if (isEmptyString(userData.surname)) {
    validationErrors.push(surnameError);
  }


  if (checkMail(userData.email)) {
    validationErrors.push(emailError);
  }



  if (confMail(userData.confirmEmail)) {
    validationErrors.push(confemailError);
  }

  if (checkPhone(userData.phone)) {
    validationErrors.push(phoneBoxError);
  }

  if (checkDiscn(userData.discountNumber)) {
    validationErrors.push(discnError);
  }

}

window.addEventListener("load", init);
