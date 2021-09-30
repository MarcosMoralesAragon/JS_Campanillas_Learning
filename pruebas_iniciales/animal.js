class Animal {
    constructor(peso, sexo, esFeliz){
        this.peso = peso;
        this.sexo = sexo;
        this.esFeliz = esFeliz;
    }
}
let animalillo = new Animal(5, 'Betis', false)
console.log(animalillo.sexo);
