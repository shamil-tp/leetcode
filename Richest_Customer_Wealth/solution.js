
var maximumWealth = function(ac) {
    let max = 0
    for(let i=0;i<ac.length;i++){
        let sum = 0
        for(let k = 0;k<ac[i].length;k++){
             sum += ac[i][k]
        }
        max = max<sum?sum:max
    }
    return max
};

let ar = [[1,5],[7,3],[3,5]]

maximumWealth(ar)


// use Math.max and array push
/**
//  * @param {number[][]} accounts
//  * @return {number}
//  */
// var maximumWealth = function(accounts) {

//     // solution 1
// let highest =  []

//     for(let i = 0; i < accounts.length; i++) {
//         let sum = 0
//         for (let j = 0; j < accounts[i].length; j++) {
//             sum += accounts[i][j]
            
//         }

//         highest.push(sum)
//     }

//     return Math.max(...highest)
// };