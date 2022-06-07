class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Car extends Vehicle {}

class Truck extends Vehicle {}

let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015