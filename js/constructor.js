// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     introduce() {
//         console.log(`Hello my name is ${this.name}`)
//     }
// }
// const otto = new Person('Otto')

// otto.introduce()


// class Car {
//     constructor(maker, model) {
//         this.maker = maker;
//         this.model = model
//     }

//     drive() {
//         console.log(`${this.maker}, ${this.model}`)
//     }
// }

// const tesla = new Car('Tesla', '3')

// tesla.drive()

// class Tesla extends Car {
//     constructor(model, chargtime) {
//         super('tesla', model);
//         this.chargtime = chargtime
//     }

//     charge() {
//         console.log(`'Charging....' ${this.chargtime}`)
//     }
// }

// const tesla2 = new Tesla('3', 20)
// tesla.drive()
// // tesla.charge()