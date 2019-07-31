var x = [ 
    [ 
        [1, 1.1, 1.11] , 
        [10, 11, 12, 13] 
    ], 
    [ 
        [2, 2.1] , 
        [20, 21] 
    ], 
    [
        [3, 3.3, 3.33], 
        [30, 31, 32, 33, 34]
    ] 
];

let y= [];

for (let i=0; i<x.length; i++) {
    let xi = x[i]

    for (let j=0; j<xi.length; j++)
    {
        let xij = x[i][j];
        
        for (let k = 0; k<xij.length; k++)
        {
            y.push(xij[k]);            
        }
        
        //log("(" + i + "," + j + ") -> " + xi[j])

    }
}

console.log(y);