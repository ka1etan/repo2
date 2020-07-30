let vowels = ["a", "e", "i", "o", "u"]
//let reg = new RegExp(par)


let x = true
let y = true
let z = x & y
let str = "bb"

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let checkFirst = new RegExp(/^[aeiou]/g)
    let checkLast = new RegExp(/[aeiou]$/g)

    //let re = new RegExp(/^([aeiou]).*\1$/g)
    let re = new RegExp(/^([aeiou]).*\1$/g)

    
    /*
     * Do not remove the return statement
     */
    
    return re;
}


function main() {
    const re = regexVar();
    const s = "1aoma1texa1";
    
    console.log(re.test(s));
}

// var str2 = "Thez";
// var patt1 = new RegExp("z")

// while (patt1.test(str2)==true)  {
//   console.log("'ain' found. Index now at: "+patt1.lastIndex);
  
// }

main()