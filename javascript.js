let Str2='Todays class id about data types'
//search
console.log(Str2.search(/a/));
//match
console.log(Str2.search(/t/i));
//repeat
let myLastname='aremu'
console.log(myLastname.repeat(3))

let numOne=3;
let numTwo=3;
console.log(numOne==numTwo);//true

let js="js"
let py="Python"

console.log(js==py);//false

let lightOn=true
let lightOff=false
console.log(lightOn==lightOff)//false
//Non-primitve Data Types
let nums=[1,2,3]
nums[0]=10;
console.log(nums)//returns [10,2,3]
//Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.
let numbs=[1,2,3]
let numbers=[1,2,3]
console.log(numbs==numbers);//returns false

let userOne={
    name:'bashir',
    role:'teacher',
    country:'Nigeria'
}

let userTwo={
    name:'bashir',
    role:'teacher',
    country:'Nigeria'

}
console.log(userOne==userTwo)
