class Human
{

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  introduceYourself() {

    alert(`First name: ${this.firstName}, last name: ${this.lastName}.`);
  }
}

class Employee extends Human
{
    constructor(firstName, lastName, position)
    {
        super(firstName, lastName);
        this.position = position;
    }

    introduceYourself()
    {
        super.introduceYourself();
        alert(`Position: ${this.position}.`);
    }
}

class Data
{
    constructor(dataArr, listBox)
    {
        this._dataArr = dataArr;
        this._listBox = listBox;
    }

    populateListBox()
    {
        var data = this._dataArr;
        var listBox = this._listBox;

        for (i=0; i<data.length; i++)
            {
                var elText = data[i].text;
                var elDesc = data[i].description;

                var listOption = document.createElement("option");
                listOption.textContent = elText;
                listOption.nodeValue = i;
                listOption.dataset.dataIndex = i;

                listBox.appendChild(listOption);
            }
    }

    clickHandlerBase(descDiv)
    {
        var select = this._listBox;
        var data = this._dataArr;

        var idx = select.selectedIndex;
        var option = select.options[idx];

        var i = parseInt(option.dataset.dataIndex);

        var elDesc = data[i].description;
        descDiv.textContent = elDesc;
    }

    getHandler(descDiv)
    {
        return () => this.clickHandlerBase();

    }


}