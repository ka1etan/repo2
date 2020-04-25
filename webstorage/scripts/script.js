var clickCounters = 10
localStorage.removeItem("counter")

function storageCheck() {
    if (typeof (Storage) !== undefined) {
        //clickCounts += 1
        if (localStorage.counter) {

        } else { localStorage.counter = clickCounters }

        console.log(localStorage.counter)
        document.getElementById("localStorage").innerHTML = localStorage.counter

    } else {
        alert("Your browser doesnt support local storage feature")
    }
}

function clickStorage() {

    localStorage.counter = Number(localStorage.counter) + 1
    storageCheck()
}

function buttonClick() {
    let buttonClick = document.getElementById("buttonClick")
    buttonClick.addEventListener("click", () => clickStorage())
}

function main() {
    //alert("test")
    storageCheck()
    buttonClick()
}

window.addEventListener("load", main)