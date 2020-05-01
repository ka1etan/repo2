// dodac przycisk ktory zmienia wartosc, jak sie zmieni odpowiedni to wyswietlic confirm

//var handler = null

var value = 0


function buttons() {
    // let buttonStart = document.createElement("button")
    // buttonStart.setAttribute("id", "buttonStart")
    // buttonStart.innerText = "Start"
    let root = document.getElementById("root")
    // root.appendChild(buttonStart)
    // let startCheck = document.getElementById("buttonStart")
    // startCheck.addEventListener("click", () => check())

    let buttonAdd = document.createElement("button")
    buttonAdd.setAttribute("id", "buttonAdd")
    buttonAdd.innerText="Add"
    root.appendChild(buttonAdd)
    let addButton = document.getElementById("buttonAdd")
    addButton.addEventListener("click", ()=>add())
}

// function confirmBox() {
//     let checkText = document.getElementById("ele1").innerText
//     let confirmBox = confirm(checkText)
//     if (confirmBox) { console.log("ok") } else {
//         console.log("cancel")
//         clearInterval(handler)
//     }
// }

function add() {
    let ele1 = document.getElementById("ele1")
    value += 1
    ele1.innerHTML = value
    checkElement()
    
}

function checkElement(){
    let ele1 = document.getElementById("ele1")
    let checkValue = parseInt(ele1.innerText)
    let mod = checkValue%2
    let div = document.createElement("div")
    div.setAttribute("class", "alert")
    div.innerText = checkValue + " is even."

    if (checkValue > 0 && mod==0){
        //alert("even")
        ele1.appendChild(div)
    } else {
        if (ele1.childNodes>0){
            ele1.removeChild(div)
        }
    }
}

function init(){
    let ele1 = document.getElementById("ele1")
    ele1.innerHTML = value
}

function main() {
    init()
    buttons()
    
}

window.addEventListener("load", main)