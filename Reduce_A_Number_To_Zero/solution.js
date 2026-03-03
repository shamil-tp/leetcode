var numberOfSteps = function(num) {
    let i = 0
    while(num > 0){
        i++
        num = num%2==0?num/2:num-1;        
    }
    return i
};

console.log(numberOfSteps(8))