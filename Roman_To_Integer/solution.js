var romanToInt = function(s) {
    let romans = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}

    let num = s.toUpperCase().split('').map((e,i)=>{
        return romans[e]
    })
        let result = 0
        for(let i = 0;i<num.length;i++){
            if(num[i]>=num[i+1] || i == num.length -1){ // math.max
                result+=num[i]
            }else if(num[i]<num[i+1]){

                result= result + (num[i+1]-num[i])
                i++;
            }
            console.log(result)
        }
    return result
};


console.log(romanToInt("III"))