class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    perimeter () {
        let sum = 0;
        for (let i=0; i < this.sides.length; i++){
            sum += this.sides[i];
        }
        return sum;
    }
}
//
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    Area() {
        let a;
        //return this.width * this.height;
        if (this.width > 0 && this.height > 0 )
           a = this.width * this.height;
           return a;
        }
}

class Square extends Rectangle {
    constructor(width){
        super(width, width);
    }
   
}

function perimeter(sides){
    let sum = 0;
    for (let i=0; i < sides.length; i++){
        sum += sides[i];
    }
    return sum;
}


// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());

let rec1 = new Rectangle(4,5);
console.log(rec1.Area());

let squ = new Square(4);
console.log(squ.Area());
