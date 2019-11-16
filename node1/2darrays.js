function fill() {
    let mat = new Array(6)

    let count = 0

    for (let i = 0; i < mat.length; i++) {
        mat[i] = new Array(6)
    }

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            mat[i][j] = count++
        }
    }
    console.log(JSON.stringify(mat))
    return mat
}

function glassHour(array, startA, startB, a, b) {
    let sum = 0


    for (let i = startA; i < a; i++) {
        for (let j = startB; j < b; j++) {
            if (i == startA + 1 && j == startB || i == startA + 1 && j == startB + 2) {

            } else {
                //console.log(array[i][j] + " ")
                sum += array[i][j]

            }


        }

    }
    console.log("sum: " + sum)
    return sum
}

function traverse(x) {
    let maxcount = 0
    let current = 0
    let mat = []

    var i, j = 0

    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {

            let sum = glassHour(x, i, j, i + 3, j + 3)
            mat.push(sum)
            current = sum
            if (j==0&&i==0||maxcount < current) {
                maxcount = current
            }
        }

    }


    //console.log(mat)
    console.log("max x: " + maxcount)
}

function main() {
    let x = fill()
    traverse(x)
    //console.log(JSON.stringify(x))
}

main()
