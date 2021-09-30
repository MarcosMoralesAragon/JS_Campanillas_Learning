let x = 7;
console.log(inc5(x));
// console.log(sum(20,30));
// console.log(inc2(2));

// ES 5
function inc5(n){
    return n + 5;
}
// ES 6
let sum = (x,y) => x + y;
let inc2 = x => x + 2;
let longFuction = (x,y,z) => {
    let n = x + y;
    console.log('Va bien');
    return n + z;
} 

console.log(sum(20,30));
console.log(inc2(2));
console.log(longFuction(2,4,5));