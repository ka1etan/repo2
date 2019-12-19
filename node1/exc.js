class Calculator {
    power(a, b) {
        let i = 0
        let score = a
        if (b == 0) {
            score = 1

        } else if (a < 0 || b < 0) {
            throw new Error("n and p should be non-negative")
        } else {
            while (i < (b - 1)) {
                score = score * a
                i++
            }
        }
        return score
    }
}

// function power(a, b) {
//     let i = 0
//     let score = a
//     try {
//         if (b == 0) {
//             score = 1

//         } else if (a < 0 || b < 0) {
//             throw new Error("n and p should be non-negative")
//         } else {
//             while (i < (b - 1)) {
//                 score = score * a
//                 i++

//             }

//         }

//     }
//     catch (e) {
//         console.log(e.message)
//         return
//     }
//     return score

// }

function main() {

    let calc = new Calculator()
    try {
        let a = 2
        let b = -10
        let check = calc.power(a, b)
        console.log(check)
    }
    catch (e) {
        console.log(e)
    }
}

main()