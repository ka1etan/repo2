

class Wine  {

  constructor(name, wtype) {
    this.name = name;
    this.wtype = wtype;
  }

  displayAll()
  {
    return "Name: " + name, ", wine type: " + wtype);
  }
}

class Red extends Wine {

  constructor(name, country, prize) {
    super(name, "Red Wine");
    this.country = country;
    this.prize = prize;
  }

  displayAll()
  {
    //super.displayAll();
    return super.displayAll() + ", Country: " + this.country  + ", Prize: " + this.prize;
  }

}

let wine = new Wine("Pinot Noir", "Red Wine");
alert(wine.name);
alert(wine.wtype);

let red = new Red("Verada", "California", "16 $");
document.write(red.displayAll());
