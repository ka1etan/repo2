
// 'a' is an array of N+1 elements (so a.length == N+1).

// The function "shifts" first N elements of the array one place to the right.

// For example [1,2,3,4,5,0] becomes [1,1,2,3,4,5]

function shiftArray(a)
 {
    let tmp = a[0];

    for (let  j = 1;  j < a.length;  j++)
    {
        a[a.length-1] = a[j]
        a[j] = tmp;
        tmp = a[a.length-1];
    }

    return a;
 }





// Like above - but 'a' is an array of numbers and e is a number.

// Shift all the elements of 'a' one place to the right except elements equal to e, which are skipped (disregarded).

// For example shiftArrayButSkip([1,2,2,3,4,5,0],2) returns [1,1,3,4,5])

function shiftArrayButSkip(a, e) 
{
    let tmp = a[0];

    for (let  i=0, j = 1;  j < a.length && i < a.length;  j++, i++)
    {
       
            if (a[j]==e)
            {
                
                tmp = a[a.length-1];
                a[j] = a[i];
                
                //a.pop();

            }
            else
            {
                a[a.length-1] = a[j]
                a[j] = tmp;
                tmp = a[a.length-1];
            }

          
        
    }

    return a;
}

////// LR - begin
function shiftArray2(a)
 {
     let previous = a[0]; 

     for (let i = 1; i < a.length; i++)
     {
         let temp = a[i]
         a[i] = previous;
         previous = temp;
     }

     return a
 }

 function shiftArray3(a)
 {
     for (let nextToRead = a.length-2, nextToWrite = a.length-1; nextToRead >= 0; nextToRead--)
     {
         a[nextToWrite] = a[nextToRead];
         nextToWrite -= 1; 
     }

     return a
 }

 function shiftArray4(a)
 {
     let currVal = a[0], nextVal;

     for (let nextToRead = 0, nextToWrite = 1; nextToRead < a.length-1; nextToRead++)
     {
         nextVal = a[nextToRead+1]

         a[nextToWrite] = currVal
         nextToWrite++

         currVal = nextVal
     }

     return a
 }

 function shiftArrayButSkip2(a,e )
 {
     let currVal = a[0], nextVal;
     let nextToWrite = 1;

     for (let nextToRead = 0; nextToRead < a.length-1; nextToRead++)
     {
         nextVal = a[nextToRead+1]

         if (currVal != e)
         {
            a[nextToWrite] = currVal
            nextToWrite++
         }

         currVal = nextVal
     }

     let length = a.length; // important to store for referencing in the loop condition
     // () because a.pop() will alter a.length )
     for (; nextToWrite < length; nextToWrite++)
     {
        a.pop()
     }

     return a
 }
 /////// LR - end

 let x = [1,2,3,4,5,0];
 let y = [1,2,3,3,3,4,5,0];
 let z = [1,3]
  
//console.log(shiftArray4(x));

console.log(shiftArrayButSkip2(y, 3));
console.log(shiftArrayButSkip2(z, 3));

/*
    read buff write
*/
