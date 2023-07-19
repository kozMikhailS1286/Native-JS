// this, call | apply | bind, f constructor

// 1. Global scope
// 2. funsction, arrow f
// 3. call | apply | bind
// 4. functions constructior

// "use strict";

// console.log(this);
// Указывает на глобальный объект window





// function foo() {
//     console.log(this);
//     // У стрелочной функции её this определяется в момент создания этой ф-ии
//     // и берется из первой внешней области видимости до этой ф-ии.
// }
// foo();





// function foo() {
//   // console.log(this);
//   const foo1 = () => {
//     console.log(this);
//     // У стрелочной функции её this определяется в момент создания этой ф-ии
//     // и берется из первой внешней области видимости до этой ф-ии.
//     // в этом случае она ищет ее до foo1, там тот же глобальный объект window.
//   };
//   foo1();
// }
// foo();





// const car = {
//   maxSpeed: 200,
//   showMaxSpeed() {
//     console.log(this.maxSpeed);
//     // this
//     const foo = () => {
//       console.log(this.maxSpeed);
//     };
//     foo();
//   },
// };
// car.showMaxSpeed();





// function foo() {
//   function foo1() {
//     console.log(this);
//   }
//   foo1();
// }
// const bar = foo;
// bar();





// const car1 = {
//   maxSpeed: 180,
//   showMaxSpeed() {
//     console.log(this.maxSpeed);
//   },
// };
//
// const car2 = {
//   maxSpeed: 200,
// };
//
// const car3 = {
//   maxSpeed: 300,
// };

// car1.showMaxSpeed.call(car2);
// call вызывает вместо this - car2 (перед maxSpeed в console.log)

// car1.showMaxSpeed.apply(car2);
// apply работает так же как и call.

// car1.showMaxSpeed.bind(car2);
// функция обёртка.

// const foo = car1.showMaxSpeed.bind(car2);
// foo()
// но если мы ее сохраним в переменную, то уже будет отображение.

// const b = car1.showMaxSpeed;
// b();
// undefined потому что подставляется window.b() и терятеся контекст вызова.





// function Car(maxSpeed, color) {
//   // {}
//   this.maxSpeed = maxSpeed;
//   this.color = color;
//   // return this
// }
//
// Car.prototype.showMaxSpeed = function () {
//   console.log(this.maxSpeed);
// };
//
// const car1 = new Car(200, "red");
// const car2 = new Car(180, "black");
//
// car1.showMaxSpeed();
//
// console.log(car1);
// console.log(car2);





// class Car2 {
//   constructor(maxSpeed, color) {
//     this.maxSpeed = maxSpeed;
//     this.color = color;
//   }
//   showMaxSpeed() {
//     console.log(this.maxSpeed);
//   }
// }

// const car3 = new Car2(300, "yellow");

// car3.showMaxSpeed();

// const car = {
//   color: "red",
//   showColor() {
//     console.log(this.color);
//   },
// };

// setTimeout(function () {
//   car.showColor();
// }, 1000);

// const car = {
//   color: "red",
//   showColor() {
//     console.log(this.color);
//   },
// };

// setTimeout(() => car.showColor(), 1000);

// const car = {
//   brand: "ferrari",
//   color: "red",
//   showColor() {
//     return `Car color ${this.color}`;
//   },
//   showBrand: () => {
//     return `Car brand ${this.brand}`;
//   },
// };
// console.log(car.showColor());
// console.log(car.showBrand());

// const car = {
//   color: "red",
//   firstShowColor() {
//     console.log("1", this.color);
//   },
//   secondShowColor: () => {
//     console.log("2", this.color);
//   },
//   thirdShowColor() {
//     //this
//     (() => {
//       console.log("3", this.color);
//     })();
//   },
// };

// car.firstShowColor();
// car.secondShowColor();
// car.thirdShowColor();

// const car = { color: "red" };
//
// function foo() {
//   console.log(this.color);
// }
//
// const bindedFoo = foo.bind(car);
//
// bindedFoo();

// function foo() {
//   console.log(this);
// }

// foo();
