class Vehicle {
    static totalKm = 0;
    constructor(){
        this.km = 0;
    }
    run(kmGived){
        this.km += kmGived;
        Vehicle.totalKm += kmGived;
    }
    getKm(){
        return this.km;
    }
    static getTotalKm(){
        return Vehicle.totalKm;
    }
}

class Car extends Vehicle{
    burnWheel(){
        console.log("Brummmm")
    }
}

class Bicycle extends Vehicle{
    doTheWheelTrick(){
        console.log("Nice trick")
    }
}

car1 = new Car();
bicycle1 = new Bicycle();

car1.burnWheel();
bicycle1.doTheWheelTrick();

car1.run(500);
bicycle1.run(40);

console.log("Car odometer: " + car1.getKm());
console.log("Bicycle odometer: " + bicycle1.getKm());
console.log("Total km: " + Vehicle.getTotalKm());
