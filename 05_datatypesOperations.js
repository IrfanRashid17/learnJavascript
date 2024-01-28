//1
let value = 3
let negativeValue = -value   //turns 3 into negative value 
console.log(negativeValue)

console.log(3*4)       //mutiply 
console.log(3**4)      //power

//2
let str1 = "irfan"
let str2 = " rashid"
let str3 = str1 + str2           //concatenates two variables
console.log(str3)

console.log("1" + 2)
console.log("1" + 2 + 2) //if string is at first all are treated as string      //(#Guidelines)read ECMAScript 2023 7.1.1
console.log(1 + 2 + "2")   // if string is at end then conversions happens and after that string will be printed

//3
console.log(true)    //prints true, simply
console.log(+true)   //prints 1

//4             ***************************** increments in JS reading MDN *****************************
let gameCounter = 100
const postGameCounter = gameCounter++
console.log(postGameCounter)      //prints 100 because it is not incremented yet, 100 is only assigned to postGameCounter as constant value, so it cannot be altered
console.log(gameCounter)          //prints 101, because it is now incremented now

let val = 50 
const preVal = ++val    //increments before printing
console.log(preVal)      // 51
console.log(val)         // 51 