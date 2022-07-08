class Shelter {
  constructor() {
    this.adoptions = {};
  }

  adopt(owner, pet) {
    if (this.adoptions.hasOwnProperty(owner.name)) {
      this.adoptions[owner.name].push(pet);
      owner.addPetCount();
    } else {
      this.adoptions[owner.name] = [pet];
      owner.addPetCount();
    }
  }

  printAdoptions() {
    for (let owners in this.adoptions) {
      console.log(`${owners} has adopted the following pets:`);
      this.adoptions[owners].forEach(pet => {
        console.log(`a ${pet.type} named ${pet.name}`);
      });
      console.log('');
    }
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = 0;
  }

  addPetCount() {
    this.pets += 1;
  }

  numberOfPets() {
    return this.pets;
  }
}

class Pet {
  constructor(type, name) {
    this.name = name;
    this.type = type;
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

/*
P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
*/