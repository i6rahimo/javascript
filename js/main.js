// const day     = document.querySelector('.days p')
// const hour    = document.querySelector('.hours p')
// const mins    = document.querySelector('.mins p')
// const seconds = document.querySelector('.seconds p')

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








const namelist = new Array(4294967269)

console.log(namelist.length);

let namelistB = []
namelistB.length = Math.pow(2, 32) -1
console.log(namelistB);

let arr = [1, 2, 3]
printEntries(arr)

arr.length = 5
printEntries(arr)

function printEntries(arr) {
    let goNext = true
    let entries = arr.entries()
    while (goNext) {
        let result = entries.next() 
        if(result.done !== true) {
            console.log(result.value[1]);
            goNext = true
        }else 
        goNext = false
    }
    console.log('=== printed ===');
}

let obj = { foo: 'bar', baz: 42}
console.log(Object.entries(obj));

let myObj = Object.create({}, { getFoo: {value: function() {return this.foo}}})
myObj.foo = 'bar'
console.log(Object.entries(myObj));