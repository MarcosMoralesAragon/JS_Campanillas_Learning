console.clear();
let reyes = new Array()
var prompt = require('prompt-sync')()
var cantidadDeReyes = prompt("Cantidad de reyes que desea introducir: ")

for( i = 0; i < cantidadDeReyes; i++){
    var nombreDeReyes = prompt("Introduce el nombre de los reyes: ");
    reyes.push(nombreDeReyes)
}
console.log("Los reyes introducidos son: ")
for(y = 0; y < reyes.length; y++){
    var vecesQueSeRepite = 1;
    for(j = 0; j < y ;j++){
        if(reyes[y] == reyes[j]){
            vecesQueSeRepite++;
        }
    }
    console.log(reyes[y] + " " + (vecesQueSeRepite) + "º")
}