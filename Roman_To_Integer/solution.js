var romanToInt = function(s) {
    let romans = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}

    let num = s.toUpperCase().split('').map((e,i)=>{
        return romans[e]
    })
        let result = 0
        while(num.length > 0){
            result+=num.shift()
        }
    return [num,result]
};


console.log(romanToInt("iv"))