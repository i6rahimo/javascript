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
// const user = {
//   name: 'Jhon',
//   surname: 'Smith',
// }
// user.name = 'Pete';
// delete user.name;
// console.log(user);
// let salaries = {
//   Jhon: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for(let arr in salaries) sum += salaries[arr];
// // console.log(sum);
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu'
// };
// const multiplyNumeric = (obj) => {
//   for(let arr in obj) {
//     if(typeof obj[arr] === 'number') obj[arr] *= 2;
//     else console.log('qwe');
//   }
//   console.log(obj);
// } 
// multipl
// function pow(x, n) {
//     return (n == 1) ? x : (x * pow(x, n - 1)); 
// }
// console.log(pow(2, 5));
// let company = {
//   sales: [{
//     name: 'Jhon',
//     salary: 1000
//   }, {
//     name: 'Alice',
//     salary: 600
//   }
// ],
//   development: {
//     sites: [{
//       name: 'Peter',
//       salary: 2000
//     }, {
//       name: 'Alex',
//       salary: 1800
//     }],
//     internals: [{
//       name: 'Jack',
//       salary: 1300
//     }]
//   }
// };
// function sumSalaries(departament) {
//   if(Array.isArray(departament)) {
//     return departament.reduce((prev, currnet) => prev + currnet.salary, 0);
//   } else {
//     let sum = 0;
//     for(let subdep of Object.values(departament)) {
//       sum += sumSalaries(subdep)
//     }
//     return sum
//   }
// }
// console.log(sumSalaries(company));
// const factorial = (n) => {
//   if (n === 0) {
//     return 1
//   }
//   const iter = (counter, acc) => {
//     if(counter === 1) {
//       return acc
//     }
//     return iter(counter - 1, counter * acc)
//   };
//   return iter(n, 1)
// };
// console.log(factorial(12));
// function sumTo(n) {
//   let sum = 3;
//   for(let i = 5; i <= n; i++) {
//     sum + i;
//   }
//   return sum
// }
// console.log(sumTo(5));
// function sumTo(n) {
//   if(n == 1) return 1
//   return sumTo(n - 1)
// }
// console.log(sumTo(2));
// function sumTo(n) {
//   if(n == 1) return 1
//   return n * sumTo(n - 1);
// }
// console.log(sumTo(7));
// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2)
// }
// console.log(fib(7));
// let gcd = function(a, b) {
//   if(! b) {
//     return a;
//   }
//   return gcd(b,a % b)
// };
// console.log(gcd(2154, 458));
// let integer = function(a, b) {
//   if(a - b === 2) {
//     return [a + 1]
//   } else {
//     let list = integer(a, b - 1);
//     list.push(b - 1)
//     return list 
//   }
// } 
// console.log(integer(2, 9));
// let str = 'Привет';
// console.log(Array.from(str));
// let num = 1;
// function numberGenerator() {
//   function checkNumber() {
//     let num = 12312
//     console.log(num);
//   }
//   num++;
//   console.log(num);
//   return checkNumber;
// }
// var number = numberGenerator();
// number()
// function sayHello() {
//   // let hello = 'Shut world'
//   let say = function() {console.log(hello);}
//   let hello = 'Hello world'
//   return say;
// }
// var sayHelloCloseure = sayHello();
// sayHelloCloseure()
// var x = 10;
// function foo(a) {
//   var b = 20;
//   function bar(c) {
//     var d = 30;
//     return boop(x + a + b + c + d)
//   }
//   function boop(e) {
//     return e * -1;
//   }
//   return bar;
// }
// var moar = foo(5)
// moar(15)
// var x = 10;
// function foo() {
//   var y = 20;
//   function bar() {
//     var z = 15;
//     return x + y + z;
//   }
//   return bar
// }
// console.log(foo());
// var x = 10;
// function foo() {
//   var y = x + 5;
//   return y
// }
// function bar() {
//   var x = 2;
//   return foo()
// }
// function main() {
//   foo();
//   bar();
//   return 0
// }
// console.log(bar());
// function sum(a) {
//   return function(b) {
//     return a + b
//   }
// }
// console.log(sum(1)(2));
// let animal = {
//   eats: true,
//   walk() {
//     console.log('Animal walk');
//   }
// };
// let rabbits = {
//   jumps: true,
//   __proto__: animal
// }
// rabbits.walk()
// let animal2 = {
//   eats: true
// };
// let rabbit2 = {
//   jumps: true,
//   __proto__: animal2
// };
// console.log(Object.keys(rabbit2));
// for(let prop in rabbit2) console.log(prop);
// let head = {
//   glasses: 1
// };
// let table = {
//   pen: 3,
//   __proto__: head,
// };
// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };
// let pockets = {
//   money: 2000,
//   __proto__: bed,
// }
// console.log(pockets.pen);
// console.log(bed.glasses);
// let animal = {
//   eat() {
//     this.full = true,
//   }
// };
// let rabbit = {
//   __proto__: animal
// };
// rabbit.eat()
// class User { 
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }
// let user = new User('Ivan')
// user.sayHi()
// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;
//   script.onload = () => callback(script)
//   script.onerror = () => callback(new Error(`Не удалось загрухить скрипт ${script}`))
//   document.head.append(script)
// }
// const href = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js'
// loadScript(href, script => {
//   console.log(`Здрово, скрипт ${script.src} загрузился`);
//   loadScript(href, function(script) {
//     console.log(`Здорово, второй скрипт загрузился`);
//   })
// })
// let promise = new Promise(function(resolve, reject) {
//   resolve(123)
// })
// promise.then(
//   result => console.log(result),
//   error => console.log(error)
// )
// console.log(promise);
// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => resolve(script);
//     script.onero = () => reject(new Error(`Ошибка загрузки скрипта ${script}`));
//     document.head.append(script);
//   })
// }
// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
// promise.then(
//   script => console.log((`${sript.src} загружен`)),
//   error => console.log((`Ошибка ${sript.src}`))
// );
// promise.then(script => console.log('Еще один обработчик'))
// let promise = new Promise(function(resolve, reject) {
//   resolve(1);
//   setTimeout(() => resolve(2), 1000)
// })
// promise.then(alert)
// const greeting = new Promise((resolve, reject) => {
//   resolve('Hello')
// })
// console.log(greeting);
// function getUsers() {
//     return [
//         {username: 'John', email: 'john@test.com'},
//         {username: 'Smith', email: 'john@test.com'},
//     ];
// };
// function findUser(username) {
//     const users = getUsers();
//     const user = users.find((user) => user.username === username);
//     return user;
// }
// console.log(findUser('Smith'));
// function getUsers(callback) {
//     setTimeout(() => {
//         callback([
//             {username: 'John', email: 'john@test.com'},
//             {username: 'John', email: 'john@test.com'},
//         ])
//     }, 1000)
// }
// console.log(getUsers(findUser));
// function findUser(username, callback) {
//     getUsers((users) => {
//         const user = users.find((user) => user.username === username)
//         callback(user)
//     })
// }
// findUser('John', console.log)
// const promise = new Promise((resolve, reject) => {
//     if(success) {
//         resolve(value)
//     }else {
//         reject(error)
//     }
// })
// function getUsers() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 {username: 'John', email: 'john@test.com'},
//                 {username: 'John', email: 'john@test.com'},
//             ]);
//         }, 1000)
//     });
// }
// function onFulfilled(userwws) {
//     console.log(userwws);
// }
// const promise = getUsers()
// promise.then(onFulfilled)
// let isProcess = false;
// elResult = document.querySelector('#result');
// document.querySelector('#run').onclick = () => {
//     if(isProcess) {
//         elResult.textContent = 'Подождите! Задача еще выполняется';
//         return;
//     }
//     isProcess = true;
//     elResult.textContent = 'Задача в процессе....';
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const mark = Math.floor(Math.random() * 4) + 2;
//             mark > 3 ? resolve(mark) : reject(mark)
//         }, 5000)
//     });
//     promise
//         .then(value => {
//             elResult.textContent = `Ура! Вы сдали экзамен на ${value}!`
//         })
//         .catch(value => {
//             elResult.textContent = `Увы вы получлили оценку ${value}`
//         })
//         .finally(() => {
//             isProcess = false;
//         })
// }
// const promise = new Promise(resolve => {
//     setTimeout(()=> resolve(2), 3000)
// });
// promise
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(() => resolve(value * 2), 3000)
//         });
//     })
//     .then(value => {
//         console.log(value);
//         return new Promise(resolve => {
//             setTimeout(() => resolve(value * 2), 3000)
//         })
//     })
//     .then(value => console.log(value * 2))
// const request = (url, success, error) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.onload = () => {
//         xhr.status === 200 ? success(xhr.response) : error(xhr.statusText)
//     }
//     xhr.onerror = () => error(xhr.statusText);
//     xhr.send()
// }
// document.querySelector('#get-text').onclick = () => {
//     request('https://www.javascripttutorial.net', data => {
//         document.querySelector('#result').innerHTML = data;
//     }, error => {
//         console.log(error);
//     })
// }


// const colors = ['red', 'green', 'blue'];
// const result = colors.map(e => e.toLocaleLowerCase()).includes('green')
// console.log(result);



// Array contact 

// function func() {
//     var num1 = [11, 12, 13],
//         num2 = [14, 15, 16],
//         num3 = [17, 18, 19];
//     console.log((num1.concat(num2, num3)))
// }

// function fnFilterStudents_loop(asStudent) {
//     var tempAr
// }

// function sumArray(array) {
//     const deleteNum = array.filter(num => Math.max(num) && Math.min(num))
//     return deleteNum()
// }

// console.log(sumArray(6, 2, 1, 8, 10));

// gsap.from(".logo", {duration: 2, opacity: 0, scale: 0.3, stragger: 0.25})

// const randomList = [1, 2, 3];
// const randomNestedList = [
//     [4, 5],
//     [6, 7]
// ];

// const combined = randomList.concat(randomNestedList)
// console.log(combined);
// console.log(randomList.constructor);

// const massiv = [1, 2, 3, {a: '4'}, [777], 4, 5, 'efim:300', 'js'];
// console.log(massiv.filter(i => i.constructor.name == 'String'));
// console.log(massiv.map(i => i));


// console.log(JSON.stringify(Object.entries({w:"Петров", s:"Петя"}).sort()));


// let obj1 = {s: 123, w: 12333};
// let obj2 = {...obj1}

// let obj44 = {44:44, 55:55};
// let obj77 = Object.assign({}, obj44)

// let obj3 = {a:1, b:{f:2, r:3}};
// let o2 = {...obj3}
// o2.a = 'R';

// let q1 = {a:1, b:{f:2, r:3}};
// let q2 = JSON.parse(JSON.stringify(q1));
// q2.b.r = "G";

// const alphabets = ["A", "B", "C"];

// let iterator = alphabets.entries();


// for(let entry of iterator) {
// }


// function checkAdult(age) {
//     return age >= 18;
// }

// const ageArray = [34, 23, 20, 26, 12];
// let check = ageArray.every(checkAdult)

// if(!check) {
//     console.log('All numbers must be at  least 18 years of age');
// }

// let check1 = ageArray.every(age => age >= 18);
// console.log(check1);



// let language = ['JS', 'Python', 'C', 'C++'];

// let result = language.fill('JS', NaN, NaN)
// console.log(language);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function checkEven(number) {
//     if (number % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// let evenNumbers = numbers.filter(num => num % 2 == 0);

// const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];

// function checkPrice(element) {
//     return element > 2000 && !Number.isNaN(element);
// }

// // let filteredPrices = prices.filter(checkPrice);
// let filteredPrices = evenNumbers.filter((price) => (price > 2000 && !Number.isNaN(price)))
// // console.log(filteredPrices);



// const languages = ["JavaScript", "Python", "Ruby", "C", "C++", "Swift", "PHP", "Java"];

// function searchFor(arr, query) {
//     function condition(element) {
//         return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//     }
//     return arr.filter(condition);

// }

// let newArr = searchFor(languages, "ja");
// // console.log(newArr);


// const searchArr = (arr, query) => arr.filter(element => element.toLowerCase().indexOf(query.toLowerCase()) !== -1);
// const newLanguages = searchArr(languages, 'p');

// let cities = [
//     { name: 'Los Angeles', population: 3792621 },
//     { name: 'New York', population: 8175133 },
//     { name: 'Chicago', population: 2695598 },
//     { name: 'Houston', population: 2099451 },
//     { name: 'Philadelphia', population: 1526006 }
// ];

// let bigCities = cities
//     .filter(e => e.population > 3000000)
//     .sort((c1, c2) => c1.population - c2.population)
//     // .map(city => console.log(city.name + ':' + city.population));
// // console.log(bigCities);

// function isInRange(value) {
//     if(typeof value !== 'number') {
//         return false;
//     }
//     return value >= this.lower && value <= this.upper;
// }

// let data = [10, 20, '30', 1, 5, 'JavaScript filter', undefined, 'example'];

// let range = {
//     lower: 1,
//     upper: 10
// };

// let numberInRange = data.filter(isInRange,range);
// console.log(numberInRange);


// const data = [
//     {
//         name: 'Hilton',
//         rating: 4.7
//     },
//     {
//         name: 'Best Western',
//         rating: 3.8
//     },
//     {
//         name: 'Bob\'s Hotel',
//         rating: 2.5
//     },
//     {
//         name: 'Marriot',
//         rating: 4.2
//     }
// ];


// function filterByRaiting(data, ratingMinimum, ratingMaximum) {
//     data = data.filter(data => data.rating >=(ratingMinimum ?? 0));
//     data = data.filter(data => data.rating <=(ratingMaximum ?? 5));
//     return data;
// }

// const hotelWithAtLeast4Stars = filterByRaiting(data, 4);
// // console.log(hotelWithAtLeast4Stars);



// function filterStringByLength(arrayOfStrings, minLenth, maxLength) {
//     arrayOfStrings = arrayOfStrings.filter(string => string.length >= (minLenth ?? 0));
//     arrayOfStrings = arrayOfStrings.filter(string => string.length <= (maxLength ?? string.length));
//     return arrayOfStrings;
// }
// // const arrayOfStrings = ['', 'a', 'bc', 'def', 'ghij', 'klmno', 'pqrstu', 'vwxyz12'];
// const arrayOfStrings = [];
// const num = [1, 2, 3, 4, 5];

// const wordsAtLeast3Characters = filterStringByLength(arrayOfStrings, 3);


// function isEven(element) {
//     return element % 2 == 0;
// }

// let randomArray = [1, 45, 8, 98, 7];

// let firstEven = randomArray.find(isEven);

// let firstEven2 = randomArray.find(num => num % 2 == 0)
// const team = [
//     { name: "Bill", age: 10 },
//     { name: "Linus", age: 15 },
//     { name: "Alan", age: 20 },
//     { name: "Steve", age: 34 },
//   ];

// let findAge = team.find(el => el.age >= 18);

// let languages = ["Java", "JavaScript", "Python", "JavaScript"];

// let index = languages.indexOf('Java');


// function findAllIndex(array, element) {
//     indices = [];
//     let currentIndex = array.indexOf(element);
//     while(currentIndex != -1) {
//         indices.push(currentIndex);
//         currentIndex = array.indexOf(element/currentIndex + 1);
//     }
//     return indices;
// }

// let priceList = [10, 8, 2, 31, 10, 1, 65, 10];

// let occurance1 = findAllIndex(priceList, 10)


// let text = 'Hello world, welcome to the universe';
// let result = text.indexOf("e", 5)

// let str = 'know You do not know what you do not know until you know.';
// let substr = 'know';

// let count = 0;

// let index = str.indexOf(substr);
// while(index !== -1) {
//     count++;
//     index = str.indexOf(substr, index + 1);
// }

// console.log(count);

// let str = 'JS indexOf';
// let substr = 'js'

// let index = str.toLocaleLowerCase()
// // .indexOf(substr.toLocaleLowerCase())
// console.log(index);

// function checkOrAdd(array, element) {
//     if(array.indexOf(element) === -1) {
//         array.push(element);
//         console.log('Element not Found! Update the array.');
//     } else {
//         console.log(element + 'is already in the array');
//     }
// }

// let parts = ["Monitor", "Keyboard", "Mouse", "Speaker"];
// checkOrAdd(parts, 'CPU');
// console.log(parts);
// checkOrAdd(parts, 'Mouse')

// let info = (["Terence Kathmandu"]);
// let indfo_str  = info.join();
// console.log(indfo_str);


// function getScores() {
//     return [70, 80, 90];
// }

// let scores = getScores();

// let x = scores[0],
//     y = scores[1],
//     z = scores[2];
// console.log(x);
// console.log(y);

// function getItems() {
//     return [10, 29];
// }

// let items = getItems();
// let thirdItem = items[1] != undefined ? items[2] : 0;

// function getProfile() {
//     return [
//         'John',
//         'Doe',
//         ['Red', 'Green', 'Blue']
//     ];
// }


// let [
//     firstName,
//     lastName,
//     [
//         color1,
//         color2,
//         color3
//     ]
// ] = getProfile();
// console.log(color2, color1, color3);

// let a = 10,
//     b = 20;

// [a, b] = [b, a];

// function stat(a, b) {
//     return [
//         a + b,
//         (a + b) / 2,
//         a - b
//     ]
// }

// let [sum, average, difference] = stat(20, 10);
// console.log(sum, average, difference);
// let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
// let [, elem2 = 'bbb', elem3 = 'eee'] = newArr;
// let reverseItems = newArr.reverse();
// for(let curr of reverseItems) {
//      console.log(curr);
// }

// let user = {
//     names: 'Petr',
//     surnames: 'Petrov',
//     agee: '20 year'
// };
// let {name = 'Аноним', surname = 'Анонимов', age = '? лет'} = user;
// console.log(name + ' ' + surname + ' ' + age);


// let number = [12, 1233, 1, 12, 44, 452, 12];
// let count = 0;
// for(let sumNum of number) {
//     count += sumNum;
// }
// console.log(count);

// let str = 'o qwr o wer o  wer ower oo';
// let includeOInStr = 0;
// for(let string of str) {
//     if(string == 'o') {includeOInStr++};
// }
// console.log(includeOInStr);


// let input = document.querySelector('#username');

// for(let attr of input.)

// let xhr = new XMLHttpRequest();

// xhr.open('GET', '/article/xmlhttprequest/example/load');

// xhr.send();

// xhr.onload = function() {
//     if(xhr.status != 200) {
//         console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     }else {
//         console.log(`Done, give ${xhr.response.length} byte`);
//     }
// }
// xhr.onprogress = function(event) {
//     if(event.lengthComputable) {
//         console.log(`Give ${event.loaded} for ${event.total} byte`);
//     } else {
//         console.log(`Give ${event.loaded} byte`);
//     }
// }

// xhr.onerror = function() {
//     alert("Запрос не удался")
// }
// codewars
// Very simple, given an integer or a floating-point number, find its opposite.
// function opposite(number) {
//     //your code here++
//     if(number >= 0 || number <= 0) {
//       return -number
//     }else {
//       return number
//     }
//   }

// function opp(num) {
//     console.log(-num)
// }

// opp(0)

// function invert(array) {
//     const arr = Object.entries( array);
//     arr <= 0 || arr >= 0 ? -arr : arr;
//     return arr
//   }

// // console.log(invert(232));
// function findNeedle(haystack) {
//   // your code here
//   let ar = [];
//   haystack.map((arr, index) => {
//     if(arr === 'needle') return `found the needle at position ${index}`;
//     return "found the needle at position 6"
//   })
//   ar.push(haystack);
//   console.log(ar);
//   return ar
// }
// findNeedle(['3', '123124234', undefined,  'world', 'hay', 2, '3', true, false])


// const btn = document.querySelector('.click')
// function printPage() {
//   window.print()
// }
// btn.addEventListener('click', printPage)

// let side1 = 5;
// let side2 = 6;
// let side3 = 7;

// const s = (side1 + side2 + side3) / 2;
// const area = Math.sqrt(s*((s - side1)*(s - side2) * (s - side3) ))
// console.log(area);

// function animateString() {
//   let element = document.querySelector('#target');
//   let textNode = element.childNodes;
//   let text = textNode.data;
// }

// setInterval(function() {
//   text = text[text.length - 1] + text.substring(0, text.length - 1);
//   textNode.data = text;
// }, 100)

// function leapYear(year) {
//   return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
// }
// console.log(leapYear(2016));


// const copyClipboard = str => {
//   const el = document.createElement('textarea');
//   el.value = str;
//   el.setAttribute('readonly', '');
//   el.style.position = 'absolute';
//   el.style.left = '-9999px';
//   document.body.appendChild(el);
//   const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
//   el.select();
//   document.execCommand('copy');
//   document.body.removeChild(el);
//   if(selected) {
//     document.getSelection().removeAllRanges();
//     document.getSelection().addRange(selected);
//   }
// }
// function countBy(x, n) {
//     var z = [];
//     for (i = 1; i <= n; i++) {
//         console.log(z);
//         z.push(x * i);
//     }
//     return z;
// }

// countBy(3, 4)

// function bmi(weight, height) {
//     let bmis = weight / Math.pow(height, 2);
//     console.log(bmi)
//     bmis <= 18.5 ?  'Underweight' : 'error';
//   bmis <= 25.0 ?  'Normal' : false;
//   bmis <= 30.0 ? 'Overweight' : false;
//   bmis > 30 ? 'Obese' : false;
  
    
//     return bmis;
//   }

//   console.log( bmi(2,34));


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(()=> resolve('done'), 1000)
// })
// const prom = promise()
// console.log(prom);

// $(".box").live("click", function() {
//     console.log('qwe');
// })


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve('done', 1000))
// })
// .finally(() => console.log('Промис завершен'))
// .then(result => console.log(result))


// promise.then(
//     result => console.log(result),
//     error => console.log(error)
// )


// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

//     document.head.append(script);
// }
// loadScript()


// const promise = new Promise(function (resolve, reject) {
//     const data = resolve(data);
// });

// const errorPromise = new Promise(function(resolve, reject) {
//     reject(new Error('error'))
// 

// const promise = fetch(`https://swapi.dev/api/films/${id}/`).then(function(movies) {
//     console.log(movies);
// })


function getDivisorsCnt(n) {

    for(let i = 1; i <= n; i++) {
        
        const division = n / i;
        
        console.log(division);

    }
}

getDivisorsCnt(4)


let counter = 0;

const btn = document.querySelector('#btn');
btn.addEventListener('click', ()=> {
    counter += 1;
    const text = document.querySelector('#id')
    text.innerHTML = `Кол-во лайков = ${counter}`
    console.log('qwe');
})

