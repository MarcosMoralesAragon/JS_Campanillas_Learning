let figurasTragaperras = [ "  ❤️  "," 💎 "," ⚓ "," 🔔 "," 🍋 ",
]
let numerosAleatorios = []
var tirada = "";
var vecesQueSeRepiten = 0;

for ( i = 0; i < 3; i++){
    var numeroAleatorio = (parseInt(Math.random()*5))
    tirada += figurasTragaperras[numeroAleatorio]
    numerosAleatorios.push(numeroAleatorio)
}
console.log(tirada)
if(numerosAleatorios[0] == numerosAleatorios[1]){
    vecesQueSeRepiten++;
}
if(numerosAleatorios[0] == numerosAleatorios[2]){
    vecesQueSeRepiten++;
}
if(numerosAleatorios[1] == numerosAleatorios[2]){
    vecesQueSeRepiten++;
}

//RESULTADOS
if(vecesQueSeRepiten == 0){
    console.log("Lo siento ha perdido :(")
} else if (vecesQueSeRepiten == 1){
    console.log("Bien, ha recuperado su moneda")
} else {
    console.log("!Enhorabuena¡ Ha ganado 10 monedas :)")
}