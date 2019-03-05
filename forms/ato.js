var obj = {};
var arr = ["a", 22, "b", "zxzxz", "c", 3];
var larr = arr.length;
var arr2 = [];
var arr3 = [];

for (i=0; i<larr;i=i+2)
{
arr2.push(arr[i]);

 
}
for (j=1; j<larr;j=j+2)
{
arr3.push(arr[j]);
}

for (k=0; k<arr2.length; k++)
{
let x = arr2[k];
obj[x] =  arr3[k];
}

console.log(arr2); // ["a", "b", "c"]
console.log(arr3); // [22, "zxzxz", 3]
console.log(obj);