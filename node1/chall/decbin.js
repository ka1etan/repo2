let x = 2147483647
let binary = []

//console.log(Math.pow(2,3))
//console.log(~(parseInt(x, 2)))

for (let i=0; i<32; i++){

    if (x < 1){
        binary.push(0)  
    } else {
    let y = x % 2
    binary.push(y)
    x = Math.floor(x/2)
    }
}

//console.table(binary)

let sum = 0

for (let j = binary.length-1; j >= 0; j--){
    if (binary[j]==1){

    } else {sum += Math.pow(2, j)}
}

//console.log(sum)

let y = 1
console.log(~(y>>>0))

let z = 2 << 31
console.log(z)