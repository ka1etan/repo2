function trip() {
  var x = document.body;

  if (x.parentNode) {
    while (x.firstElementChild) {
      alert(x.firstElementChild.nodeName);
      x = x.firstElementChild;
    }


    while (x.nextElementSibling) {
      alert(x.nextElementSibling.nodeName);
      x = x.nextElementSibling;
    }



    while (x.lastElementChild) {
      alert(x.lastElementChild.nodeName);
      x = x.lastElementChild;
    }
  }

}

window.addEventListener("load", trip);
