
function numCheck(x) {
let y = [0,1,2,3,4,5,6,7,8,9];
let z = [0,0,0,0,0,0,0,0,0,0];
let a = x.length;
let b = y.length;
for (i=0;i<a;i++){
    for (j=0; j<b; j++){
        if (x[i]==y[j]){
            let buf = x[i];
            z[buf]+=1;
        }
    }
}
return z;
}

let x = [1,1,5,2,4,6,9,1,6,2];
let check = numCheck(x);
console.log(check);