function stringMethods(){
    let x = "Sweet"
    let y = "Dr3am5"
    let z = " reg\gular lex\pre\ssion"
    let a = 4
    let b = "Sweet Dreams"
    let reg = /w/g

    // console.log(x.charAt(2))
    // console.log(x.charCodeAt(2))
    // console.log(x.concat(" "+y))
    // console.log(x.constructor)
    // console.log(x.endsWith("et"))
    // console.log(String.fromCharCode(0))
    // console.log(y.includes("3"))
    // console.log(y.indexOf("m"))
    // console.log(x.lastIndexOf("e"))
    // console.log(x.localeCompare(y))
    // console.log(z.match(/re/g))
    // console.log(x.repeat(4))
    // console.log(z.replace("regular", "irregular"))
    console.log(z.search(/l/g))
    console.log(z.match(/l/g))
    // console.log(x.slice(1,3))
    // console.log(z.split("r"))
    // console.log(x.startsWith("r"))
    // console.log(x.substr(1, 4))
    // console.log(x.substring(1, 4))
    // console.log(x.toLocaleUpperCase())
    // console.log(x.toUpperCase())
    // console.log(typeof(a.toString()))
    // console.log(z.trim())
    // console.log(y.valueOf())

    console.log(y.match(/\d/g))
    console.log(x.match(/\d/g))
    console.log(b.match(/d/i))
    console.log(b.match(/Sw/g))
    console.log(y.match(/\w/g))
}

stringMethods()