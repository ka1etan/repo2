let toObj = ["sam", "99912222", "tom", "11122222"];
let a = ["sam", "xx", "yy", "harry"];
let x = 0;
let obj = {};

for (let i = 0; i <= 2; i=i+2)
  {
    let name = toObj[i];
     let phone = toObj[i+1];

     obj[name] = phone;

  }
//let name = "sam"

console.log(obj);

// for (let j = 0; j < a.length; j++)
// {
//     let k = 0
//     for (var name in obj)
//     {
//     if (obj[name] == obj[a[j]])
//     {
//     console.log("1");
//     k++
//     break;
//     }

//     else
// {
//     console.log("0");
//     break;
//     }
//     }
// }

for (let j = 0; j < a.length; j++)
{
    
    
    if (obj[a[j]])
    {
    console.log("1");
    
    
    }

    else
{
    console.log("0");
    
    }
    
}


