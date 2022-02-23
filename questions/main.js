// function sayHi() {
//   console.log(name);
//   console.log(age);
//   let age = 21;
//   var name = "Lydia";
// }
// sayHi()


// for (var i = 0; i < 31; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1);
// }


// function makeArmy() {

//   let shooters = [1];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function () { // функция shooter
//       console.log(i);; // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }
//   return shooters;
// }
// makeArmy()
// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...


// const shape = {
//   radius: 10,
//   diametr() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius
// }

// shape.diametr()
// shapr.perimeter()




// const a = new Number(2)

// console.log(a);


// function bark() {
//   console.log("Woof!");
// }

// bark.aimal = "dog"
// console.log(bark.aimal = "dog");


// let nm = 0;

// console.log(++nm);




// for (let i = 0; i <= 5; i++) {
//     if (i == 23) continue;
//     console.log(i);
// }



// function sayHi() {
//     return (() => '123')();
// }

// console.log(typeof sayHi());

// console.log(typeof typeof typeof 123);


// console.log(...'Lidiya', ...'qwee');


function* generate() {
    yield 1;
    yield 2;
    return 3;
}
console.log(generate);
let generator = generate()

let onew = generator.next()


console.log(JSON.stringify(onew));