// class Car {
//     constructor(brand) {
//         this.brand = brand
//         this.state = {}
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
//     stopEngine = () => {
//         console.log(`Stop ${this.brand}`)
//     };
// }
//
// const car1 = new Car('bmv')
// const car2 = new Car('kia')

// console.log('1', car1.brand === car2.brand)
// console.log('2', car1.state === car2.state)
// console.log('3', car1.stopEngine === car2.stopEngine)
// console.log('4', car1.startEngine === car2.startEngine)

// console.dir(car1)
// console.dir(car2)

// console.log(car1.__proto__ === Car.prototype)
//
// console.log(car1.__proto__ === car2.__proto__)


// const foo = [];
// const bar = new Function()
//
// console.log(foo.__proto__ === bar.__proto__)


// const foo = [];
// const bar = {}
//
// console.log(foo.__proto__ === bar.__proto__)
// console.log(foo.__proto__.__proto__ === bar.__proto__)



// const a = [];
//
// console.log(a.__proto__.__proto__)



// const pr = Promise.resolve(1)
//
// console.log(pr.__proto__ === Promise.prototype)
// console.log(pr.__proto__.__proto__ === Object.prototype)

// -----------------------

// class Car {
//     constructor(brand) {
//         this.brand = brand
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`)
//     }
// }
//
// const car1 = new Car('bmv')
// const car2 = new Car('kia')
//
// class SuperCar extends Car {
//     constructor(brand, canFly) {
//         super(brand);
//         this.canFly = canFly
//     }
//     startFly() {
//         console.log(`Start fle ${this.brand}`)
//     }
// }
//
// const superCar1 = new SuperCar('Audi', true)
// console.log(superCar1.__proto__ === SuperCar.prototype)
// console.log(superCar1.__proto__.__proto__ === Car.prototype)



// function Car(brand) {
//     this.brand = brand
//     // const startEngine = function() {
//     //     console.log(`Start fle ${this.brand}`)
//     // }
// }
//
// Car.prototype.startEngine = function () {
//     console.log(`Start ${this.brand}`)
// }
//
// const car = new Car("Bmv")
//
// console.log(car)
// car.startEngine()




// Ниже код ментора:

// __proto__ | prototype

// class Car {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//     this.state = {};
//   }
//   startEngine() {
//     console.log(`Start ${this.brand}`);
//   }
// }

// const car1 = new Car("bmw", 200);
// const car2 = new Car("kia", 200);

// console.log("1", car1 === car2); //false
// console.log("2", car1.speed === car2.speed); // true
// console.log("3", car1.state === car2.state); // false
// console.log("4", car1.startEngine === car2.startEngine); // true

// console.log(car1);
// console.dir(Car);
// console.log(car2);

// car1.startEngine();

// console.log(car1.__proto__ === Car.prototype);

// const a = new Array();
// const a = [];
// const a = 24.234;
// const b = 24;

// const obj = {};
// const obj2 = new Object();

// const c = new Number(24);
// const d = new Number(24);

// const str = new String("asd");
// const str2 = new String("asd");

// console.log(str === str2);

// console.log(c.__proto__ === d.__proto__);

// console.log(c.value === d.value);
// console.log(c + d);
// console.log(d);

// console.log(a.toFixed(1)); // const a = new Number(24.234)

// console.log(a.__proto__ === Number.prototype);

// const a = () => {};

// console.log(Array.__proto__ === Function.prototype);
// console.log(String.__proto__ === Function.prototype);
// console.log(Function.__proto__ === Function.prototype);

// console.log(a.__proto__ === Function.prototype);

// console.log(Function.prototype.__proto__ === Object.prototype);

// console.log(a.__proto__.__proto__ === Object.prototype);

// console.log(a.__proto__.__proto__.__proto__ === null);

// a.bind;

// const num = 22.4353;

// console.log(a.__proto__ === Function.prototype);

// console.dir(num.we());

// console.dir(Number.prototype);

// const num = 22.;

// function car() {}

// const car1 = new car();
// console.log(car1);

// const obj = {
//   someMethod() {},
// };

// function foo() {}
// obj.foo = foo;

// const obj1 = new obj.someMethod(); // not working
// const obj2 = new obj.foo(); // working
// console.log(obj1);

// --------------------------------------------------
// __proto__ - это ссылка на prototype того класса с помощью которого был создан данный обьект
// --------------------------------------------------

// class Car {
//   constructor(brand) {
//     this.brand = brand;
//   }
//   startEngine() {
//     console.log("start");
//   }
//   static compareCars(car1, car2) {
//     console.log("compare");
//   }
// }

// const car1 = new Car("bmw");

// class SuperCar extends Car {
//   constructor(brand) {
//     super(brand);
//   }
//   fly() {
//     console.log("fly");
//   }
// }

// const superCar1 = new SuperCar("superBmw");

// superCar1.startEngine();
// superCar1.fly();

// SuperCar.compareCars();

function Car(brand) {
    this.brand = brand;
}
Car.prototype.startEngine = function () {
    console.log("start");
};

Car.compareCars = function (carOne, carTwo) {
    console.log("compare" + carOne.brand + carTwo.brand);
};

const car1 = new Car("bmw");
const car2 = new Car("kia");

// car1.startEngine();
// car2.startEngine();
// Car.compareCars(car1, car2);
// console.log(car1);

function SuperCar() {}

SuperCar.prototype.fly = function () {
    console.log("fly");
};

SuperCar.prototype.__proto__ = Car.prototype;
SuperCar.__proto__ = Car;
console.log(SuperCar.__proto__ === Car);

const superCar1 = new SuperCar();
superCar1.startEngine();
SuperCar.compareCars(car1, car2);


