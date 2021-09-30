let a = [44, 11, 23, null, undefined, 8, 9];

console.log(a.map(e => ((typeof e) === 'number' && (e > 20))))
console.log(a.filter(e => ((typeof e) === 'number' && (e > 20))))

let fruit =[
    {name : "mango", price : 4.5 },
    {name : "kiwi", price : 7 },
    {name : "apple", price : 1.5},
];

console.log(fruit.filter( e => e.price > 2).map(f => f.name))