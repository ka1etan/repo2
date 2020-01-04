function bubbleSort(a) {
    let swapCounter = 0
    for (let j = 0; j < a.length; j++) {
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                let tmp = a[i]
                a[i] = a[i + 1]
                a[i + 1] = tmp
                swapCounter++
            }
        }
        if (swapCounter == 0) {
            break
        }
    }
    console.log(swapCounter)
    return a
}

function test() {
    let x = [3, 2, 1 , 4, 5, 0]
    let y = bubbleSort(x)
    console.log(y)
}

test()