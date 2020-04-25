var handler = null

function buttons() {
    let buttonStart = document.createElement("button")
    buttonStart.setAttribute("id", "buttonStart")
    buttonStart.innerText = "Start"
    let root = document.getElementById("root")
    root.appendChild(buttonStart)
    let startCheck = document.getElementById("buttonStart")
    startCheck.addEventListener("click", () => check())

    //let buttonStop = document.createElement("button")
    //buttonStop.setAttribute("id", "buttonStop")
    //buttonStop.setAttribute("id", "buttonStop")
    //buttonStop.innerText="Stop"
    //root.appendChild(buttonStop)
    //let stopCheck = document.getElementById("buttonStop")
    //stopCheck.addEventListener("click", ()=>clearInterval(check()))
}

function confirmBox() {
    let checkText = document.getElementById("ele1").innerText
    let confirmBox = confirm(checkText)
    if (confirmBox) { console.log("ok") } else {
        console.log("cancel")
        clearInterval(handler)
    }
}

function check() {
    handler = setInterval(() => confirmBox(), 3000)

}

function main() {
    buttons()
}

window.addEventListener("load", main)