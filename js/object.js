// // // var animal = {
// // //     eats: true
// // // };
// // // var rabbit = {
// // //     jumps: true
// // // };
  
// // //   rabbit.__proto__ = animal;
  
// // //   // в rabbit можно найти оба свойства
// // //   alert( rabbit.jumps ); // true
// // //   alert( rabbit.eats ); // true
    

// // var animal = {
// //     eats: true
// // }

// // var rabbits = {
// //     jumps: true,
// //     __proto__: animal
// // }

// // for (var key in rabbits) {
// //     if (!rabbits.hasOwnProperty(key)) continue
// //     console.log( key + " = " + rabbits[key])
// // }

// // function Person(name) {
// //     this.name = name
// // }

// // var john = new Person("John Doe")
// // console.log(john)

// // console.log(john instanceof Person)

// // console.log(Object.keys(Person))

// // var myString = 'This is my string'

// // var person2 = Object.create(Person)


// // Person.prototype.farewell = function() {
// //     console.log(this.name.first + ' has left the building. Bye for now!')
// // }

// // function Tree(name) {
// //     this.name = name
// // }

// // var threeTree = new Tree("Красное дерево")
// // console.log(threeTree.constructor)

// // function Type() {}

// // var types = [
// //   new Array(),
// //   [],
// //   new Boolean(),
// //   true,             // останется неизменным
// //   new Date(),
// //   new Error(),
// //   new Function(),
// //   function() {},
// //   Math,
// //   new Number(),
// //   1,                // останется неизменным
// //   new Object(),
// //   {},
// //   new RegExp(),
// //   /(?:)/,
// //   new String(),
// //   'тест'            // останется неизменным
// // ];

// // for (var i = 0; i < types.length; i++) {
// // //   types[i].constructor = Type;
// //   types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()];
// // }

// // console.log(types.join('\n'));

// var User = 'Hello'
// console.log(User.constructor)


// var o = {}

// o.x = 1
// o["y"] = 10
// console.log(o.x)
// console.log(o.y)
// console.log(o)

// const number = {
//     one: 1,
//     two: 2,
//     three: 3,
//     for: 4,
//     five: 5
// }

// for(const num in number) {
//     console.log(num)
// }


// function addSquares(a, b) {
//     function square(x) {
//         return x * x
//     }

//     return square(a) + square(b)
// }

// a = addSquares(2, 3)
// console.log(addSquares)

// (null, alert)('Zomg what is this')

// function makeArray(arg1, arg2) {
//     return [this, arg1, arg2]
// }

// console.log(makeArray('one', 'two'))
// var car = { year: 2008, model: 'Dodge Bailout'}
// console.log(makeArray.apply(car, ['one', 'for']))
// // console.log( typeof window.methodThatDoesntExist)

// var arrayMaker = {
//     someProperty: 'какие-то значения',
//     make: makeArray
// }

// console.log(arrayMaker.make('one','three'))

// console.log(arrayMaker['make']('one','three'))

// function buttonClicked() {
//     var text = (this === window) ? 'window' : this.id
//     alert( text )
// }
// var button1 = document.getElementsByClassName('btn');
// var button2 = document.getElementById('btn2');

// button1.onclick = buttonClicked;
// button2.onclick = function(){ buttonClicked(); };