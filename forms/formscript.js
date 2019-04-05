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
  discountVoucher: "",
  discountNumber: "",
  showType: "Normal",
  language: "Language2",
  additionalFood: ["Drink"],
  parkingPlace: true,
  payType: "Transfer",
};

var validationErrors = []; // see exampleError

var userDataStack = [];
//alert("var userDataStack");

//let userDataObj = {};
var dataObj;

var XMLHttp = new XMLHttpRequest();

var hyperlink = "data:application/octet-stream;charset=utf-8;base64,";

function loadata() {

  XMLHttp.onreadystatechange = function() {
    //  alert("loadata before if");
    if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
      //  alert("loadata after if");
      document.getElementById("userDataLoad").innerHTML =
        this.responseText;
      dataObj = JSON.parse(this.responseText);
      // var userName = dataObj.name;
      // var userSurname = dataObj.surname;
      //document.getElementById("userData2b").value = dataObj.surname;
      //document.getElementById("nameBox").value = dataObj.name;
      document.getElementById("userData2a").textContent = userDataStack;

      initData2();
      //alert("initData2 XHR");
      showUserData2();
      //alert("showuserdata2 XHR");
      applyInitialData();
      //  alert("applyInitialData XHR");
      validateData();
      //alert("validate XHR");
      showErrors();
      //  alert("showErrors XHR");
      buttonCheck();
      //  decode();
      //  alert("decode XHR");
    }
  }
  //  alert("loadata after after if");
  XMLHttp.open("GET", "userdata.json");
  XMLHttp.send();
}

function readfile() {

  const inputElement = document.getElementById("browse");
  inputElement.addEventListener("change", readfile);
  rfile = inputElement.files[0];
  var reader = new FileReader();
  reader.addEventListener("load", function() {
    var text = reader.result;
    dataObj = JSON.parse(text);
    initData2();
    applyInitialData();
    showUserData2();
    validateData();
    showErrors();
    buttonCheck();
  }, false);

  if (rfile) {
    reader.readAsText(rfile);
  }
}

function initData2() {

  var userName = dataObj.name;
  var userSurname = dataObj.surname;
  var userMail = dataObj.email;
  var userConfMail = dataObj.confirmEmail;
  var userPhone = dataObj.phone;
  var userLocation = dataObj.cinemaLocation;
  var userMovie = dataObj.movie;
  var userDate = dataObj.date;
  var userHour = dataObj.hour;
  var userQuantity = dataObj.quantity;
  var userDiscount = dataObj.discountVoucher;
  var userDiscountN = dataObj.discountNumber;
  var userShow = dataObj.showType;
  var userLang = dataObj.language;
  var userFood = dataObj.additionalFood;
  var userPark = dataObj.parkingPlace;
  var userPay = dataObj.payType;
  //Object.assign(userDataObj, dataObj.name);
  //userDataStack.push(dataObj);
  userDataStack.push(userName);
  userDataStack.push(userSurname);
  userDataStack.push(userMail);
  userDataStack.push(userConfMail);

  //document.getElementById("nameBox").value = userName;
  //document.getElementById("surnameBox").value = userSurname;

  userData.name = userName;
  userData.surname = userSurname;
  userData.email = userMail;
  userData.confirmEmail = userConfMail;
  userData.phone = userPhone;
  userData.cinemaLocation = userLocation;
  userData.movie = userMovie;
  userData.date = userDate;
  userData.hour = userHour;
  userData.quantity = userQuantity;
  userData.discountVoucher = userDiscount;
  userData.discountNumber = userDiscountN;
  userData.showType = userShow;
  userData.language = userLang;
  userData.additionalFood = userFood;
  userData.parkingPlace = userPark;
  userData.payType = userPay;
  //alert("userDatastack:" + userDataStack);
  //alert("userdata z initData2:"+JSON.stringify(userData, null, 2));
  //var deco = utoa(JSON.stringify(userData, null, 2));
  //var enco = atou(deco);
  //document.getElementById("decode").innerHTML = deco;
  //document.getElementById("encode").innerHTML = enco;
  //var newlink = document.getElementById("anewlink");

  //if (event.target.click) {
  //  newlink.setAttribute("href", hyperlink + deco);
  //  newlink.setAttribute("download", "userdata.json");
  //}
}

function showUserData2() {

  var json = JSON.stringify(userData, null, 2);
  document.getElementById("userData").textContent = json;

}

function showErrors() {

  var jsonErrors = JSON.stringify(validationErrors, null, 2);
  document.getElementById("validationErrors").textContent = jsonErrors;

}


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

/*function decode() {
  var deco = utoa(JSON.stringify(userData, null, 2));
  var enco = atou(deco);
  //document.getElementById("decode").innerHTML = deco;
  //document.getElementById("encode").innerHTML = enco;
  //alert("userdata z decode:"+JSON.stringify(userData, null, 2));
}*/

function decoClick() {
  var deco2 = utoa(JSON.stringify(userData, null, 2));
  //var enco = atou(deco);
  var newlink = document.getElementById("newlink");
  var newa = document.createElement("a");
  newa.setAttribute("href", hyperlink + deco2);
  newa.setAttribute("download", "userdata.json");
  newa.innerText = "Download link";
  //alert("userdata z decoclick:"+JSON.stringify(userData, null, 2));

  while (newlink.firstChild) {

    newlink.removeChild(newlink.firstChild);

  }

  newlink.appendChild(newa);

}

function handleEvent(elementName, eventName, stateUpdater) {

  var eventHandler = () => {
    var eventTarget = event.target;


    stateUpdater(eventTarget);
    validateData();
    //alert("state updater/validate data");
    showErrors();
    showUserData2();
    //alert("userdata z handleEvent:"+JSON.stringify(userData, null, 2));
    //decode();
    buttonCheck();

    // LR: podpina walidacje!

  }

  var element = document.getElementById(elementName);
  element.addEventListener(eventName, eventHandler);
}

function handleEventSimple(elementName, eventName, valueUpdater) {
  handleEvent(elementName, eventName, eventTarget => valueUpdater(eventTarget.value));
}


function init() {

  //  alert("init");
  loadata();
  //  alert("function loadata");
  readfile();

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
    //var b = userData.discountNumber;
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

  var buttonSubmit = document.getElementById("buttonSubmit");
  buttonSubmit.addEventListener("click", decoClick);

  domtrip();

}

function applyInitialData() {
  // TODO: set HTML according to initial values in userData
  //  var name = userData.name;

  document.getElementById("nameBox").value = userData.name;

  //var surn = dataObj.surname;
  document.getElementById("surnameBox").value = userData.surname;

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
  //var cdateall = cdate.toLocaleDateString();
  //var cdateall = cdate.valueOf();
  var datearray = [cdate2, cdate3, cdate4];
  //userData.date = cdateall;
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
  document.getElementById("discBox").checked = dv;

  document.getElementById("discn").value = userData.discountNumber;

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

  if (isEmptyString(userData.name)) // LR: zrob to zamiast tego
  {
    validationErrors.push(nameError);
  }

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

function buttonCheck() {
  var sbtn = document.getElementById("buttonSubmit");
  /*  if (checkMail(userData.email)) {

      sbtn.setAttribute("disabled", "true");

    } else {

      sbtn.removeAttribute("disabled");
    }*/
  if (validationErrors != 0) {

    sbtn.setAttribute("disabled", "true");
  } else {
    sbtn.removeAttribute("disabled");
  }

};

function utoa(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
// base64 encoded ascii to ucs-2 string
function atou(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

//alert("userdata poza:"+JSON.stringify(userData, null, 2));
//var deco = utoa(JSON.stringify(userDataStack, null, 2));
//var enco = atou(deco);

//function decode(){
//document.getElementById("decode").innerHTML = deco;
//document.getElementById("encode").innerHTML = enco;
//alert("decode");
//}

//function createA() {
//  var newlink = document.getElementById("anewlink");

//  if (event.target.click) {
//  newlink.setAttribute("href", hyperlink + deco);
//  newlink.setAttribute("download", "userdata.json");
//  }


function domtrip() {

  let webtree = [];
  let counters = {};

  for (i = 0; i < document.all.length; i++) {
    let node = document.all[i];
    let name = node.nodeName;

    webtree.push(name);
  }

    for (let k = 0; k < webtree.length; k++) {

      let o = counters[webtree[k].toString()];

      if (o) {
        o += 1;
      } else {

        o = 1;
      }

      counters[webtree[k].toString()] = o;
    }

    alert(JSON.stringify(counters));
  }


function domtrip2() {

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
  var collectkeys = ["SCRIPT", "DIV", "TABLE", "TR", "TD", "INPUT", "SELECT", "FIELDSET", "BR",
    "PRE", "A", "FORM", "P"];

  var objcoll = {};


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

  var collectkeyvalues = [collectscript.length, collectdiv.length, collecttable.length,
    collecttr.length, collecttd.length, collectinput.length, collectselect.length, collectfieldset.length,
    collectbr.length, collectpre.length, collecta.length, collectform.length,
    collectp.length];

  for (k = 0; k < collectkeys.length; k++) {
    let x = collectkeys[k];
    objcoll[x] = collectkeyvalues[k];
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
    "PRE: " + collectpre.length + "\n" +
    "ALL: " + (collectscript.length + collectdiv.length + collecttable.length + collecttr.length +
      collecttd.length + collectform.length + collectinput.length + collectselect.length +
      collectfieldset.length + collecta.length + collectp.length + collectbr.length + collectpre.length)
  );

  alert(JSON.stringify(objcoll));

}

window.addEventListener("load", init);
