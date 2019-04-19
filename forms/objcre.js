function objcre(o,a,b) {
    return o[a] = b,o;
}

let name = "xxx";
let b=0;
let object = {};
let count = name + " count";







b++;
x = objcre(object,count,b); 
console.log(object);

for (i = 0; i<4; i++)
{
    x = objcre(object,count,i);   
}
console.log(object);



