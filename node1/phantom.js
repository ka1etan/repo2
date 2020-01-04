console.log("hello")
//phantom.exit()

var page = require('webpage').create();
page.open('http://localhost/gl/timerapp/', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example2.png');
  }
  phantom.exit();
});