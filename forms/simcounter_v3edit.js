
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
            let obj2 = { name: x[i], count: z[x[i]] };
            object[name] = obj2;
        }

    }

    return object;

}

function numCheckObj3(x) {

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
       {name: "9", count: 0}];
    //let z = [];
    let a = x.length;
   // let object = {};
    //let obj2 = {count: 0};
    //let obj3 = {};
    //let obj4 = {};
   // let cont = {objs: {name: []}};
    

    for (let i = 0; i < x.length; i++) {
        let name = x[i];
        let check = 0;
       // obj3[name] = obj2;
       // obj2.count = object;
        if (0 <= x[i] && x[i] < counters.length) {
           //obj3[name] += obj2.count;
          // obj4 = obj2;
           obj3[name] += obj2;
           
           
           //cont.objs.name = obj4[name];
           //object = obj3[name].count;
          // obj4[object] += 1;
           counters[x[i]] += 1;
             // obj2[name].count += 1;
           // let obj2 = { name: x[i], count: z[x[i]] };
              
              //object[name].count += 1;
              //object[name] = obj3;
        }
       
    }

    return obj3;

}

let x = [1,1,1,2,4,6,9,1,4,6,0,0,7,4];

let check = numCheck(x);
let check2 = numCheckObj(x);
let check3 = numCheckObj2(x);
let check4 = numCheckObj3(x);
console.log(check);
console.log(check2);
console.log(check3);
console.log(check4);
