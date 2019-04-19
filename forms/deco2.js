function utoa(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
// base64 encoded ascii to ucs-2 string
function atou(str) {
    return decodeURIComponent(escape(window.atob(str)));
}
// Usage:
var jsonBegin = "{";
var jsonEnd = "}";
var a = "123 abc";
var b = "sometext sometext sometext sometext sometext sometext sometext";
var all = [jsonBegin, b, jsonEnd];
var deco = utoa(all);
var deco2 = utoa(b);
var decojsonBegin = utoa(jsonBegin);
var decojsonEnd = utoa(jsonEnd);
var enco = atou(utoa(all));


function begin() {


document.getElementById("zzz").innerHTML = all;
document.getElementById("xxx").innerHTML = deco;
document.getElementById("ccc").innerHTML = decojsonEnd;
document.getElementById("yyy").innerHTML = enco;


}

window.addEventListener("load", begin);
