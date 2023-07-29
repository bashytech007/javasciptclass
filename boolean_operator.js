// let x;
// console.log(typeof(typeof x))
// console.log(typeof(typeof y
let isLightOn1 = true;
console.log(isLightOn1);
let isRaining = false;
console.log(false);
let isHungry = false;
console.log(isHungry);
let fasleValue = 3 > 4;
console.log(fasleValue);
let trueValue = 4 > 3;
console.log(trueValue);

let firstname;
console.log(firstname);
let empty = null;
console.log(empty);
// let arr=[]
// console.log(arr)
empty = "2";
console.log(empty);
let firstName = "bashir";
let lastName = "Alli";
console.log(firstName);
console.log(lastName);
//Assingment Operators
//= used to assign a value
let x = 2;
let y = 3;
//+ to add to a value
x += y; // x=2=3
console.log(x);
//- to subtract a value
x -= y; //x=5-3
console.log(x);
//* multiply a value
x *= 3; //x=2*3
console.log(x);
// / divide a value
x /= 2; //x=6/3
console.log(x);
//modulus operator to get the remainder of a division
x %= 2; // x=3%2
console.log(x);
// ** to raise to a power of the value
let b = 3 ** 4; //3*3*3*3
console.log(b);
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf); // 7,1,12,1.33,1, 64

//Calculating the area of circle
const Pi = 3.14;
const radius = 100;
let areaOfCircle = Pi * radius * radius;
//converting cm to meter
areaOfCircle /= 100;
console.log(areaOfCircle);
const gravity = 9.81;
let mass = 72;
//weight =mass * gravity
const weight = mass * gravity;
console.log(weight);
const boilingPoint = 100;
const bodyTemp = 37;

console.log(
  `the normal boiling point is ${boilingPoint} and the normal body temperature is ${bodyTemp}`
);
//comparison operators
console.log(3 > 2);
console.log(3 >= 2);
console.log(3 < 2);
console.log(2 > 3);
console.log(2 <= 3);
console.log(3 == 2);
console.log(3 != 2);
console.log(3 == "3");
console.log(3 === "3");
console.log(3 !== "3");
// console.log(Number (false)) returns 0 so comparing 0 to a false value returns true becuase your checking the datatype

console.log(0 == false);
console.log(0 === false);
console.log(0 == "");
console.log(0 == " ");
console.log(1 == true);
console.log(1 === true);
console.log(undefined == null);
console.log(Number(undefined));
console.log(Number(null));
console.log(undefined === null);
console.log(undefined == null);
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(typeof NaN);

console.log("mango".length == "avocado".length);
console.log("mango".length != "avocado".length);
console.log("mango".length < "avocado".length);
console.log("milk".length == "meat".length);
console.log("milk".length != "meat".length);
console.log("tomato".length == "potato".length);
console.log("python".length > "dragon".length);
console.log("meat".length > "milk".length);
let meat = "meat";
let milk = "milk";
console.log(meat > milk);
let python = "python";
let dragon = "dragon";
console.log(python > dragon);
//&& and operator
let checkOne = 4 > 3 && 10 > 5;
console.log(checkOne);
let checkTwo = 4 > 3 && 10 < 5;
console.log(checkTwo);
let checkThree = 4 > 3 && 10 < 5;
console.log(checkThree);
//|| logical or
let checkFour = 4 > 3 || 10 < 5;
console.log(checkFour);
let checkFive = 4 > 3 || 10 < 5;
console.log(checkFive);
let checkSix = 4 < 3 || 10 < 5;
console.log(checkSix);
//!Negation Examples
let checkSeven = 4 > 3;
let checkEight = !(4 > 3);
console.log(checkEight);
const isLightOn = true;
const isLightOff = !isLightOn;
console.log(isLightOn);
console.log(isLightOff);

let isMarried = !false;
console.log(isMarried);
//Increment Operator
let count = 0;
console.log(++count);
console.log(++count);
console.log(++count);
let countPost = 0;
console.log(countPost++);
console.log(countPost++);
console.log(countPost++);
console.log(countPost++);
console.log(countPost++);

// function addNumber(count){
//   let result= count++
//   console.log(result)
//   let resultOne=++count
//   console.log(resultOne)
//   return result
// }
// console.log(addNumber(5))

let num = 5;
let preNum = ++num;
console.log(preNum);
num = 5;
let postNum = num++;
console.log(postNum);

let isRain = true;
isRain ? console.log("you need a rain coat") : console.log("rain don beat you");
isRain = false;
isRain
  ? console.log("you need a rain coat")
  : console.log("no need for a rain coat");

let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
//date,year,time,hours,mintues,seconds,milliseconds
//current date time,
const now = new Date();
console.log(now);
let presentYear = new Date();
console.log(presentYear.getFullYear());
//month
let presentMonth = new Date();
console.log(presentMonth.getMonth() + 1); //reason we are adding + 1 is because js indexes from zero
//Date
let presentDate = new Date();
console.log(presentDate.getDate());
//Day
let presentDay = new Date();
console.log(presentDay.getDay() + 1); //
//Hours
let presentHour = new Date();
console.log(presentHour.getHours());
//Minutes
let presentMinute = new Date();
console.log(presentMinute.getMinutes());
//seconds
let presentSecond = new Date();
console.log(presentSecond.getSeconds());
const timeNow = new Date(); //
console.log(timeNow.getTime()); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
