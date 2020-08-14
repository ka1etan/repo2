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

function createLines(){
    let crossfire = document.getElementById("crossfire")
    let horizontal = document.createElement("div")
    horizontal.setAttribute("id", "horizontal")
    horizontal.style.borderBottom = "4px dashed green"
    //horizontal.style.zIndex = "-1"
   // horizontal.style.marginTop = "50%"
    
    crossfire.appendChild(horizontal)

    let vertical = document.createElement("div")
    vertical.setAttribute("id", "vertical")
    vertical.style.borderLeft = "4px dashed green"
    //vertical.style.borderRight = "4px dashed green"
    //vertical.style.width = "50px"
    vertical.style.height = "100%"
    vertical.style.marginLeft = "0"
    //vertical.style.zIndex = "-1"

    //vertical.style.marginTop = "-51%"

    crossfire.appendChild(vertical)

    // let third = document.createElement("div")
    // third.setAttribute("id", "third")
    // third.style.borderRight = "4px dashed green"
    // third.style.height = "100%"
    // third.style.marginLeft = "99%"
    // third.style.marginTop = "-99%"

    // crossfire.appendChild(third)
}

function drawLines(event){

    //alert("triggered")

    var x = event.offsetX;
    var y = event.offsetY;

    //var x = event.clientX;
   // var y = event.clientY;

    let horizontal = document.getElementById("horizontal")
    let vertical = document.getElementById("vertical")
    //let third = document.getElementById("third")
    let top = y 
    let left = x

    horizontal.style.marginTop = top
    vertical.style.marginLeft = left
    vertical.style.marginTop = -top
    //third.style.marginLeft = left
    // let block = document.getElementById("block")
    // block.innerHTML=`x:${x}, y:${y}`
}

function move(){
    let crossfire = document.getElementById("block")
    crossfire.addEventListener("mousemove", ()=>drawLines(event))

}

function main()
{
    initCss()
    buttons()
    hoverElement()

    createLines()
    move()
}

window.addEventListener("load", main)