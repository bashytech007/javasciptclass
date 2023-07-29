let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo); //true

let js = "js";
let py = "Python";

console.log(js == py); //false

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); //false
//Non-primitve Data Types
let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums); //returns [10,2,3]
//Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.
let numbs = [1, 2, 3];
let numbers = [1, 2, 3];
console.log(numbs == numbers); //returns false

let userOne = {
  name: "bashir",
  role: "teacher",
  country: "Nigeria",
};

let userTwo = {
  name: "bashir",
  role: "teacher",
  country: "Nigeria",
};
console.log(userOne == userTwo);

let age=35;
const gravity=9.81
let mass=72
// const PI=3.14
const boilingPoint=100
const bodyTemp=37
console.log(age,gravity,mass,boilingPoint,bodyTemp)

const PI=Math.PI
console.log(PI)
console.log(Math.round(PI))// rounded 3
console.log(Math.round(9.8))//rounding to 10
console.log(Math.floor(PI))//rounding down
console.log(Math.ceil(PI))//rounding up
console.log(Math.min(-5,3,20,4,5,10))//returns- 5
console.log(Math.max(-5,3,20,4,5,10))//20 returns 20 the maximum

const randNum=Math.random()// creates a random number btw 0 and 0.9999

console.log(randNum)
//creating a random number btw 0 and 10
const randomNum=Math.floor(Math.random() * 11)//creates random num btw 0 and 10
console.log(randomNum)
//Absolute value
console.log(Math.abs(-60))//60
//square root
console.log(Math.sqrt(100))//returns 10
console.log(Math.sqrt(81))//should return 9

console.log(Math.pow(4,2))//returns 16

console.log(Math.E)//2.718
let randomNumber=Math.random()
let numBtwZeroAndTen=randomNumber * 11 + 1
console.log(numBtwZeroAndTen)
//random number between 50 and 100
// console.log(Math.floor(Math.random(100 - 50))) + 50;
function sumPositiveIntegers(arr) {
  return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
}

// Example usage:
const input = [2, -3, 5, -8, 10, 7];
const output = sumPositiveIntegers(input);
console.log(output); // Output: 24 (2 + 5 + 10 + 7)

let randomNumRoundToFloor=Math.floor(numBtwZeroAndTen
)
console.log(randomNumRoundToFloor)

let space=" "
let firstname="bashir"
let lastname="aremu"
let country="Finland"
let city="lagos"
let language="javascript"
let bashAge=200
let job="teacher"
let quote ="the saying seeing is believeing is not valid in 2020"
let quoteWithBackTick = `the saying seeing is believeing is not valid in 2020`

let fullName=firstname + space + lastname
console.log(fullName)
let personInfoOne=fullName + '. I am'+ bashAge + '. years old' + ' i live in'+ country
console.log(personInfoOne)
const paragraph =
  "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";
console.log(paragraph)
console.log('I hope everyone is enjoying 30 days of javascript')
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backlash symbol (\\)')
console.log('In every programming language it starts with \'Hello,World!')
console.log('In every programming langue it  starts with \'Hello,WOrld!')
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

console.log('The sum of 2 and 3 is 5')// statically typing
let a=3;
let b=2;
console.log(`the sum of ${a} and ${b} is ${a+b}`)
let fullName1=firstname + " "+ lastname

let personInfoTwo=`I am ${fullName}. I am ${age}. I live in ${country}`
let personInfoThree=`I am ${fullName}. I live in ${city}, ${country}, I am ${job} i teach ${language}`
let c=4
let d=5
console.log(`${c} is greater than ${d}: ${c>d}`)
let string='JavaScript'
let firstLetter=string[0]
console.log(firstLetter)
let secondLetter=string[1]
let thirdLetter=string[2]
let lastLetter=string[9]
console.log(lastLetter)

let lastIndex=string.length -1
console.log(lastIndex)
console.log(string[lastIndex])
//upperCase
console.log(string.toUpperCase())
//lowerCase
console.log(string.toLowerCase())
console.log(country.toLowerCase())
//substr takes two argument the starting index and the  number of characters to slice
console.log(string.substr(4,6)) // to get script 
console.log(country.substr(3,4))//tp get land
//substring is a little different  it takes the starting index and the and stopping index but doesn't touch character at the stopping index

console.log(string.substring(0,4))//to get java
console.log(string.substring(4,10))//Script
console.log(string.substring(4))//script again
// from country substring
console.log(country.substring(0,3))//Fin
console.log(country.substring(3,7))//land
console.log(country.substring(3))//land
//to change to an array
let newStr='30 Days of Javascript'
console.log(newStr.split())
console.log(newStr.split(' '))

let newName='Emmanuel'
console.log(newName.split())
console.log(newName.split(''))

let spaceString= '  30 Days Of Javascript '
console.log(spaceString)
console.log(spaceString.trim())

let spaceName= ' Bashir '
console.log(spaceName)
console.log(spaceName.trim())

let includeString=' 30 Days Of JavaScript'
console.log(includeString.includes('Days'))
console.log(includeString.includes('days'))
console.log(includeString.includes('Script'))
console.log(includeString.includes('script'))
console.log(includeString.includes('java'))
console.log(includeString.includes('Java'))

let includeCountry='Nigeria'
console.log(includeCountry.includes('Nig'))//true
console.log(includeCountry.includes('nig'))//false
console.log(includeCountry.includes('eria'))//true
console.log(includeCountry.includes('Eria'))//false
//.replace(). takes as a parameter the old substring and new substring

let replaceString='30 Days Of Javascript'
console.log(replaceString.replace('Javascript','Python'))
let replaceCountry='Finland'
console.log(replaceCountry.replace('Fin','Noman'))
//charAt() :Takes index and it returns the value at that index
let charString='30 Days Of Javascript'
console.log(charString.charAt(0)) //3
let lastCharIndex=charString.length - 1
console.log(charString.charAt(lastCharIndex))//t

let indexString='30 Days Of Javascript'
console.log(indexString.indexOf('D'))
console.log(indexString.indexOf('Days'))
console.log(indexString.indexOf('days'))
console.log(indexString.indexOf('a'))





