var animal = {
    eats: true
};
var rabbit = {
    jumps: true
};
  
  rabbit.__proto__ = animal;
  
  // в rabbit можно найти оба свойства
  alert( rabbit.jumps ); // true
  alert( rabbit.eats ); // true
    

var animal = {
    eats: true
}

var rabbits = {
    jumps: true,
    __proto__: animal
}

for (var key in rabbits) {
    console.log( key + " = " + rabbits[key])
}