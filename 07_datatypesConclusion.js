                                //Primitive datatypes
/* String, Number, Boolean, Null, Undefined, Symbol, BigInt*/
const id = Symbol('999')
const anotherId = Symbol('999')
console.log(id)
console.log(id === anotherId) //returns false as these are not equal to eachother

const bigNumber = 323534673454575453523674534523573n   // n is included for the rep. of big numbers
console.log(bigNumber)


                                //Reference type (Non-primitive)
                                //Array, Objects, Functions
            //Array
const friends = ["Junaid", "Adil", "Haroon", "Sahil"]

            //objects
let objectIs = {
    name : "Irfan",
    age : 22
}

            //Function
const myFunction = function() 
    {
        console.log("Reading at night is too soothing")
    }
   // console.log(typeof (myFunction) //returns the type of function i.e. function
      myFunction()  //calling myFunction

      /*Note: the return type of non-primitive datatypes is object but 
      remember the object type of function is termed as function object*/

//FOR FURTHER INFORMATION : VISIT BELOW LINK
//     https://262.ecma-international.org/5.1/#sec-11.4.3
