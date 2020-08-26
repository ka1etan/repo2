function makeNwords3(s, n){

    let nWords = []
    let collect = s[0]
    let spaceCounter = 0

    for(let i=1;i<s.length;i++){

        if(s[i]==" "){
            spaceCounter++
        }

        if(spaceCounter==n){
            nWords.push(collect)
            spaceCounter=0
            collect = ""
        } else {

        collect = collect.concat(s[i])}
    }

    return nWords

}

function makeNwords2(s, n){

    let nWords = []
    let collect = s.split(" ")

    for(let i=0;i<n;i++){
        nWords.push(collect[i])
    }

    return nWords

}

function makeNwords(s, n){

    let nWords = []
    let collect = s.split(" ")
    

    for(let i=0;i<collect.length;i++){
        let str = collect[i]
        if (i==(collect.length-1)-(n-2)){
            break
        } else {
            for (let j=i+1;j<i+n;j++){
                str=str.concat(" "+collect[j])
            }
            nWords.push(str)
        }
    }

    return nWords

}

function init(){

    let string = "Checking n words function zzz xxx"
    let check = makeNwords(string, 3)
    console.log(check)
}

init()