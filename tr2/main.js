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

function isValidNumber(num) {
  if(isNaN(num)) {
    console.log(`${num} is not a number`);
  } 
  else {
    console.log(`${num} is a valid number`);
  }
}
isValidNumber('')


function findLargest(num1, num2) {
  if(num1 > num2) {
    console.log(`${num1} is the largest number then ${num2}`);
  }
  else if (num2 > num2) {
    console.log(`${num2} the largest number then ${num1}`);
  }
  else {
    console.log(`${num1} is equal to ${num2}`);
  }
}

findLargest(22, 12)

function findLargestThreeNUmber(num1, num2, num3) {
  if(num1 > num2 && num1 > num3) {
    console.log(`${num1} is the largest number`);
  }
  else if (num2 > num3) {
    console.log(`${num2} is the largest number`);
  }
  else {
    console.log(`${num3} is the largest number`);
  }
}

findLargestThreeNUmber(21, 33, 123)


function findTriangleType(side1, side2, side3) {
  if((side1 == side2) && (side1 == side3)) {
    console.log('Equalater triangle');
  }
  else if ((side1 == side2) || (side2 == side3)) {
    console.log('Isosceles triangle');
  }
  else {
    console.log('Scalene triangle');
  }
}
findTriangleType(12, 12, 12)


function checkInRange(num, start, end) {
  if(num >= start && num <= end) {
    console.log(`${num} is between the range ${start} and ${end}`);
  }
  else {
    console.log(`${num} is outside the range ${start} and ${end}`);
  }
}

checkInRange(15, 15 , 14)


function evalNumbers(num1, num2, op) {
  if(op == 'add') {
    console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
  }
  else if (op == 'substract') {
    console.log(`Difference of ${num1} and ${num2} is ${num1 - num2}`);
  }
  else if (op == 'multiply') {
    console.log(`Product of ${num1} and ${num2} is ${num1 * num2}`);
  }
  else if (op == 'divide') {
    console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`);
  }
  else if(op == 'modulus') {
    console.log(`Modulus of ${num1} and ${num2} is ${num1 % num2}`);
  }
  else {
    console.log(`${op} is an invalid operation`);
  }
}


evalNumbers(15, 10, 'add')
evalNumbers(15, 10, 'divide')
evalNumbers(15, 10, 'modulus')



function checkLeapYear(year) {
  if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(`Year ${year} is a leap year`);
  }
  else {
    console.log(`Year ${year} is not a leap year`);
  }
}

checkLeapYear(2011)


function isLeapYear(year) {
  return (((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)))
}

function findDaysInMonth(month, year) {
  if(month < 1 || month > 12) {
    console.log(`Invalid Month of value ${month}`);
    return;
  }
  if(month == 2) {
    if(isLeapYear(year)) {
      console.log(`The Month has 29 days`);
    }
    else {
      console.log(`The Month has 28 days`);
    }
  }
  else if(month == 4 || month == 6 || month == 9 || month == 11) {
    console.log(`The Month has 30 days`);
  }
  else {
    console.log(`The Month hs 31 days`);
  }
}

findDaysInMonth(0, 2012)


console.log(
  [1, 4, 3, 0, 4, 5, 4]
  .filter(element => !(element % 2))
  .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
);

const number = [12, 6, 8, 14, 4]
console.log(number.filter(element => !(element % 2)));



let arr = ['t', 'e', 's', 'q', '']
console.log(arr.slice(1,5));






const arrayName = ["Bilbo", "Sahsa", "Nikita"]

const arrAllName = arrayName.forEach((item, index, array) => {
  console.log(`${item} has postion ${++index} in ${array}`);
})
