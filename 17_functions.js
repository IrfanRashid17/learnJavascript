function myName() {
    console.log("I")
    console.log("R")
    console.log("F")
    console.log("A")
    console.log("N")
}

myName()  //execution

/*function sum(num1,num2){
    let sum = num1 + num2
    console.log(sum)
    
}
sum(3,7)*/

function sum(num1,num2){
    let sum = num1 + num2
    return sum
}
const result = sum(3,7)
console.log("Sum of two numbers is:", result)
