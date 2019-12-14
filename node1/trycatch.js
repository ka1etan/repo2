function convert(a)
{
    
    try {
        
        let b = parseInt(a)
        if(isNaN(b))
        {
            throw new Error("bad string")
            
        } else {console.log(b)}

        
    } 
    catch (error) {
        console.log(error.message)
    }
}

function main()
{
    let x = "zz"
    convert(x)
}

main()