var a = 4.0;
var b = a.toFixed(1);


console.log((a+a).toFixed(1));

let meal_cost;
let tip_percent;
let tax_percent;
let tip;
    let tax;
    let totalCost;
    
meal_cost = 0.20;
tip_percent = 90;
tax_percent = 80;

    tip = meal_cost * (tip_percent / 100);
    tax = meal_cost * (tax_percent / 100);
    totalCost = (meal_cost + tip + tax);

    console.log(totalCost.toFixed(0));