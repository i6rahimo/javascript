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


function User(name) {
    this.name = name,
    this.isAdmin = false
}

let user = new User('Вася')
let admin = new User('Катя')
console.log(user.name)
console.log(admin.name)

function BigUser() {
    this.name = "Alex";

    return { name: "Godzilla"}
}

console.log( new BigUser().name)