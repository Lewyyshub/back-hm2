// 1) Create a Car class with properties make, model, and year, then make instance of electric car which have battery level

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
class ElectricCar extends Car {
  constructor(make, model, year, batteryLevel) {
    super(make, model, year);
    this.batteryLevel = batteryLevel;
  }

  displayBattery() {
    return `ელემენტი არის ${this.batteryLevel}%`;
  }
}

const myElectricCar = new ElectricCar("Tesla", "Model Y", 2023, 90);
console.log(myElectricCar.displayBattery());

// 2 exam //

class Library {
  constructor() {
    this.books = [];
  }

  addBook(author, book, year) {
    this.books.push({ author, book, year });
  }
  removeBook(bookTitle) {
    this.books = this.books.filter((b) => b.book !== bookTitle);
  }
  listBooks() {
    return this.books;
  }
}

const myLibrary = new Library();
myLibrary.addBook("George Orwell", "Nineteen Eighty-Four", 1948);

console.log(myLibrary.listBooks());

myLibrary.removeBook("Nineteen Eighty-Four");

console.log(myLibrary.listBooks());

// 3  Create a class Employee with a method calculateSalary() that calculates salary based on hours worked and hourly rate.

class Employee {
  constructor(name, hoursWorked, hourlyRate) {
    this.name = name;
    this.hoursWorked = hoursWorked;
    this.hourlyRate = hourlyRate;
  }
  calculateSalary() {
    return this.hoursWorked * this.hourlyRate;
  }
}
const employee1 = new Employee("ლევანი", 20, 20);

console.log(`${employee1.name}ს ხელფასია $${employee1.calculateSalary()}`);

// 4) Create a class ShoppingCart that holds a list of items. methods, addItem(), deleteItem(), updateItem(), calculateTotal()

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  deleteItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }

  updateItem(name, quantity) {
    const item = this.items.find((item) => item.name === name);
    if (item) item.quantity = quantity;
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}

const cart = new ShoppingCart();
cart.addItem("Apple", 2, 3);
cart.addItem("Orange", 1.5, 2);
cart.updateItem("Apple", 5);
cart.deleteItem("Orange");

console.log(cart.items);
console.log(cart.calculateTotal());

// 5)  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars. getAllCars should be array of objects with following properties: [
// {
// year: 2010 // use random year from 2010 to 2024 using math.random
// model: 'Ferrari',
// price: 350000
// }
// ]

class CarFactory {
  constructor() {
    this.cars = [];
  }

  getRandomYear() {
    return Math.floor(Math.random() * (2024 - 2010 + 1)) + 2010;
  }
  addCar(model, price) {
    const newCar = {
      year: this.getRandomYear(),
      model,
      price,
    };
    this.cars.push(newCar);
  }
  deleteCar(model) {
    this.cars = this.cars.filter((car) => car.model !== model);
  }
  updateCar(model, newModel, newPrice) {
    const car = this.cars.find((car) => car.model === model);
    if (car) {
      if (newModel) car.model = newModel;
      if (newPrice) car.price = newPrice;
    }
  }
  getAllCars() {
    return this.cars;
  }
}

const factory = new CarFactory();

factory.addCar("Ferrari", 350000);
factory.addCar("Lamborghini", 400000);
factory.updateCar("Ferrari", "Ferrari F8", 360000);
factory.deleteCar("Lamborghini");

console.log(factory.getAllCars());

// 6) Create a class rectangle that receives width and height and add this methods getArea(), getPerimeter(), isSquare()

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }
}

const rect1 = new Rectangle(10, 20);

console.log(rect1.getArea());
console.log(rect1.getPerimeter());
console.log(rect1.isSquare());

const rect2 = new Rectangle(15, 15);
console.log(rect2.isSquare());

// 7) Create a Class Inventory that holds a list of items, Each item has name, stock, price Methods: addItem(), updateStock(name, quantity), checkAvailability(name), calculateValue()

class Inventory {
  constructor() {
    this.items = [];
  }
  addItem(name, stock, price) {
    this.items.push({ name, stock, price });
  }
  updateStock(name, quantity) {
    const item = this.items.find((item) => item.name === name);
    if (item) {
      item.stock = quantity;
    }
  }
  checkAvailability(name) {
    const item = this.items.find((item) => item.name === name);
    return item ? item.stock > 0 : false;
  }
  calculateValue() {
    return this.items.reduce(
      (total, item) => total + item.stock * item.price,
      0
    );
  }
}

const store = new Inventory();

store.addItem("ნიმესილი", 5, 1000);
store.addItem("მიგ400", 10, 25);
store.updateStock("მიგ400", 10);

console.log(store.checkAvailability("ნიმესილი"));
console.log(store.calculateValue());   