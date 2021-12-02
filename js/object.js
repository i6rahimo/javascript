// var animal = {
//     eats: true
// };
// var rabbit = {
//     jumps: true
// };
  
//   rabbit.__proto__ = animal;
  
//   // в rabbit можно найти оба свойства
//   alert( rabbit.jumps ); // true
//   alert( rabbit.eats ); // true
    

var animal = {
    eats: true
}

var rabbits = {
    jumps: true,
    __proto__: animal
}

for (var key in rabbits) {
    if (!rabbits.hasOwnProperty(key)) continue
    console.log( key + " = " + rabbits[key])
}

function Person(name) {
    this.name = name
}

var john = new Person("John Doe")
console.log(john)

console.log(john instanceof Person)

console.log(Object.keys(Person))

var myString = 'This is my string'

var person2 = Object.create(Person)


Person.prototype.farewell = function() {
    console.log(this.name.first + ' has left the building. Bye for now!')
}

function Tree(name) {
    this.name = name
}

var threeTree = new Tree("Красное дерево")
console.log(threeTree.constructor)

function Type() {}

var types = [
  new Array(),
  [],
  new Boolean(),
  true,             // останется неизменным
  new Date(),
  new Error(),
  new Function(),
  function() {},
  Math,
  new Number(),
  1,                // останется неизменным
  new Object(),
  {},
  new RegExp(),
  /(?:)/,
  new String(),
  'тест'            // останется неизменным
];

for (var i = 0; i < types.length; i++) {
//   types[i].constructor = Type;
  types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()];
}

console.log(types.join('\n'));

