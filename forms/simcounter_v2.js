
function numCheck(x) {
let y = [0,1,2,3,4,5,6,7,8,9];
let z = [0,0,0,0,0,0,0,0,0,0];
let a = x.length;
let b = y.length;
for (i=0;i<a;i++){
  
   if (0 <= x[i] && x[i] < z.length) {
          z[x[i]]+=1;
   }
}
return z;
}

let x = [1,1,1,2,4,6,9,1,6,0,0];
let check = numCheck(x);
console.log(check);