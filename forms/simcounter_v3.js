
function numCheck(x) {

    let z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let a = x.length;
    for (i = 0; i < a; i++) {
        if (0 <= x[i] && x[i] < z.length) {
            z[x[i]] += 1;

        }
    }
    return z;

}

function numCheckObj(x) {

    let z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let a = x.length;
    let obj = {};
    for (i = 0; i < a; i++) {
        let name = x[i];
        if (0 <= x[i] && x[i] < z.length) {
            z[x[i]] += 1;
            obj[name] = z[x[i]];
        }

    }
    return obj;

}

/*

array: index (number) -> value  (number, object, string)

array[index]
0..2, 10 -> 0..10, 10005 -> 0..10005
10005
0..10005


associative array:  key (anything) -> value (anything)
//key => number => hash_map

assoc_array[key]
0..2, 10 -> 0,1,2,10 , 10005 -> 0,1,2,10005

a. array of objects (not counters)
b. linear search by key
c. associative array 


*/

function numCheckObj2(x) {

    let z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //let z = [];
    let a = x.length;
    let object = {};

    for (i = 0; i < a; i++) {
        let name = x[i];
        
        if (0 <= x[i] && x[i] < z.length) {
            
            z[x[i]] += 1;
            let obj2 = { nname: x[i], count: z[x[i]] };
            object[name] = obj2;
        }

    }

    return object;
}

function numCheckObj3(x) {


    //let z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //let z = [];
    let counters = [ 
        {name: "0", count: 0}, 
        {name: "1", count: 0}, 
        {name: "2", count: 0}, 
        {name: "3", count: 0}, 
        {name: "4", count: 0}, 
        {name: "5", count: 0}, 
        {name: "6", count: 0}, 
        {name: "7", count: 0}, 
        {name: "8", count: 0}, 
        {name: "9", count: 0}, 
    ];


    for (let i = 0; i < x.length; i++) 
    {
        
        if (0 <= x[i] && x[i] < counters.length) 
        {
            let o = counters[x[i]];
            o.count += 1;

        }

    }

    return counters;
}

let x = [1,1,1,2,4,6,9,1,4,6,0,0,7,4];

// let check = numCheck(x);
// let check2 = numCheckObj(x);
// let check3 = numCheckObj2(x);
// console.log(check);
// console.log(check2);
// console.log(check3);

console.log( numCheckObj3(x) )