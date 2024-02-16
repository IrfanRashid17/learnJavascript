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

//****************** More ways by which arguments can be taken *********************

function loginUserMessage(username){
    if(username === undefined) {                     // or    if(!username)  
            console.log("Please Akhi, write a username")
            return                      
    }
    return `${username} is now logged in`
}

loginUserMessage("Irfan Rashid")   //it just returns and doesn't print anything
console.log(loginUserMessage("Irfan Rashid"))
console.log(loginUserMessage())        //returns undefined 

