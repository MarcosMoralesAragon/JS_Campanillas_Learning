let a =["hola", 44, null, undefined];
console.log(a.map);
console.log(a.map(element => element + 's'));

let fruit =[
    {name : "mango", price : 4.5 },
    {name : "kiwi", price : 7 },
    {name : "apple", price : 1.5},
];
console.log(fruit);
let fruitNames = fruit.map( f => f.name)
console.log(fruitNames)