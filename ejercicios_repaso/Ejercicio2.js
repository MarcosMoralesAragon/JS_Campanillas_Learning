var prompt = require('prompt-sync')()

var high = prompt("Introduce un numero: ");

var lineasImpresas = 0;
var highInicial = high;
while(high > 1){
    var espaciosMarguen = high - 1;
    var cadena = ""
    for ( i = 0; espaciosMarguen > i; i++){
        cadena = cadena + " ";
    }
    cadena = cadena + "*"
    for( y = 0; lineasImpresas > y; y++){
        cadena = cadena + " ";
    }
    if ( lineasImpresas != 0){
        cadena = cadena + "*"
    }
    if ( lineasImpresas >= 1){
        lineasImpresas++;
    }
    high--;
    console.log(cadena)
    lineasImpresas ++;
}
var cadena = ""
for ( z = 1; highInicial*2 > z ; z++){
    cadena = cadena + "*"
}
console.log(cadena)