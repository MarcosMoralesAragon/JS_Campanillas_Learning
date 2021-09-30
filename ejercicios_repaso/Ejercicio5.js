function Car(km){
    this.km = km;

    function burnWheel() {
        console.log("BRUUUUUUMMMMMM")
    }

    function run(kmGived) {
        this.km = kmGived;
    }
    function getKm() {
        return this.km;
    }
    return Object;
}
function Bicycle(km){
    this.km = km;

    function doTheWheelTrick() {
        console.log("Im the best with the bike")
    }

    function run(kmGived) {
        this.km = kmGived;
    }
    function getKm() {
        return this.km;
    }
}
car1 = new Car();
bicycle1 = new Bicycle();

car1.burnWheel();
bicycle1.doTheWheelTrick();

car1.run(500);
bicycle11.run(40);

console.log("Car odometer: " + car1.getKm());
console.log("Bicycle odometer: " + bicycle1.getKm());
