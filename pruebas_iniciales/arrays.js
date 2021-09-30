let mix = [5, 10, 24, 32, -77, -88, 11];
console.log(mix);
console.log(prime(2));

// for(let i = 0; i < mix.length; i++){
//     console.log(mix[i]);
// }

// Muestra cada valor del array junto su posición y el resto del array 
mix.forEach(console.log);
// Muestra cada valor del array
mix.forEach(element => console.log(element));
// Solo encuentra la primera ocurrencia que cumpla la condición
let n = mix.find ( n => n < 0);
console.log(n);
// Saca un array con todas las ocurrencias que cumplan las condición
let n2 = mix.filter ( n => n < 0);
console.log(n2);


// CASO PRACTICO

let adult = age => age >= 18;

let adultAge = mix.find(adult);
console.log(adultAge);
let adultAge2 = mix.filter(adult);
console.log(adultAge2);
console.log();