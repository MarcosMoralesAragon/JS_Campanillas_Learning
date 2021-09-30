let myNumbers = [44, 66, 88, 100];
console.log(myNumbers.includes(44));

var person = {
    name : "Alan", age: 24, job: {title : "senior programer", salary : 2000}
};

console.log(person)
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(person.job.salary)


let a = [1, 2 , 3]
let b = [0, a, 4]
let c = [0, ...a, 4]
// Maneras de mostrar arrays
console.log(b)
console.log(c)