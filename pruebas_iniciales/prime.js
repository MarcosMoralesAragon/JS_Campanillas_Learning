// EJERCICIO PRIMOS
var prompt = require('prompt-sync')();
let n = prompt("Enter a number: ")
console.log(prime(n))

function prime(n){
    var primo = true
    if((n == 2) || (n == 1)){
        return true;
    } else {
        for(i = 2; i < n; i++){
            if( n%i == 0){
                return false;
            }
        }
        return true;
    }
}