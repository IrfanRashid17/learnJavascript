//This keyword refers to the current context(i.e values)
const user = {
    username: "Irfan Rashid",
    servicePrice: 999,
    welcomeMessage: function(){
        console.log(`${this.username} WELCOME TO I-TECH SOFTWARES`) //This keyword refers to the current context(i.e values)
        console.log(this)    /*Here this prints the current context or values 
                                   {
                                     username: 'Irfan Rashid',
                                     servicePrice: 999,
                                      welcomeMessage: [Function: welcomeMessage]
                                      }   */
    }
}
user.welcomeMessage()        // first execution
user.username= "Junaid Khan"
user.welcomeMessage()       // exection after replacing irfan rashid with junaid khan

console.log(this)  //prints: {} empty object because we are in the Node environment and global environment is empty yet, which is the current context for THIS and 
//IMPORTANT: when executing in browser, THIS shows WINDOW object 


/*function cricket(){
    console.log(this)
}
cricket()

//*********************** Arrow functions *******************************/
const cricket = () => {
    console.log(this)
}
cricket()     

/*const sum = (num1,num2) => {
    return num1 + num2
}
console.log(sum(4,5))
*/

const sum = (num1,num2) => (num1 + num2)    //implicit return //parenthesis aren't used //and return keyword is also omitted  //techique is used highly in REACT 
console.log(sum(4,5))


// const sum = (num1,num2) => (username: "irfan")  //error we need to write objects in curly parenthesis
const newObject = () => ({username: "irfan"})


