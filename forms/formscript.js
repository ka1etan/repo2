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
  name: "Filip",
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


function showUserData() {
  var json = JSON.stringify(userData, null, 2);
  document.getElementById("userData").textContent = json;



  var jsonErrors = JSON.stringify(validationErrors, null, 2);
  document.getElementById("validationErrors").textContent = jsonErrors;
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
  }

  var element = document.getElementById(elementName);
  element.addEventListener(eventName, eventHandler);
}

function handleEventSimple(elementName, eventName, valueUpdater) {
  handleEvent(elementName, eventName, eventTarget => valueUpdater(eventTarget.value));
}




function init() {
  //alert("init");
  applyInitialData();
  validateData();
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
  var name = userData.name;
  document.getElementById("nameBox").value = name;

  var surn = userData.surname;
  document.getElementById("surnameBox").value = surn;

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

  var dates = userData.date;
  document.getElementById("dateBox").value = dates;

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

  var cdate = new Date();
  var cdate2 = cdate.getUTCFullYear();
  var cdate3 = cdate.getMonth();
  var cdate4 = cdate.getDate();
  var cdateall = cdate.toDateString();

  var datearray = [cdate2, cdate3, cdate4];
  userData.date = datearray;
  //document.write(cdate2 + cdate3);
  //document.getElementById("cdate").textContent = cdate;
  //document.getElementById("cdate2").textContent = cdate2;
  //document.getElementById("cdate3").textContent = cdate3;
  //  document.getElementById("cdate4").textContent = cdate4;
  document.getElementById("cdateall").textContent = cdateall;
  document.getElementById("datearray").textContent = datearray;
}

function isEmptyString(s)
{
    return (!s || typeof(s) != "string" || s.length==0)
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

    //LR - to niepotrzebne:
//  handleEvent("nameBox", "focusout", eventTarget => {
//
//    var name = document.getElementById("nameBox").value;
//    if (name == "") {
//      validationErrors.push(nameError);
//
//    }
//  });
//  handleEvent("nameBox", "input", eventTarget => {
//
//    var fname = document.getElementById("nameBox").value;
//    if (fname != "") {
//
//      validationErrors[0] = emptyError;
//
//    }
//  });

    if (isEmptyString(userData.name)) // LR: zrob to zamiast tego
    {
        validationErrors.push(nameError);
    }


  handleEvent("surnameBox", "focusout", eventTarget => {

    var surname = document.getElementById("surnameBox").value;
    if (surname == "") {
      validationErrors.push(surnameError);

    }
  });

  handleEvent("surnameBox", "input", eventTarget => {

    var surname = document.getElementById("surnameBox").value;
    if (surname != "") {

      validationErrors[1] = emptyError;

    }
  });

  handleEvent("emailBox", "focusout", eventTarget => {
    var correctmail = /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+$/;
    var email = document.getElementById("emailBox").value;
    var mailtest = correctmail.test(email);
    if (mailtest == "" || mailtest != true) {
      validationErrors.push(emailError);

    }
  });

  handleEvent("emailBox", "input", eventTarget => {

    var email = document.getElementById("emailBox").value;
    if (email != "") {

      validationErrors[2] = emptyError;

    }
  });

  handleEvent("confemailBox", "focusout", eventTarget => {
    var emailconf = userData.email;
    //alert(emailconf);
    var confemailBox = document.getElementById("confemailBox").value;
    if (confemailBox == "" || confemailBox != emailconf) {
      validationErrors.push(confemailError);

    }
  });

  handleEvent("confemailBox", "input", eventTarget => {

    //alert(emailconf);
    var confemailBox = document.getElementById("confemailBox").value;
    if (confemailBox != "") {

      validationErrors[3] = emptyError;

    }
  });

  handleEvent("phoneBox", "focusout", eventTarget => {

    var phoneBox = document.getElementById("phoneBox").value;
    //alert(phoneBox.length);
    if (phoneBox == "" || phoneBox.length < 9) {
      validationErrors.push(phoneBoxError);

    }
  });

  handleEvent("phoneBox", "input", eventTarget => {

    //alert(emailconf);
    var phoneBox = document.getElementById("phoneBox").value;
    if (phoneBox != "") {

      validationErrors[4] = emptyError;

    }
  });

  handleEvent("discn", "focusout", eventTarget => {

    var discn = document.getElementById("discn").value;
    //alert(phoneBox.length);
    if (discn == "" || discn.length < 6) {
      validationErrors.push(discnError);

    }
  });

  handleEvent("discn", "input", eventTarget => {

    //alert(emailconf);
    var discn = document.getElementById("discn").value;
    if (discn != "") {

      validationErrors[5] = emptyError;

    }
  });

}

window.addEventListener("load", init);
