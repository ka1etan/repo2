// Code goes here
// ucs-2 string to base64 encoded ascii
function utoa(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
// base64 encoded ascii to ucs-2 string
function atou(str) {
    return decodeURIComponent(escape(window.atob(str)));
}
// Usage:
var deco = utoa('dfgdfggd'); // 4pyTIMOgIGxhIG1vZGU=
var enco = atou('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"

utoa('I \u2661 Unicode!'); // SSDimaEgVW5pY29kZSE=
atou('SSDimaEgVW5pY29kZSE='); // "I ♡ Unicode!"

var a = "123";

document.getElementById("zzz").innerHTML = a;
document.getElementById("xxx") = enco;
