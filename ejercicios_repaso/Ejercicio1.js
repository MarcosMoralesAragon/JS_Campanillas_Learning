var prompt = require('prompt-sync')()

var high = prompt("Introduce un numero: ");

for( i = 1; i <= high; i++){

    var high2 = high;
    var high3 = high;
    var cadena = "";

    while(high2 > 0){
        if(high2 > i){
            cadena = cadena + " "
            high2--;
        } else{
            if (i == 1){
                cadena = cadena + 1;
            } else {
                cadena = cadena + cadenaNumerosImprimir(i)
            }
            break;
        }
    }
    console.log(cadena)
    --high3; 
}

function cadenaNumerosImprimir(i) {
    var cantidadDeRestas = 0;
    var cadena = "";
    var i2 = i;

    while ( i > 1){
        cadena = cadena + (i2 - (i - 1))
        cantidadDeRestas++;
        i--;
    }
    while(cantidadDeRestas != 0){
        cadena = cadena + (i2 - (i - 1));
        cantidadDeRestas--;
        i++;
    }
    cadena = cadena + 1;
    return cadena
}
//   1
//  121
// 12321
//1234321