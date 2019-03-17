
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

let x = [1,1,1,2,4,6,9,1,4,6,0,0,7,4];

let check = numCheck(x);
let check2 = numCheckObj(x);
let check3 = numCheckObj2(x);
console.log(check);
console.log(check2);
console.log(check3);
