let score = 33          //number
console.log(typeof(score))             
console.log(typeof score)             //can be checked without braces too

let scoreAsString = "33abc"         // now string
console.log(typeof(scoreAsString))

let valueInScore = Number (scoreAsString)       //here, Number is a class based datatype and we are typecasting to number datatupe, despite the fact  "scoreAsString" variable was a string, but now typecasted to number 
console.log(typeof(valueInScore))      

console.log(valueInScore)         //NaN - actually it is not number

//****************************************** Short Notes ******************************
/*       value => output
         "33" => 33
         "33abc" => NaN
         null => 0
         true => 1; false => 0       */

let isLoggedIn = 1
let booleanIsLogged = Boolean(isLoggedIn)
console.log(booleanIsLogged)

//****************************************** Short Notes ******************************
/*       value => output
         1 => true; 0 => false
         "" => false 
         "irfan" => true */