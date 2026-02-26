
var maximumWealth = function(ac) {
    let max = 0
    for(let i=0;i<ac.length;i++){
        let sum = 0
        for(let k = 0;k<ac[i].length;k++){
             sum += ac[i][k]
        }
        max = max<sum?sum:max
    }
    console.log(max)
    return max
};

let ar = [[1,5],[7,3],[3,5]]

maximumWealth(ar)