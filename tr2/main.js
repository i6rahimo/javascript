// const el = document.querySelector(".el");
// let s = 1;

// el.addEventListener("click", () => {
//   /*
//     1
//   */
// if (el.classList.contains("state-1")) {
//   //     el.classList.remove("state-1");
//   //     el.classList.add("state-2");
//   // } else if (el.classList.contains("state-2")) {
//   //     el.classList.remove("state-2");
//   //     el.classList.add("state-3");
//   // } else {
//   //     el.classList.remove("state-3");
//   //     el.classList.add("state-1");
//   // }

//   /*
//     2
//   */
//   // const STATE_1 = "state-1";
//   // const STATE_2 = "state-2";
//   // const STATE_3 = "state-3";
//   // if (el.classList.contains(STATE_1)) {
//   //   el.classList.remove(STATE_1);
//   //   el.classList.add(STATE_2);
//   // } else if (el.classList.contains(STATE_2)) {
//   //   el.classList.remove(STATE_2);
//   //   el.classList.add(STATE_3);
//   // } else {
//   //   el.classList.remove(STATE_3);
//   //   el.classList.add(STATE_1);
//   // }

//   /*
//     3
//   */
//   // const oldN = +/\bstate-(\d+)\b/.exec(el.getAttribute("class"))[1];
//   // const newN = oldN >= 3 ? 1 : oldN + 1;
//   // el.classList.remove(`state-${oldN}`);
//   // el.classList.add(`state-${newN}`);

//   /*
//     4
//   */
//   const classes = ["state-1", "state-2", "state-3"];
//   const activeIndex = classes.findIndex((c) => el.classList.contains(c));
//   const nextIndex = (activeIndex + 1) % classes.length;

//   el.classList.remove(classes[activeIndex]);
//   el.classList.add(classes[nextIndex]);

//   el.classList.replace(classes[activeIndex], classes[nextIndex]);

//   /*
//     4.5
//   */
//   // const states = ["state-1", "state-2", "state-3"];
//   // const current = [...el.classList].find((cls) => states.includes(cls));
//   // const next = states[(states.indexOf(current) + 1) % states.length];
//   // el.classList.remove(current);
//   // el.classList.add(next);

//   /*
//     5
//   */
//   // el.classList.remove(`state-${s + 1}`);
//   // s = (s + 1) % 3;
//   // el.classList.add(`state-${s + 1}`);

//   /*
//     6
//   */
//   // el.classList.replace("state-1", "state-2") ||
//   //   el.classList.replace("state-2", "state-3") ||
//   //   el.classList.replace("state-3", "state-1");

//   /*
//     7
//   */
//   //el.dataset.state = (+el.dataset.state % 3) + 1;

//   /*
//     8
//   */
//   // const simpleMachine = {
//   //   "1": "2",
//   //   "2": "3",
//   //   "3": "1"
//   // };
//   // el.dataset.state = simpleMachine[el.dataset.state];

//   /*
//     9
//   */
//   //   const rotator = (classes) => ({ classList }) => {
//   //     const current = classes.findIndex((cls) => classList.contains(cls));
//   //     classList.remove(...classes);
//   //     classList.add(classes[(current + 1) % classes.length]);
//   //   };

//   //   const rotate = rotator(["state-1", "state-2", "state-3"]);
//   //   rotate(el);
// });


// const date = new Date();


// Object.getPrototypeOf(date)
// console.log(Object.getOwnPropertyDescriptors(date));
// console.log(Object.getPrototypeOf(date));

// function Company(name) {
//   this.name = name
// }

// const company = new Company()

// console.log(company);



// let user = {
//   name: "Ivan",
//   age: 30
// }

// let clone = Object.assign([1], user)

// console.log(clone);

// ===================================== IF
// function isEvenirOdd(num) {

//   if(num % 3 == 0) {
//     console.log(`${num} is a Even number`);
//   }
//   else {
//     console.log(`${num} is a Odd number`);
//   }
// }

// isEvenirOdd(22)

// function isEvenirOdd2(num) {
//   if(num & 1) {
//     console.log(`${num} is a Even number `);
//   }
//   else {
//     console.log('qwe');
//   }
// }

// isEvenirOdd2(1)

// function isValidNumber(num) {
//   if(isNaN(num)) {
//     console.log(`${num} is not a number`);
//   } 
//   else {
//     console.log(`${num} is a valid number`);
//   }
// }
// isValidNumber('')


// function findLargest(num1, num2) {
//   if(num1 > num2) {
//     console.log(`${num1} is the largest number then ${num2}`);
//   }
//   else if (num2 > num2) {
//     console.log(`${num2} the largest number then ${num1}`);
//   }
//   else {
//     console.log(`${num1} is equal to ${num2}`);
//   }
// }

// findLargest(22, 12)

// function findLargestThreeNUmber(num1, num2, num3) {
//   if(num1 > num2 && num1 > num3) {
//     console.log(`${num1} is the largest number`);
//   }
//   else if (num2 > num3) {
//     console.log(`${num2} is the largest number`);
//   }
//   else {
//     console.log(`${num3} is the largest number`);
//   }
// }

// findLargestThreeNUmber(21, 33, 123)


// function findTriangleType(side1, side2, side3) {
//   if((side1 == side2) && (side1 == side3)) {
//     console.log('Equalater triangle');
//   }
//   else if ((side1 == side2) || (side2 == side3)) {
//     console.log('Isosceles triangle');
//   }
//   else {
//     console.log('Scalene triangle');
//   }
// }
// findTriangleType(12, 12, 12)


// function checkInRange(num, start, end) {
//   if(num >= start && num <= end) {
//     console.log(`${num} is between the range ${start} and ${end}`);
//   }
//   else {
//     console.log(`${num} is outside the range ${start} and ${end}`);
//   }
// }

// checkInRange(15, 15 , 14)


// function evalNumbers(num1, num2, op) {
//   if(op == 'add') {
//     console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
//   }
//   else if (op == 'substract') {
//     console.log(`Difference of ${num1} and ${num2} is ${num1 - num2}`);
//   }
//   else if (op == 'multiply') {
//     console.log(`Product of ${num1} and ${num2} is ${num1 * num2}`);
//   }
//   else if (op == 'divide') {
//     console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`);
//   }
//   else if(op == 'modulus') {
//     console.log(`Modulus of ${num1} and ${num2} is ${num1 % num2}`);
//   }
//   else {
//     console.log(`${op} is an invalid operation`);
//   }
// }


// evalNumbers(15, 10, 'add')
// evalNumbers(15, 10, 'divide')
// evalNumbers(15, 10, 'modulus')



// function checkLeapYear(year) {
//   if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//     console.log(`Year ${year} is a leap year`);
//   }
//   else {
//     console.log(`Year ${year} is not a leap year`);
//   }
// }

// checkLeapYear(2011)


// function isLeapYear(year) {
//   return (((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)))
// }

// function findDaysInMonth(month, year) {
//   if(month < 1 || month > 12) {
//     console.log(`Invalid Month of value ${month}`);
//     return;
//   }
//   if(month == 2) {
//     if(isLeapYear(year)) {
//       console.log(`The Month has 29 days`);
//     }
//     else {
//       console.log(`The Month has 28 days`);
//     }
//   }
//   else if(month == 4 || month == 6 || month == 9 || month == 11) {
//     console.log(`The Month has 30 days`);
//   }
//   else {
//     console.log(`The Month hs 31 days`);
//   }
// }

// findDaysInMonth(0, 2012)


// console.log(
//   [1, 4, 3, 0, 4, 5, 4]
//   .filter(element => !(element % 2))
//   .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
// );

// const number = [12, 6, 8, 14, 4]
// console.log(number.filter(element => !(element % 2)));



// let arr = ['t', 'e', 's', 'q', '']
// console.log(arr.slice(1,5));






// const arrayName = ["Bilbo", "Sahsa", "Nikita"]

// const arrAllName = arrayName.forEach((item, index, array) => {
//   console.log(`${item} has postion ${++index} in ${array}`);
// })


// console.log(arrayName.includes("nikita"));






// const ages = [4, 12, 16, 20]

// function checkAge(age) {
//   return age < document.getElementById("ageToCheck").value;
// }
// function myFunction() {
//   document.getElementById("demo").innerHTML = ages.find(checkAge)
// }


// const cities = [
//     {name: 'Moscow', population: 12506468},
//     {name: 'Saint Petersburg', population: 5351935},
//     {name: 'Novosibirsk', population: 1612833},
//     {name: 'Kaliningrad', population: 482443},
//     {name: 'Kaluga', population: 336726}
// ];

// const millionPlusCities = [];

// for(var i = 0; i < cities.length; i++) {
//   if(cities[i].population > 1000000) {
//     millionPlusCities.push(cities[i])
//   }
// }

// console.log(millionPlusCities);



// const millionPlusCitiesTwo = cities.filter( e => e.population > 1000000)
// console.log(millionPlusCitiesTwo);

// cities.filter(e => e.population < 1000000)
//   .sort((a,b) => (b.population - a.population))
//   .map(e => console.log((e.name + ':' + e.population)));


// function isInRange(value) {
//   if(typeof value !== 'string') {
//     return true;
//   }
//   return value >= this.lower && value <= this.upper
// }

// const data = ["30",  'JavaScript filter', undefined, 'example'];

// const range = {lower: 1, upper: 10};

// const numberInRange = data.filter(isInRange, range)

// console.log(numberInRange);


// const numbers = [3, 4, 10, 20];

// const getLessThanFive = num => num <5

// const lesserThanFive2 = numbers.filter(getLessThanFive)

// console.log(lesserThanFive2);


// const callbackAcceptingFunction = (fn) =>  {
//   return fn(1, 2, 4)
// }

// const callback = (arg1, arg2, arg3) => {
//   return arg1 + arg2 + arg3
// }

// const result = callbackAcceptingFunction(callback)

// console.log(result );

// const tenSecondLater = _ => console.log('10 seconds pass');

// setTimeout(tenSecondLater,1000)
// console.log('Start!');

// const orderPizza = flavour => {
//   console.log(`I want a ${flavour} pizza`)
//   // waits20minsForPizzaToCome()
//   // bringPizzaToYou()
// }

// orderPizza('Hawaiian')

// mopFloor()
// ironClothes()

// let obj = {};

// obj.__proto__ = 5;
// console.log(obj.__proto__);

// let user = {name: 'Jhoon', age: 21};
// console.log('ages' in user);

// let users = {
//   name: 'Stepa',
//   age: 30,
//   isAdmin: true,
// }

// for(user in users) {
//   // console.log(user);
//   console.log(users[user]);
// }


const user = {
  name: 'Jhon',
  surname: 'Smith',
}

user.name = 'Pete';

delete user.name;
console.log(user);

let salaries = {
  Jhon: 100,
  Ann: 160,
  Pete: 130,
};

for(let arr in salaries) {
  let sum = '';
  sum += salaries[arr]
  console.log(sum);
};
