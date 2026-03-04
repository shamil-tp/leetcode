var middleNode = function(head) {
    let k = head.slice(head.length/2)
    return k
};

console.log(middleNode([1,2,3,4,5,6]))