

function generateValue(){

    let value = Math.floor(Math.random() * 200)
    //console.log(value)
    return value
}

function draw(){

    let mainDiv = document.getElementById("main")

    if(mainDiv.firstChild){
        mainDiv.removeChild(document.getElementById("eq"))
    }

    let rect = document.createElement("canvas")
    rect.setAttribute("id", "eq")
    rect.setAttribute("width", "200")
    rect.setAttribute("height", "200")
    let context = rect.getContext("2d");
    var grd = context.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "#aaff80");
    grd.addColorStop(1, "red");
    context.fillStyle = grd;
    context.fillRect(10, 10, 0, 20)
    context.fillRect(10, 10, generateValue(), 20)
    mainDiv.appendChild(rect)

}

function animate(){

    setInterval(()=>draw(),5000)

}

function main(){

    //draw()
    //generateValue()
    animate()

}

window.addEventListener("load", main)