/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function(nums) {
//     let ar = nums
//     let result = []
//     for(let i = 0;i<ar.length;i++){
//         let sum = 0
//         for(let j = 0;j<=i;j++){
//             sum += ar[j]
//         }
//         result.push(sum)
//     }
//     return result
    
// };


// let arr = [1,2,3,4]

// console.log(runningSum(arr))
// var runningSum = function(nums) {
//     let ar = nums
//     let result = ar.map((e,i)=>{
//         let s = 0
//         for(let k = 0;k<=i;k++){
//             s += ar[k]
//         }
//         return s
//     })
    
//     return result
    
// };


// let arr = [1,2,3,4]

// console.log(runningSum(arr))
// var runningSum = function(nums) {
//     let ar = nums
//     // let result = []
//     let s = 0
//     for(let i = 0;i<ar.length;i++){
//         s += ar.shift()
//         ar.push(s)
//     }
//     return ar
// };


// let arr = [1,2,3,4]

// console.log(runningSum(arr))
var runningSum = function(nums) {
    let s = 0
    for(let i = 0;i<nums.length;i++){
        s += nums.shift()
        nums.push(s)
    }
    return nums
};


let arr = [1,2,3,4]

console.log(runningSum(arr))