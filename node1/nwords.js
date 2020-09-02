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

function makeNwords4(s, n){

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

function makeNwords5(s, n){

    let nWords = []
    let words = s.split(" ")
    
    for(let i=0;i<words.length;i++){
        let nWord = []
          for (let j = i; j < i+n; j++ ){
               nWord.push(words[j])
      }
      nWords.push(nWord.join(" "))
      }

    return nWords

}

function makeNwords6(s, n){

    let nWord = []
    let nWords = []
    let words = s.split(" ")
    let counter = 0

    for(let i=0;i<words.length;i++){

        counter++
        
        nWord.push(words[i])

        if (counter==n){
            counter = n-1
            nWords.push(nWord.join(" "))
            let tmp = nWord
            nWord = []
            for (let j=1;j<n;j++)
                {
                    nWord.push(tmp[j])
                }
        }
        
    }

    return nWords

}

function makeNwords(s, n){

    let nWord = []
    let nWords = []
    let words = s.split(" ")

    for(let i=0;i<=words.length;i++){

        if(i < n){
            nWord.push(words[i])
        }

        else {
            nWords.push(nWord.join(" "))
            nWord.shift()
            nWord.push(words[i])
        }
        
    }

    return nWords

}

function init(){

    let string = "Checking n words function zzz xxx Checking n words function zzz xxx111"
    let check = makeNwords(string, 2)
    console.table(check)
}

init()