// //this includes the vehicle class as a module
// const VehicleModule = require("./vehicleBaseClass")
// not necessary with HTML
// However this is how to write an import statement
// import {Vehicle} from './vehicle.js';

//this shows how to call from this module...
let v = new Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage, maxPass, maxSpeed, feul, numOfWheels) {
        super(make, model, year, color, mileage);
        this.maxPassengers = maxPass;
        this.maxSpeed = maxSpeed;
        this.fuel = feul;
        this.passenger = 0;
        this.numberOfWheels = numOfWheels;
        this.timeForMaintenance = false;
    }

    loadPassenger(num) {
        let availableRoom = this.maxPassengers - this.passenger
        if (num <= availableRoom) {
            this.passenger += num;
            console.log('Passengers loaded')
        } else {
            console.log('Not enough space');
        }
    }

    // start() {}
    // Not necessary due to inheritance

    scheduleService(mileage) {
        mileage >= 30000 ? this.timeForMaintenance = true : this.timeForMaintenance = false;
    }
}

let merc = new Car("Mecury", "Sedan", "1965", "color", "mileage", 5, 160, 10, 4);
merc.loadPassenger(1);
merc.loadPassenger(1000);
merc.scheduleService(20000);
merc.start();
merc.accelerate();
merc.decelerate();