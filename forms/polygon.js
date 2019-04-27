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