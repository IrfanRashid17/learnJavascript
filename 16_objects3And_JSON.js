// ************************** Object De-structuring highly used in REACT *************************
const course  = {
    courseName : "Javascript by Irfan",
    price: "999",
    courseTutor: "irfan rashid"
}

console.log(course.courseTutor)        //Basic method

const {courseTutor} = course    // de-structured object EXTRACTING COURSETUTOR HERE
console.log(courseTutor)       //another method of printing 

//______________________________________________________________________

const {courseTutor: instructor} = course    // de-structured object EXTRACTING COURSETUTOR HERE and renaming object as instructor
console.log(instructor)    

//({ anything in this assume it is de-structuring})


//****************************** JSON IN JS ***************************** */
//Remember: JSON names require double quotes. JavaScript names do not.
/* JSON stands for JavaScript Object Notation 
It is a lightweight data interchange format.
It is language independent
It is self-describing 
JSON Example
This JSON syntax defines an employees object: an array of 3 employee records (objects):

*********** JSON Example **********/

/*{
"employees": [
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}*/

/*JSON Data - A Name and a Value
JSON data is written as name/value pairs, just like JavaScript object properties.

A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

"firstName":"John"
JSON names require double quotes. JavaScript names do not.*/

/************************** JSON Arrays ************************************
JSON arrays are written inside square brackets.

Just like in JavaScript, an array can contain objects:
*/

/*{
"employees": [
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}

//  *********************** useful api ******************* 
// random user me api

//******************** tool for understanding JSON in better way **************
//jsonformatter.org*/