// [1,2,3,4]

// n=2

// [[1,2], [2,3]]

// n=3

// [[1,2,3],[2,3,4]]

// [1,2,3,4,5]
//

function makeSeries(a, n) {
    let series = []
    let serie = []
    let counter = 0
    //let check = a.length % n


    for (let i = 0; i < a.length; i++) {

        serie.push(a[i])
        counter++
        if (counter == n) {
            series.push(serie)
            counter = 0
            serie = []

            if (n > 2) {
                i = i - n + 1
            }
            else {
                i = i - 1
            }
        }
    }

    console.table(series)
    return series
}


function makeSeries2(a, n) {

    let series = []
    let serie = []

    for (let i = 0; i <= (a.length-n); i++) {

            for (let j = i; j < i + n; j++) {

                serie.push(a[j])

            }

            series.push(serie)
            serie = []
    }
    console.table(series)
}

function main() {
    let a = [1, 2, 3, 4, 5, 6 , 7]
    let n = 4
    makeSeries(a, n)
    makeSeries2(a, n)
}

main()