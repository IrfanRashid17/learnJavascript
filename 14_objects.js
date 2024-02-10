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

console.log(jsUser.email)            
console.log(jsUser["email"])        //another method of accessig objects
console.log(jsUser["full name"])       //full name is key but as string and can be accessed by ["full name"] not by .full name
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

//*************** other functions in objects */
jsUser.email = "irfan@amazon.com"        // updated email id here
//Object.freeze(jsUser)                   //freezed email id here
jsUser.email = "irfan@microsoft.com"    // attempting to modify but cannot perform email id is freezed 
console.log(jsUser["email"])

//adding function in objects
jsUser.greeting = function(){
    console.log("Hello programmer")
}

console.log(jsUser.greeting)        //output: [Function (anonymous)]
console.log(jsUser.greeting())      //Hello Code reader  //undefined

//_______________ String Interpolation ________________
jsUser.greetingTwo = function(){
    console.log(`Hello Programmer, ${this.name}`)   //********* String Interpolation */
}

console.log(jsUser.greetingTwo())      //Hello Code reader, Irfan Rashid   //undefined

                                    //Ends