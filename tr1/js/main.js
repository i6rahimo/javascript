// const day     = document.querySelector('.days p')
// const hour    = document.querySelector('.hours p')
// const mins    = document.querySelector('.mins p')
// const seconds = document.querySelector('.seconds p')

// const { map } = require("@mostly-adequate/support");

// const { prototype } = require("npm/lib/npm");

// const newYears = '1 Jan 2022';
// function coutdown() {
//     const newYearsDate = new Date(newYears);
//     const currentDate  = new Date()

//     const totralSeconds = (newYearsDate - currentDate) / 1000;

//     const days    = Math.floor(totralSeconds / 3600 / 24)
//     const hours   = Math.floor(totralSeconds / 3600 )  %24
//     const minutes = Math.floor(totralSeconds / 60 ) % 60
//     const second  = Math.floor(totralSeconds) % 60


//     day.innerHTML     = days;
//     hour.innerHTML    = hours; 
//     mins.innerHTML    = formatTime(minutes)
//     seconds.innerHTML = formatTime(second)

//     // console.log(days, hours, minutes)
// }

// function formatTime(time) {
//     return time < 10 ? (`0${time}`) : time;
// }

// coutdown()
// setInterval(coutdown, 1000)


// function showFullName() {
//     alert( user.firstName + " " + this.lastName)
// }

// var user = {
//     firstName: 'Vasiliy',
//     lastName: 'Petrov'
// }

// // showFullName.call(user)
// function f(o){}

// console.log(f.call(o))



// function names(o, a) {
//     if ( a == undefined)
//     a = []
//      for ( var property in o) a.push(property)
//     return a
// }
// var a = names(o)
// console.log(names(p, a))


// let user = {
//     name: 'Jon',
//     age: 30,
//     sayHi() {
//         alert(user.name)
//     }
// }

// let admin = user
// user = null

// user.sayHi('hihih')



// function sayHi() {
//     alert(this.name)
// }



// let user = { name: 'Jon'}
// let admin = { name: 'Admin'}

// function sayhi() {
//     alert(this.name)
// }

// user = sayhi
// admin.t = sayhi

// admin.t()



// let user = {
//     name: 'Jon',
//     hi() { alert(this.name)},
//     bye() {alert('bye')} 
// }

// user.bye()

// (user.name == 'Jon' ? user.hi : user.bye)



// let user = {
//     name: 'Jon',
//     go() {alert(this.name)}
// }
// user.go()


// let obj, method

// obj = {
//     go(){ alert(this)}
// }
// obj.go();
// (obj.go)()
// console.log(typeof method)



// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this
//     },
//     down() {
//         this.step--;
//         return this
//     },
//     showStep(){
//         alert(this.step);
//         return this
//     }
// };


// ladder.up().up().down().showStep()



// let calculatr = {
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b', 0)
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mmul() {
//         return this.a * this.b
//     }
// }

// calculatr.read()
// console.log(calculatr.sum())
// console.log(calculatr.mmul())


// function User(name) {
//     this.name = name,
//     this.isAdmin = false
// }

// let user = new User('Вася')
// let admin = new User('Катя')
// console.log(user.name)
// console.log(admin.name)

// function BigUser() {
//     this.name = "Alex";

//     return { name: "Godzilla"}
// }

// console.log( new BigUser().name)



// function pow( x , n) {
//     let result = 1;

//     for (let i = 10; i < n; i++ ) {
//         result *= x
//     }

//     return result
// }

// console.log( pow( 2, 13 ))



// function pow2( x, n) {
//     if(n==1) {
//         return x
//     }else {
//         return x * pow2(x, n -1)
//     }
// }

// console.log(pow2(2, 3))



// function getFactorial(n) {
//     if (n === 1) {
//         return 1
//     }else {
//         return n * getFactorial(n - 1)
//     }

// }

// var result = getFactorial(4)
// console.log(result)


// function doA(n) {
//     return doA(n - 1)
// }
// var result = doA(4)
// console.log(result)\


// function sumTo(n) {
//     if (n === 0 ) {
//         return n
//     }else {
//         return n * (n - 1)
//     }
// }

// console.log(sumTo(3))


// function sumAll(...args) {
//     let sum = 0;

//     for (let arg of args) sum += arg;
//     return sum;
// }

// console.log(sumAll(12, 12,123123123, 12));




// function king(firstName, lastName, ...titles) {
//     console.log( firstName + ' ' + lastName)
//     console.log(titles[0]);
// }

// king("Юлий", "Цезарь", "Kind", " Kind", " Kind")



// function someFc() {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments.length);
// }

// console.log('Jlw', 'qwe', 123, 12312, "qwee");



// function sayHi() {
//     console.log('hi');
// }

// console.log(sayHi.name);

// function ask(question, ...handlers) {
//     let isYes = confirm(question)
//     for(let handler of handlers) {
//         if(handler.length == 0) {
//             if(isYes) handler()
//         }else {
//             handler(isYes)
//         }
//     }
// }

// alert("Вопрос?", () => alert("Вы ответили да"), result => alert(result))








// const namelist = new Array(4294967269)

// console.log(namelist.length);

// let namelistB = []
// namelistB.length = Math.pow(2, 32) -1
// console.log(namelistB);

// let arr = [1, 2, 3]
// printEntries(arr)

// arr.length = 5
// printEntries(arr)

// function printEntries(arr) {
//     let goNext = true
//     let entries = arr.entries()
//     while (goNext) {
//         let result = entries.next() 
//         if(result.done !== true) {
//             console.log(result.value[1]);
//             goNext = true
//         }else 
//         goNext = false
//     }
//     console.log('=== printed ===');
// }

// let obj = { foo: 'bar', baz: 42}
// console.log(Object.entries(obj));

// let myObj = Object.create({}, { getFoo: {value: function() {return this.foo}}})
// myObj.foo = 'bar'
// console.log(Object.entries(myObj));




// let sayHi = function func(who) {
//     console.log(`Hello ${who}`);
// }

// sayHi('qwe')


// let sayHi = new Function('alert("hello")')
// sayHi()


// let user = {
//     name: 'Jon'
// }


// Object.defineProperties(user, 'name', {
//     writable: false
// })

// user.name = 'pere'


// let user = {
//     name: "John",
//     surname: "Smith",

//     get fullName() {
//         return `${this.name} ${this.name}`
//     }
// }

// console.log(user.fullName);


// let user = {
//     get fullName() {
//         return `...`
//     }
// }
// console.log( user.fullName = 'Test');


// const course = { name: 'JS: React', slug: 'js-react'}

// for ( const prop in course ) {
//     console.log(`${prop} = ${course[prop]}`);

// }

// const keys = Object.keys(course)
// console.log(keys);

// for ( const key of keys ) {
//     console.log( course[key]);

// }

// const values = Object.values(course)
// for ( const value of values ) {
//     console.log(value);

// }


// const entries = Object.entries(course)

// for ( const entrie of entries ) {
//     console.log(entrie);

// }

// const one = Object.create(null)

// const two = {
//     z: 3,
//     __proto__: one
// }

// console.log(one.toString);


// const ObjectA = { x: 10}

// const ObjectC = Object.create(ObjectA)
// console.log(ObjectC.x);



// let letter = {
//     getNumbebr() {
//         return this.x
//     }
// }


// const a = { x: 12, __proto__: letter}


// console.log(a.getNumbebr());







// const manager = function( name, sales ) {
//     return {
//         name: name,
//         sales: sales,
//         sell: function(thing) {
//             this.sales += 1;
//             return 'Mangaer' + ' ' + this.name + ' ' + 'sold ' + thing
//         }
//     }
// }


// const john = manager('John', 10)
// const mary = manager('Mary', 20)

// console.log(john.name);
// console.log(john.sell('Apple'));
// console.log(john.sales);

// const euros = [29, 123, 33, 12, 55]
// const sum   = euros.reduce( function(total, amount) {
//     return total + amount
// } )
// console.log(sum);


// const euros = [123.12, 12333.424, 123123.5555555555]
// const average = euros.reduce((total, amount, index, array) => {
//     total += amount;
//     return total/array.length
//     // if( index === array.length-1) {
//     //     return total/array.length
//     // }else {
//     //     return total
//     // }
// })

// console.log(average);


// function foo(bar) {
//     bar = typeof(bar) !== 'undefined' ? bar : 10;
//     console.log(bar);
// }
// foo(); // 10
// foo(20); // 20




// const authenicated = 1;
// const nextURL = authenicated ? ( alert('You will redirect to admin area'),
//  '/admin') : (
//      alert('Acces denied'), '/403'
//  )

//  console.log(nextURL);

// let Foo = function () {

// }

// Foo.prop = 'ololo'

// for (let i in Foo) {
//     console.log('Foo' + ' ' + i + ' = ' + Foo[i]);
// }

// const accordion = document.getElementsByClassName('container');

// for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function () {
//         this.classList.toggle('active')
//     })
// }


// function funcRestart() {
//     let result1 = pureFnFirst(1);
//     let result2 = peruFnLast(2);
//     console.log(`Do with ${result1} qwee ${result2}`);
// }

// funcRestart()



// const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

// const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];





// const linear = (arr, target) => {
//     let results = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             results.push(ar)
//         }
//     }
//     if (!results) {
//         return 'qweeee'
//     }
// }


// console.log(linear(unsortedArr, 12));


// const binary = (array, target) => {

//     let start = 0;
//     let end = array.length;
//     let pivot = Math.floor((start + end) / 2);
//     let steps = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (array[pivot] !== target) {
//             if (target < array[pivot]) end = pivot
//             else start = pivot;
//             pivot = Math.floor((start + end) / 2);
//             steps++
//         };
//         if (array[pivot] === target) return `Found: ${target} in ${steps} steps`
//     }
//     return 'Nothing Found'
// }

// console.log(binary(array, 12));




// function linearSearch(arr, target) {
//     for (let i in arr) {
//         if (arr[i] === target) return i
//     }

//     return -1
// }

// console.log(linearSearch([1, 2, 3, 4], 4));


// let div = document.createElement('div')

// div.className = "alert"
// div.innerHTML = "<strong>Hi everyine!</strong>"
// document.body.append(div)
// console.log(div);



// console.log(window.innerHeight);
// var sBrowser, sUsrAg = navigator.userAgent;

//The order matters here, and this may report false positives for unlisted browsers.

// if (sUsrAg.indexOf("Firefox") > -1) {
//     sBrowser = "Mozilqqqla Firefox";
//     //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
// } else if (sUsrAg.indexOf("Opera") > -1) {
//     sBrowser = "Opera";
// } else if (sUsrAg.indexOf("Trident") > -1) {
//     sBrowser = "Microsoft Internet Explorer";
//     //"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
// } else if (sUsrAg.indexOf("Edge") > -1) {
//     sBrowser = "Microsoft Edge";
//     //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
// } else if (sUsrAg.indexOf("Chrome") > -1) {
//     sBrowser = "Google Chrome or Chromium";
//     //"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
// } else if (sUsrAg.indexOf("Safari") > -1) {
//     sBrowser = "Apple Safari";
//     //"Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
// } else {
//     sBrowser = "unknown";
// }

// alert("You are using: " + sBrowser);




// function allChild() {
//     // for (let node of document.body.childElementCount) {
//     //     console.log(node);
//     // }

//     let a = document.body.childElementCount
// }


// console.log(a);



// console.dir(document.body);

