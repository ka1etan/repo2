function dedupExcercise(a)
{
    let prev, nextToWrite = 0;

    for (let nextToRead = 0; nextToRead < a.length; nextToRead++)
    {
        let curr = a[nextToRead];

        if (curr != prev)
        {
            a[nextToWrite] = curr;
            nextToWrite++
        }

        prev = curr;
    }

    let length = a.length;

    for (; nextToWrite < length; nextToWrite++)
    {
        a.pop();
    }

    return a;
}

function check()
{
    let a = [1,1,2,2,3];
    let b = [1,2,2,3,3,3,4];
    let c = [2,3,4,4,5,6,6,6];
    
    console.log(dedupExcercise(a));
    console.log(dedupExcercise(b));
    console.log(dedupExcercise(c));
}

check();