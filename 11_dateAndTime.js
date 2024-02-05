//DATE objects represent a single moment in time in a platform independent format.
//Artirary date taken is midnight of the beginning of January 1,1970, UTC
//Temporal object will be implemented in future like Temporal.Now.instant() etc //it get the current systems exact time //it is still a proposal 

let myDate = new Date()
console.log(myDate)

console.log(myDate.toString())                // result : Mon Feb 05 2024 19:04:47 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())    //it Returns a date as a string value        //output: Mon Feb 05 2024
console.log(myDate.toISOString())   //returns the date and time using ISO Standard format      //2024-02-05T13:34:47.549Z
console.log(myDate.toLocaleDateString())      //2/5/2024
console.log(myDate.toJSON())             //2024-02-05T13:34:47.549Z
console.log(myDate.toLocaleString())    //2/5/2024, 7:07:51 PM

//let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date(2023, 2, 23)
console.log(myCreatedDate.toDateString())



