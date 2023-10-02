// js14.


// 1:

// const car1 = {
//     brand: "BMV",
//     speed: 200,
//     stareEngine() {
//         console.log(`Start ${this.brand}`)
//     }
// }
//
// const car2 = {
//     brand: "Kia",
//     speed: 220,
//     stareEngine() {
//         console.log(`Start ${this.brand}`)
//     }
// }
//
// car2.stareEngine() // Start Kia
//
// function createCar (brand, speed) {
//     return {
//         brand,
//         speed,
//         stareEngine() {
//             console.log(`Start ${this.brand}`)
//         }
//     }
// }
//
// const car3 = createCar("Audi", 240)
// const car4 = createCar("Toyota", 250)
// console.log(car3)
// console.log(car4)




// 2:

// function Car(brand, speed) {
//     this.brand = brand
//     this.speed = speed
//     // this.startEngine = function() {
//     //     console.log(`Start ${this.brand}`)
//     // }
//     //return {}
// }
//
// Car.prototype.startEngine = function () {
//     console.log(`Start ${this.brand}`)
// }
//
//
// const bmv = new Car('Bmv', 200);
// const kia = new Car('Kia', 220);
//
// // bmv.startEngine;
// // kia.startEngine;
//
// console.log(bmv)
// console.log(kia)
//
// bmv.startEngine()





// 3:

// class Car {
//
//     constructor(brand, speed) {
//         this.brand = brand
//         this.speed = speed
//     }
//     startEngine() {
//         console.log(`Start ${this.brand}`) // обычную ф-ию наследуюь только кто использует.
//     }
//     stopEngine = () => {
//         console.log(`Stop ${this.brand}`) // стрелочную ф-ию унаследуют все.
//     }
// }
//
// const bmv = new Car('Bmv', 200);
// const kia = new Car('Kia', 220);
//
// console.log(bmv)
// console.log(kia)
//
// bmv.startEngine()
// // bmv.stopEngine()





// 4:

// class Car {
//     #brand // скрывает свойство brand
//     #speed // скрывает свойство brand
//     constructor(brand, speed) {
//         this.#brand = brand
//         this.#speed = speed
//     }
//
//     startEngine() {
//         console.log(`Start ${this.brand}`) // обычную ф-ию наследуюь только кто использует.
//     }
//
//     getBrand() {
//         return this.#brand.toUpperCase()
//     }
//
//     setBrand(newBrand) {
//         if (newBrand.length < 4) throw new Error("Short name")
//         this.#brand = newBrand
//     }
//
//     get brand() {
//         return this.#brand
//     }
//
//     set brand(newBrand) {
//         this.#brand = newBrand
//     }
//     get speed() {
//         return this.#speed
//     }
//     set speed(newSpeed) {
//         this.#speed = newSpeed
//         if (newSpeed < 101) throw new Error("Slow speed")
//     }
// }
//
// const bmv = new Car('Bmv', 200);
// const kia = new Car('Kia', 220);
//
// // console.log(bmv)
// // console.log(kia)
//
// // bmv.setBrand("Mazda") // будет ожидаемая ошибка если длина меньше 4.
//
// // console.log(bmv.getBrand())
// // console.log(kia.getBrand())
//
// console.log(bmv.brand)
//
// bmv.brand = "ToYoTa"; // Если после brand стоит равно, значит set. Если не стоит равно, значит get.
// console.log(bmv.brand)
//
//
// console.log(kia.speed);
// kia.speed = 101;
// console.log(kia.speed);





// 5:

class Car {
    #brand // скрывает свойство brand
    constructor(brand, speed) {
        this.#brand = brand
        this.speed = speed
    }

    startEngine() {
        console.log(`Start ${this.brand}`) // обычную ф-ию наследуюь только кто использует.
    }

    getBrand() {
        return this.#brand.toUpperCase()
    }

    setBrand(newBrand) {
        if (newBrand.length < 4) throw new Error("Short name")
        this.#brand = newBrand
    }

    get brand() {
        return this.#brand
    }

    set brand(newBrand) {
        this.#brand = newBrand
    }
    static concutCars(car1, car2) {
        return car1.brand + " " + car2.brand
    }
}

const bmv = new Car('Bmv', 200);
const kia = new Car('Kia', 220);

console.dir(bmv)
console.log(kia)

console.log(Car.concutCars(bmv, kia))