

class Wine  {

  constructor(name, wtype) {
    this.name = name;
    this.wtype = wtype;
  }
}

class Red extends Wine {

  constructor(name, country, prize) {
    super(name);
    this.country = country;
    this.prize = prize;
  }

  displayall2()
  {return "Wine name: " + this.name + ", Country: " + this.country  + ", Prize: " + this.prize;}

}

let wine = new Wine("Pinot Noir", "Red Wine");
alert(wine.name);
alert(wine.wtype);

let red = new Red("Verada", "California", "16 $");
document.write(red.displayall2());
