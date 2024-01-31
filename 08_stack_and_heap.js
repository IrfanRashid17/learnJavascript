// the PRIMITIVE values are stored in STACK, remember the values only get COPY of variables
// and the NON-PRIMITIVE values are stored in HEAP, variables get the reference 

                 // PRIMITIVE 
let myAccountName = "irfan rashid"

let myAnotherName = myAccountName
myAnotherName = "Dawood"
console.log(myAccountName)
console.log(myAnotherName)

                // NON-PRIMITIVE 
let customerOne = {
    contact: 7000612345,
    email : "abc@gmail.com"
}

let customerTwo = customerOne
customerTwo.email = "xyz@gmail.com"

console.log(customerOne.email)
console.log(customerTwo.email)
