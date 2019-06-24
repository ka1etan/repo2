let x = "accd";
var reg = /c/g;
let y;
let z = x.replace(reg, " ");
let mat = [];

for (let i = 0; i < x.length; i ++)
{
    if (x[i] == "c" )
    {
      y = x[i].replace("c", " ");
      //z = y.replace("c", " ");
      //x[i] = x[i].replace("c", " ");
      //y = x.replace("c", " ");
      mat.push(y);
     //x[i] = y;
    } else
    {
   y = x[i]
    mat.push(y);
    }
}
console.log(mat);
console.log(z);