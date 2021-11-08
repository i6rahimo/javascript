// function some_function( arg1, arg2, callback) {
//     let my_number = Math.ceil(Math.random() * arg1 + arg2)
//     callback(my_number)
// }

// some_function( 10, 1, function(num) {
//     console.log("callback called" + ' ' + num)
// })

// function some_function2(url, callback) {
//     var httpRequest; // создаём наш XMLHttpRequest-объект
//     if (window.XMLHttpRequest) {
//         httpRequest = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         // для дурацкого Internet Explorer'а
//         httpRequest = new
//         ActiveXObject("Microsoft.XMLHTTP");
//     }
//     httpRequest.onreadystatechange = function () {
//         // встраиваем функцию проверки статуса нашего запроса
//         // это вызывается при каждом изменении статуса
//         if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//             callback.call(httpRequest.responseXML); // вызываем колбек
//         }
//     };
//     httpRequest.open('GET', url);
//     httpRequest.send();
// }
// // вызываем функцию
// some_function2("text.xml", function () {
//     console.log(this);
// });
// console.log("это выполнится до вышеуказанного колбека");

// function greeting(name) {
//     alert('hello' + ' ' + name)
// }
// function process(callback) {
//     var name = prompt('please enter your name.')
//     callback(name)
// }
// // process(greeting)


// async function pageLoader(callback) {
//     const data = await fetch('/ru/docs/Glossary/Callback_function')
//     callback(data)
// }

// function onPageLoader(pageData) {
//     console.log('Page was succesfully loaded!')
//     console.log('Response')
//     console.log(pageData)
// }

// // pageLoader(onPageLoader)

// ////////////////////////// Prromis

// var Word = true;
// promise1 = new Promise(function(resolve, reject) {
//     if (Word) {
//         resolve("The man likes to keep his word")
//     } else {
//         reject("The man doesnt want to keep his word")
//     }

// });
// console.log(promise1)

// // promise2 = new Promise(function(resolve, reject) {
// //     setTimeout(function() {
// //         resolve({
// //             message: "The man like",
// //             code: "qwecasd"
// //         })
// //     }, 10 * 1000)
// // })

// // console.log(promise2)


// // 'use strict'

// // let promise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         reject('result123');
// //     }, 1000)
// // })

// // promise 
// //     .then(
// //         result => {
// //             console.log("Fulfilled: " + result )
// //         },
// //         error => {
// //             console.log("Rejected123213: " + error)
// //         }
// //     );


// class Triple {
//     static triple(n) {
//         this.n = 1
//         if ( n === undefined) {
//             n = 20
//         }
//         return n * 5
//     }
// }


// class BiggerTriple extends Triple {
//     static triple(n) {
//         this.triple(12)
//         return super.triple(n) * super.triple(n)
//     }
// }

// console.log(Triple.triple())
// console.log(Triple.triple(6))