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

let myCreatedDate = new Date(2023, 0, 23)     //******** Note: js counts months from 0 to 11 ********
let myCreatedDate2 = new Date(2023, 2, 23)     //Output: Thu Mar 23 2023    // 2 represents Mar (0 - 11) 
console.log(myCreatedDate2.toDateString())

let otherCreatedDates = new Date('2023-12-19')     //Output:  12/19/2023 (MM/DD/YYYY)  remember returns invalid date if given 13 as MM
console.log(otherCreatedDates.toLocaleString())

let otherCreatedDates2 = new Date("01-14-2023")     
console.log(otherCreatedDates2.toLocaleString())

let myTimeStamp = Date.now()
//console.log(otherCreatedDates2.getTime())

console.log(Math.floor(Date.now()/1000))     //used to convert into seconds for short value


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth)
console.log(newDate.getHours)
console.log(`Today is ${newDate.getDay} and the month is ${newDate.getMonth} `)