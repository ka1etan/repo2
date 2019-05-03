function modifyArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        let d = nums[i] % 2;
        if (d == 0) {
            nums[i] = nums[i] * 2;
        } else {
            nums[i] = nums[i] * 3;
        }

    }
    return nums;

}

function modifyArray2(nums) {

    let nums2 = nums.map(x => x % 2 == 0 ? x * 2 : x * 3);
    return nums2;
}


// function modifyArray2(nums) {
   
//     //let buf2 = [];
//     for (let i = 0; i < nums.length; i++){
//         // let d = nums[i] % 2;
//         // const f = nums[i] => (nums[i] % 2) === 0 ? nums[i] = nums[i] * 2 : nums[i] = nums[i] * 3;
//         // if (d==0) {
           
//         //     nums[i] = nums[i] * 2;
//         // } else {
            
//         //     nums[i] = nums[i] * 3;
//         // }
        
//     }
//     //return buf;
//     return nums;
//     //console.log(buf2);
// }

// function div(z){
//     for (let i = 0; i < z.length; i++){
//         const f = z[i] => (z[i] % 2) === 0 ? "even" : z[i]*3;

//     }
// }


// let nums2 = [1,2,3,4,5];

// const f = x => (x % 2) === 0 ? "even" : "odd";

// console.log(modifyArray(nums));
// console.log("");
// // console.log(modifyArray2(nums2));
// console.log(f(3));
// // console.log(div(3));

let nums = [1,2,3,4,5];

console.log(modifyArray2(nums));
