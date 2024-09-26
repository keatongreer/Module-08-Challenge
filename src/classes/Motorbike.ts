// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// xTODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // xTODO: Declare properties of the Motorbike class
  // xTODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // xTODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // xTODO: Create a constructor that accepts the properties of the Motorbike class
  // xTODO: The constructor should call the constructor of the parent class, Vehicle
  // xTODO: The constructor should initialize the properties of the Motorbike class
  // xTODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // Check if the wheels array has 2 elements
    // If not, create 2 new Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // xTODO: Implement the wheelie method
  // xTODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // xTODO: Override the printDetails method from the Vehicle class
  // xTODO: The method should call the printDetails method of the parent class
  // xTODO: The method should log the details of the Motorbike
  // xTODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
  override printDetails(): void {
    super.printDetails();
    console.log(`${this.color} ${this.year} ${this.make} ${this.model}\nTop Speed: ${this.topSpeed}\nWeight: ${this.weight}\nVIN: ${this.vin}\nWheels: ${this.wheels}`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
