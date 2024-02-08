//Singleton : when we develop with LITERALS then singleton is not formed
//If developed by constructor then singleton is formed

//object literals 
const jsUser = {
    name: "Irfan Rashid",
    "full name": "Irfan Rashid Dar",
    age: 22,
    address: "Rahmoo",
    email: "abc@google.com", 
    isLoggedIn: false,
    lastLoginDays: ["Monday, Friday"]
}

console.log(jsUser.email)            //not recommended
console.log(jsUser["email"])        //recommended
console.log(jsUser["full name"])       //full name is key but as string and can be accessed by ["full name"] not by .full name, so ["email"](square notation) etc type of accessing objects is highly recommended
//console.log(jsUser.full name)       //error  and cannot be accessed 

//*********************** TAKE SYMBOL AS A KEY IN OBJECTS AND PRINT *********************
const mySymbol = Symbol("Symbol as key")

const fruits = {
    name: "Apple",
    rate: 120,
    [mySymbol]: "Symbol as key in objects",
    address: "Rahmoo",
    "Variety": "Irfan Rashid Dar"
}
console.log(fruits[mySymbol])
