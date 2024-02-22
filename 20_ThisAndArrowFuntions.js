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


