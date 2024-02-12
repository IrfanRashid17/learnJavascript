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




