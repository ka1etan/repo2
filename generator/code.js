
function loadMap() {
    prepareMap();
    var data = {};
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var o = JSON.parse(this.responseText);
            data = o;

            //var o2 = JSON.parse(this.responseText);
            //data = o2;

            // document.getElementById("item0").innerHTML = o.description;

            var descDiv = document.getElementById("item1");
            var descDiv2 = document.getElementById("item2");

            var listDiv = document.getElementById("l1");
            var listDiv2 = document.getElementById("l2");

            var listSelect = document.createElement("select");
            listDiv.appendChild(listSelect);

            var listSelect2 = document.createElement("select");
            listDiv2.appendChild(listSelect2);

            var clickHandler = function () {
                var select = event.target;
                var idx = select.selectedIndex;
                var option = select.options[idx];

                var i = parseInt(option.dataset.dataIndex);

                var elDesc = data.maps[i].description;
                descDiv.textContent = elDesc;

            }

            var clickHandler2 = function () {
                var select2 = event.target;
                var idx2 = select2.selectedIndex;
                var option2 = select2.options[idx2];

                var j = parseInt(option2.dataset.dataIndex);

                var elDesc2 = data.bots[j].description;
                descDiv2.textContent = elDesc2;
            }

            for (i = 0; i < o.maps.length; i++) {
                var elText = o.maps[i].text;
                var elDesc = o.maps[i].description;

                var listOption = document.createElement("option");
                listOption.textContent = elText;
                listOption.nodeValue = i;
                listOption.dataset.dataIndex = i;

                listSelect.appendChild(listOption);
            }

            for (j = 0; j < o.bots.length; j++) {
                var elText2 = o.bots[j].text;
                var elDesc2 = o.bots[j].description;

                var listOption2 = document.createElement("option");
                listOption2.textContent = elText2;
                listOption2.nodeValue = j;
                listOption2.dataset.dataIndex = j;

                listSelect2.appendChild(listOption2);
            }

            listSelect.addEventListener("change", clickHandler, false);
            listSelect2.addEventListener("change", clickHandler2, false);

        }
    };
    xhttp.open("GET", "varia.json", true);
    xhttp.send();
}

window.addEventListener("load", loadMap);
//loadMap();
//document.addEventListener("load", loadMap);
