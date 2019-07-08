
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


 let x = [1,2,3,4,5,0];
 let y = [1,2,3,3,3,4,5,0];
  
 //console.log(shiftArray(y));
 console.log(shiftArrayButSkip(y, 3));
