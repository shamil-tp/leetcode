const array = [1, 2, 3, 4];

const sumWithInitial = array.reduce(f,0);
function f(a,c,i){
    console.log(c,i);
    return a+c
}
console.log(sumWithInitial);