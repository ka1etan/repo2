


function doctree() {
var all = document.all;
document.getElementById("ddd").innerHTML = all;
var divs = [];
var cont = [];

var node = document.firstElementChild;
var nxt = node.firstChild;
var ele = nxt.nextElementSibling;
//alert(ele.nodeName);
var root = ele.firstChild;
//var nxt = root.firstElementChild;
//var nxtnxt = nxt.firstElementSibling;
var next = root.nextSibling;
alert(next.nodeName);
var next2 = next.nextSibling;
var next3 = next2.nextSibling;
alert("next3:"+ next3.nodeName); // DIV
//var next4 = next3.firstElementChild;
//alert("next4:"+ next4.nodeName); // text
//var next5 = next4.nextSibling;
//alert("next5:"+ next5.nodeName); // null
//var pos = document.getElementById("first");
var last = next3.lastChild;
var deeper = last.childNodes;
//alert("deeper:"+ deeper.nodeName);
while (next3.firstElementChild  ) {
  document.getElementById("yyy").innerHTML = next3.nodeName;
  divs.push(next3.nodeName);

    var deep = next3.firstElementChild;
    /* while (deep.firstChild) {
       divs.push(deep.nodeName);
}*/
//  alert(next3.nodeName);
  //root = root.nextSibling;
  next3 = next3.firstElementChild;
}
next3 = next3.nextElementSibling;
//alert("next3 after while:" + next3.nodeName);
while (next3.nextElementSibling) {
document.getElementById("ccc").innerHTML = next3.nodeName;
divs.push(next3.nodeName);
next3 = next3.nextElementSibling;
}

//next3 = next3.nextSibling;
//cont.push(next3.nodeName);
//next3 = next3.nextSibling;
//cont.push(next3.nodeName);
//alert("next3 after sec while:" + next3.nodeName);
/*while (next3.nextSibling) {
//document.getElementById("ccc").innerHTML = next3.nodeName;
cont.push(next3.nodeName);
next3 = next3.nextSibling;
}*/

/*alert("next3 after while:" + next3.nodeName);
while (next3.nextSibling) {
 document.getElementById("ccc").innerHTML = next3.nodeName;
 cont.push(next3.nodeName);
}
alert(cont);*/
//alert(divs);
//alert(cont);
document.getElementById("xxx").innerHTML = divs;
document.getElementById("zzz").innerHTML = divs.length;
}



window.addEventListener("load", doctree);
