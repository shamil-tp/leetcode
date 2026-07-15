var intToRoman = function(num) {
    let romans = {1:'I',5:'V',10:'X',50:'L',100:'C',500:'D',1000:'M'}
    let res = []
    let i = 10;
    let arr = [];
    while(num != 0){
        arr.push(parseInt(num%10));
        num = parseInt(num/10)
    }
    arr = arr.map((n,i)=>{
        return parseInt(n * Math.pow(10,i))
    }).reverse()
    for(let i of arr){
        console.log(i)
        let rNum = 0
        for (let k of Object.keys(romans).reverse()){
            if(i > k){
                rNum = k;break;
            }
        }
        console.log('rnum',rNum)
        res.push((romans[rNum])?.toString().repeat(parseInt(i/rNum)))
    }
    console.log(res)
    return arr
};

console.log(intToRoman(376))