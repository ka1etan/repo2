var value = 0

function registerServiceWorker() {
    return navigator.serviceWorker.register('sw.js')
        .then(function (registration) {
            console.log('Service worker successfully registered.');
            return registration;
        })
        .catch(function (err) {
            console.error('Unable to register service worker.', err);
        });
}

function getSWRegistration() {
    return navigator.serviceWorker.register('sw.js');
}

function displayNotification(value) {

    let title = 'Checking number'
    let options = {
        body: value + ' is even.'
    };

    return getSWRegistration()

        .then(function (registration) {

            registration.showNotification(title, options)
        })


}

function buttons() {

    let root = document.getElementById("root")
    let buttonAdd = document.createElement("button")
    buttonAdd.setAttribute("id", "buttonAdd")
    buttonAdd.innerText = "Add"
    root.appendChild(buttonAdd)
    let addButton = document.getElementById("buttonAdd")
    addButton.addEventListener("click", () => add())
}



function add() {
    let ele1 = document.getElementById("ele1")
    value += 1
    ele1.innerHTML = value
    checkElement()

}

function checkElement() {
    let ele1 = document.getElementById("ele1")
    let checkValue = parseInt(ele1.innerText)
    let mod = checkValue % 2
    let div = document.createElement("div")
    div.setAttribute("class", "alert")
    div.innerText = checkValue + " is even."

    if (checkValue > 0 && mod == 0) {
        //alert("even")
        // ele1.appendChild(div)
        document.title = checkValue + " is even."
        displayNotification(checkValue)
    } else {
        document.title = "No alerts to display."
        // if (ele1.childNodes>0){
        //     ele1.removeChild(div)

        // }
    }
}


function init() {
    let ele1 = document.getElementById("ele1")
    ele1.innerHTML = value
}

function main() {
    registerServiceWorker()
    init()
    buttons()

}

window.addEventListener("load", main)