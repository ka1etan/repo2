// [1,2,3,4]

// n=2

// [[1,2], [2,3]]

// n=3

// [[1,2,3],[2,3,4]]

// [1,2,3,4,5]
//

function makeSeries(a, n)
{
    let series = []
    let serie = []
    let counter = 0
    let check = a.length % n
    

    for (let i=0; i<a.length; i++){

        serie.push(a[i])
        counter++
        if(counter==n){
            series.push(serie)
            counter = 0
            serie = []
        if (check!==0){
            if (n>2){
                i=i-n+1}
                else {
                    i = i-1}

        } else {


        }

    }}

    console.table(series)
    return series
}

function main(){
    let a = [1,2,3,4,5,6,7,8]
    let n = 3
    makeSeries(a,n)
}

main()