

function initCss()
{
    let element = document.getElementById("root")
    element.className = "main"
    
}

function editSvg()
{
    let circle = document.querySelector("circle");
    circle.setAttribute("fill", "magenta")
}

function editCanvas()
{
    let canvas = document.getElementById("canvas1");
    let context = canvas.getContext("2d");
    context.fillStyle = "red";
    context.fillRect(10, 10, 50, 50)

    let cx2 = document.getElementById("canvas2").getContext("2d")
    cx2.strokeStyle = "blue"
    cx2.lineWidth = 10
    cx2.strokeRect(5, 5, 50, 50)
    cx2.strokeRect(135, 5, 50, 50)

    let cx3 = document.getElementById("canvas3").getContext("2d");
    cx3.beginPath();
    for (let y = 5; y < 100; y += 5) {
        cx3.moveTo(5, y);
        cx3.lineTo(90, y);
    }
    cx3.strokeStyle = "blue"
    cx3.stroke()

    let cx4 = document.getElementById("canvas4").getContext("2d");
    cx4.beginPath();
    cx4.moveTo(50, 10);
    cx4.lineTo(10, 70);
    cx4.lineTo(90, 70);
    cx4.fill()

    let cx5 = document.getElementById("canvas5").getContext("2d");
    cx5.beginPath();
    cx5.moveTo(10, 90);
    //control=(60,10) goal=(90,90)
    cx5.quadraticCurveTo(60, 10, 90, 90);
    cx5.lineTo(60, 10);
    cx5.closePath();
    cx5.stroke();

    let cx6 = document.getElementById("canvas6").getContext("2d");
    cx6.beginPath();
    cx6.moveTo(10, 90);
    // control1=(10,10) control2=(90,10) goal=(50,90)
    cx6.bezierCurveTo(10, 10, 90, 10, 50, 90);
    cx6.lineTo(90, 10);
    cx6.lineTo(10, 10);
    cx6.closePath();
    cx6.stroke();

    let cx7 = document.getElementById("canvas7").getContext("2d");
    cx7.beginPath();
    // center=(50,50) radius=40 angle=0 to 7
    cx7.arc(50, 50, 20, 0, 9);
    // center=(150,50) radius=40 angle=0 to ½π
    cx7.arc(150, 50, 20, 0, 0.5 * Math.PI);
    cx7.stroke();
    
}

function main()
{
    initCss()
    editSvg()
    editCanvas()
}

window.addEventListener("load", main)