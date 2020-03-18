function stringMethods(){
    let x = "Sweet"
    let y = "Dreams"
    let z = " reg\gular ex\pre\ssion"
    let a = 4

    console.log(x.charAt(2))
    console.log(x.charCodeAt(2))
    console.log(x.concat(" "+y))
    console.log(x.constructor)
    console.log(x.endsWith("et"))
    console.log(String.fromCharCode(0))
    console.log(y.includes("rea"))
    console.log(y.indexOf("m"))
    console.log(x.lastIndexOf("e"))
    console.log(x.localeCompare(y))
    console.log(z.match(/re/g))
    console.log(x.repeat(4))
    console.log(z.replace("regular", "irregular"))
    console.log(z.search(/gu/g))
    console.log(x.slice(1,3))
    console.log(z.split("r"))
    console.log(x.startsWith("r"))
    console.log(x.substr(1, 4))
    console.log(x.substring(1, 4))
    console.log(x.toLocaleUpperCase())
    console.log(x.toUpperCase())
    console.log(typeof(a.toString()))
    console.log(z.trim())
    console.log(y.valueOf())
}

stringMethods()