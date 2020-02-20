function buttons()
{
    let button = document.getElementById("changeButton")
    button.addEventListener("click", changeStyle)
}

function changeStyle()
{
    let element = document.querySelector("#changedText")
    element.style.fontWeight="bold"
    element.style.color="#eb4034"
}

function hoverElement()
{
    let element = document.querySelector("#changedText")
    element.addEventListener("mouseover", ()=>{
        element.style.color="#eb4034"
    })
    element.addEventListener("mouseout", ()=>{
        element.style.color="#000000"
    })
}

function main()
{
    buttons()
    hoverElement()
}

window.addEventListener("load", main)