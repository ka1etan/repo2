// let x = Math.pow(3, 3)

// console.log(x)

function generator(n) {

    let edge = Math.sqrt(n)
    let primes = []
    let notPrimes = []
    let range = []

    for (let i = 2; i <= n; i++) {
        if (i !== 2 && i !== 3) {
            if (!(i % 2) || !(i % 3)) {
                notPrimes.push(i)
            }
        }
    }

    // for (let i = 2; i <= Math.floor(edge); i++) {
    //     let multi = i

    //         while (multi < n ){

    //             multi+=i
    //             if (multi <= n )
    //             {
    //                 notPrimes.push(multi)
    //             }

    //         }


    // }
    //  notPrimes.sort(function(a, b){return a-b})



    function checkFilter(a) {

        // if (a <= Math.floor(edge)){
        // if (a !== Math.pow(a, a)){
        // return a }} 
        for (let i = 0; i < notPrimes.length; i++) {

            if (a !== notPrimes[i]) {
                return a
            }
        }
    }

    let i = 2
    while (i <= n) {

        let j = 0
        while (j < notPrimes.length) {
            if (i !== notPrimes[j]) {
                primes.push(i)
                i++
            } else {
                j++
                i++
            }
        }
    }



    //let primes = range.filter(checkFilter)



    return primes
}

function checkPrimes(input) {

    let check = "prime"
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== 1) {
            for (let j = 2; j <= Math.sqrt(input[i]); j++) {

                if (j !== input[i]) {
                    let module = input[i] % j
                    if (!module) {
                        check = "not prime"
                        break
                    } else {

                    }
                }
            }
        } else { check = "not prime" }
        console.log(input[i] + ": " + check)
    }
}




function generator2(n) {
    let edge = Math.sqrt(n)
    let arr = []

    for (let i = 2; i <= n; i++) {
        arr.push(i)
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j <= Math.floor(edge); j++) {
            if (arr[i] == j) {
                let w = j * j
                while (w <= n) {
                    let ind = arr.indexOf(w)
                    if (ind >= 0) {
                        let tmp = arr[arr.length - 1]
                        arr[arr.length - 1] = arr[ind]
                        arr[ind] = tmp
                        arr.pop()
                        arr.sort(function (a, b) { return a - b })
                        w += j
                    } else { w += j }
                }
            }
        }
    }

    return arr
}

// zamiast tablicy obiekt, kluczem maja byc liczby od 2 do n, 
// wartosciami true/false - w senise czy zostala juz sprawdzona
//pozniej, dodac tablice  gdzie beda pierwsze,
// petla while od i= 2 do n/edge, jezeli obj[i] = false
// to znaczy ze liczba jest pierwsza, dodaj to tablicy
// robie druga petle gdzie  sprawdzam wielokrotnosci i
// i ustawiam false w obiekcie

function generator3(n) {
    let edge = Math.sqrt(n)
    let obj = {}
    let primes = []
    let i = 2
    //let w = i*i

    for (let i = 2; i <= n; i++) {
        obj[i] = true

    }

    for (let props = 2; props <= n; props++) {

        if (obj[props]) {
            primes.push(props)
            while (i <= Math.floor(edge)) {
                let w = i * i
                while (w <= n) {

                    if (obj[w]) {
                        obj[w] = false
                        w += i
                    } else { w += i }
                }
                i++
            }
        }
    }


    // console.log(JSON.stringify({ obj, primes }))
    // checkPrimes(primes)
    return primes
}

function generator4(n) {
    let edge = Math.sqrt(n)
    let obj = {}
    let primes = []
    let i = 2
    //let w = i*i

    for (let i = 2; i <= n; i++) {
        obj[i] = true

    }

    for (let props = 2; props <= n; props++) {

        if (obj[props]) {
            primes.push(props)
            for (let i = 1; i * props <= n; i++) {
                obj[i * props] = false
            }

        }
    }


    //console.log(JSON.stringify({ obj, primes }))
    //checkPrimes(primes)
    return primes
}

function test() {
    // console.log(generator(100).toString())
    // console.log(generator2(100).toString())
    // let x = generator2(100)
    // checkPrimes(x)
    console.table(generator3(100))
    console.table(generator4(100))
}

test()