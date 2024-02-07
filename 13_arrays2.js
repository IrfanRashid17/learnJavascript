const students = ["Junaid", "Shahid","Sahil","Irfan"]
const village = ["Kakapora", "Pampore","Rahmoo","Malwanipora"]
//students.push(village)   //it doesn't merge items but adds array as the data i.e now array has 5 elements
//console.log(students)

const holder = students.concat(village)
console.log(holder)   //it doesn't merge items but adds array as the data i.e now array has 5 elements

                //********* SPREAD OPERATOR ***********
const studentsAddress = [...students,...village]   //arrat ist and array 2nd //we can add multiple arrays
console.log(studentsAddress) 

const anotherArray = [1,3,3,5,5,,[3,2,3], 4,4,[3,4,5,[4,3,7,]]]
const separatedArray = anotherArray.flat(Infinity)              //prints array without any problem
console.log(separatedArray)


//************************** isArray, from, of (Must read) **************************
console.log(Array.isArray("Irfan"))
console.log(Array.from("Irfan"))
console.log(Array.from({name: "Irfan"}))        //important and is very interesting

let score = 100
let score1 = 200
let score3 = 300
console.log(Array.of(score,score1,score3))    //converts into array  



