// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// xTODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // xTODO: Declare properties of the Truck class
  // xTODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // xTODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // xTODO: Create a constructor that accepts the properties of the Truck class
  // xTODO: The constructor should call the constructor of the parent class, Vehicle
  // xTODO: The constructor should initialize the properties of the Truck class
  // xTODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity : number
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    // Check if the wheels array has 4 elements
    // If not, create 4 new Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // xTODO: Get the make an model of the vehicle if it exists
    const vehicleMake = vehicle.make;
    const vehicleModel = vehicle.model;

    // xTODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      // xTODO: If it is, log that the vehicle is being towed
      console.log(`${vehicleMake} ${vehicleModel} is being towed`);
    } else {
      // xTODO: If it is not, log that the vehicle is too heavy to be towed
      console.log(`${vehicleMake} ${vehicleModel} is too heavy to be towed`);
    }
  }

  // xTODO: Override the printDetails method from the Vehicle class
    // xTODO: The method should call the printDetails method of the parent class
    // xTODO: The method should log the details of the Truck
    // xTODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  override printDetails(): void {
    super.printDetails();
    console.log(`${this.color} ${this.year} ${this.make} ${this.model}\nTop Speed: ${this.topSpeed}\nWeight: ${this.weight}\nVIN: ${this.vin}\nTowing Capacity: ${this.towingCapacity}\nWheels: ${this.wheels}`);
  }
}

// Export the Truck class as the default export
export default Truck;
