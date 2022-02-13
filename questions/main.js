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


function makeArmy() {

  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function () { // функция shooter
      console.log(i);; // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...