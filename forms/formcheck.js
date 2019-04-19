var exampleError =
{
    idError: "zzz", // id of input element with an error
    message: "zzzz", // error message
};

var exampleError2 =
{
    idError: "zzzxxx", // id of input element with an error
    message: "zzzzxxx", // error message
};

var  validationErrors = [];  // see exampleError

var  validationErrors2 = {
    idError: "", // id of input element with an error
    message: "", // error message
};

;

function showUserData() {
  //var json = JSON.stringify(userData, null, 2);
//  document.getElementById("userData").textContent = json;



  var jsonErrors = JSON.stringify(validationErrors, null, 2);
  document.getElementById("validationErrors").textContent = jsonErrors;
}

function validateForm() {
  var err = "*** Name must be filled out ***"
  var x = document.getElementById("fname").value;
  if (x == "") {
    //alert("Name must be filled out");
    document.getElementById("error").textContent = err;
    //return false;
  }
}

function checkemail(param){
  var correctmail = /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w+$/;
  return correctmail.test(param);
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

function validateData()
{
    validationErrors = []; // clear errors first
    // TODO: validate all data here

//    // example error
    var validationError =  {};
    validationError.idError = "fname";
    validationError.message = "*** Name must be filled out ***";
//
//
//    validationErrors.push(validationError); // add to the errors table
handleEvent("fname", "focusout", eventTarget =>
{
  var err = exampleError2.message;
  var correctmail = /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+$/;
  var x = document.getElementById("fname").value;
  var mailtest = correctmail.test(x);
  if (mailtest == "" || mailtest != true ) {

    document.getElementById("error").textContent = err;
    validationErrors.push(exampleError2);

  }
}
);


/*
handleEvent("fname", "input", eventTarget =>
{
 //var correctmail = /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w+$/;
  var x = document.getElementById("fname").value;
  if (x != "") {
    //alert("xxx");
    validationErrors.push(exampleError);

  }
}

);*/




}

function init() {

//handleEventSimple("fname2", "input", value => validationErrors.message = value);

showUserData();
validateData();



}

window.addEventListener("load", init);
