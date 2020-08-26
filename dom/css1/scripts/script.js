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

var obj = null

function canvasLines(){
    let crossfire = document.getElementById("crossfire2")
    //let canvas = document.createElement("canvas")
    //let canvas2 = document.createElement("canvas2")
    //canvas.setAttribute("id", "canvas1")
    //canvas2.setAttribute("id", "canvasArea")
    //horizontal.setAttribute("width", "80")
    
    //canvas.setAttribute("height", "300")
    //canvas2.setAttribute("height", "300")
    //canvas2.setAttribute("width", "300")

    var rect = crossfire.getContext('2d')
    rect.fillStyle = "#eb4034";
    rect.fillRect(10, 10, 50, 50)
    obj = rect

    //crossfire.appendChild(canvas)
    //crossfire.appendChild(canvas2)
}

function render(object){
    //let crossfire = document.getElementById("crossfire2") 
    let area = object
}

function drawLines2(event){

    //alert("triggered")

    var x = event.offsetX;
    var y = event.offsetY;

    let canvasSize = 300

    let crossfire = document.getElementById("crossfire2")
    //let canvas = document.createElement("canvas")
    // canvas.setAttribute("width", canvasSize)
    // canvas.setAttribute("height", 2)
    var lines = crossfire.getContext('2d')
    //console.log(lineY)
    lines.clearRect(0,0,canvasSize,canvasSize)
    //render(obj)
    canvasLines()
    lines.restore()
    lines.fillStyle = "blue";
    lines.fillRect(0, y, canvasSize, 2)
    //lines.clearRect(0,y-5,50,50)
    lines.fillRect(x, 0, 2, canvasSize)
    //crossfire.appendChild(canvas)
    
}

function canvasLines2(){
    
    let canvas = document.getElementById("canvas3a")

    var rect = canvas.getContext('2d')
    rect.fillStyle = "#eb4034";
    rect.fillRect(10, 10, 50, 50)
   
}

function drawLines3(event){

    //alert("triggered")

    var x = event.offsetX;
    var y = event.offsetY;

    let canvasSize = 300

    let canvas = document.getElementById("canvas3b")
   
    var lines = canvas.getContext('2d')
    lines.clearRect(0,0,canvasSize,canvasSize)
    //render(obj)
    lines.fillStyle = "blue";
    lines.fillRect(0, y, canvasSize, 2)
    //lines.clearRect(0,y-5,50,50)
    lines.fillRect(x, 0, 2, canvasSize)
    //crossfire.appendChild(canvas)
    
}

function move(){
    let crossfire = document.getElementById("block")
    crossfire.addEventListener("mousemove", ()=>drawLines(event))

}

function move2(){
    let crossfire = document.getElementById("crossfire2")
    crossfire.addEventListener("mousemove", ()=>drawLines2(event))

}

function move3(){
    let viewport = document.getElementById("canvas3b")
    viewport.addEventListener("mousemove", ()=>drawLines3(event))

}

function main()
{
    initCss()
    buttons()
    hoverElement()

    createLines()
    canvasLines()
    canvasLines2()
    move()
    move2()
    move3()
}

window.addEventListener("load", main)