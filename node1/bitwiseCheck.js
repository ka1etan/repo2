function max(a) {

    let max = a[0]
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i]
        }

    }
    return max
}

function bitwise(a, b) {
    let result = parseInt(a) & parseInt(b)
    //console.log(result)
    return result
}

function prepareNumbers2(n, k) {

    let mat = []
    for (let i = 1; i <= n; i++) {
        let b = k

        while (b <= n) {
            if (i < b) {
                let result = bitwise(i, b)
                if (result < k)
                    mat.push(result)
            }
            b++
        }

    }
    console.table(mat)
    console.log(max(mat))
}

function prepareNumbers(n, k) {

    //let mat = []
    let max = 0
    for (let i = 1; i < n; i++) {
        let b = i + 1

        while (b <= n) {
            if (i < b) {
                let result = bitwise(i, b)
                console.log(i, b)
                console.log(result+" ")
                if (result < k && result > max)
                    max = result
            }
            b++
        }

    }
    console.log(max)
    return max
}

function getMaxLessThanK(n, k) {
    let max = 0;
    let result = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            console.log(a, b)
            result = a & b;
            console.log(result)
            if (result >= max && result < k) {

                max = result;

            }
        }
    }
    console.log(max)
    return max;
}


function test() {
    //let x = bitwise(4, 5)
    //console.log(x)
    // let mat = [2, 1, 2, 6, 9, 10, 20, 3]
    // console.log(max(mat))
    prepareNumbers(157, 128)
    //getMaxLessThanK(116, 112)
    //console.log(bitwise(127,128))
}

test()