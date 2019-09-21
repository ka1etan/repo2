var users2 = {name: "ka1etan", password: "zzz"}
var users = {
    "ka1etan": "x2{bse", 
    "k1x": "q5ttxpse", 
    "flush": "esjgu", 
    "xan3": "qpjou",
    "luke": "bcd"
    }

var rest = document.createElement('table')

function createTable(data)
{
    //alert('zzz')
    let table = document.createElement('table')
    // let thead = document.createElement('thead')
    // let tbody = document.createElement('tbody')
    // let row = table.insertRow(0)
    // row.innerHTML = "name"
    // let row = table.insertRow(1)
    // row.innerHTML = "pass"
    // let cell = row.insertCell(0)
    // cell.innerHTML = 111;
    // cell = row.insertCell(1)
    // cell.innerHTML = 222
    // document.getElementById('result').appendChild(table)
    //let thead = table.createTHead()
    
   //let row = thead.insertRow()
   //let th = document.createElement("th")
   // let row2 = thead2.insertRow()
    //let th2 = document.createElement("th")
    //th.innerHTML = "name"
   // th2.innerHTML = "pass"
    //th.appendChild("name")
   // row.appendChild(th)
   // row2.appendChild(th2)
   // row.innerHTML = "name"
    //let row2 = thead.insertRow(1)
    //row2.innerHTML = "pass"

    

    for (let props in data)
    {
        //let th = document.createElement("th")
        let key = document.createTextNode(props)
        let value = document.createTextNode(data[props])

        //let tr = document.createElement("tr")
        let row = table.insertRow()
        let cell = row.insertCell()
        cell.appendChild(key)
        let cell2 = row.insertCell()
        cell2.appendChild(value)
        
        // let row2 = table.insertRow()
        // let cell2 = row2.insertCell()
        // cell2.appendChild(value)
        
        //row.appendChild(cell)
        
        //row2.appendChild(value)
        // th.appendChild(header)
        

        //cell.appendChild(value)

        //row2.appendChild(td)
        
    }
    document.getElementById('result').appendChild(table)
}

// function generateTable(table, data)
// {
//     for ()
// }

function main()
{
    createTable(users)
}

window.addEventListener("load", main);