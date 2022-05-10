function createCar(make, fuelLevel, engineOn) {
  let car = {
  make: make,
  fuelLevel: fuelLevel,
  engineOn: engineOn,

  startEngine() {
    this.engineOn = true;
  },

  drive() {
    this.fuelLevel -= 0.1;
  },

  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((this.fuelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  },
  }
  return car;
}

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.drive();

let raceCar2 = createCar('Ferrari', 0.7, true);

let raceCar3 = createCar('Jaguar', 0.4, false);
console.log(raceCar3);