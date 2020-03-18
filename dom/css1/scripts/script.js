function buttons()
{
    let button = document.getElementById("changeButton")
    button.addEventListener("click", changeStyle)
}

function changeStyle()
{
    let element = document.getElementById("changedText")
    // element.style.fontWeight="bold"
    // element.style.color="#eb4034"
    element.className="bold-red"
}

function hoverElement()
{
    let element = document.querySelector("#changedText")
    element.className="onText"
    // element.addEventListener("mouseover", ()=>{
    //     element.style.color="#eb4034"
    // })
    // element.addEventListener("mouseout", ()=>{
    //     element.style.color="#000000"
    // })
}

function initCss()
{
    let element = document.getElementById("root")
    element.className = "main"
    // let element2 = document.getElementById("root")
    // element2.className = "inline"
}

function main()
{
    initCss()
    buttons()
    hoverElement()
}

window.addEventListener("load", main)