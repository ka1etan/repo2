function sort(array){

    let swapCount = 0

    for (let i=0;i<array.length;i++){

        for (let j=0;j<array.length-1;j++){
            if (array[j]>array[j+1]){
                //swap(a[j], a[j+1])
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
                swapCount++
            }
        }
    }
    console.log(swapCount)
    return array

}

function test(){

    let a = [5,3,4,2]
    let x = sort(a)
    console.log(x)
}

test()