const wallet = 500
console.log(wallet)
const bal = new Number(222)
console.log(bal)
 
console.log(bal.toString())           //prints 222 as string
console.log(bal.toString().length)   //prints 3 as the length of 222 is 3

console.log(bal.toFixed(2))  //fixes precision values /// here it prints 222.00 as  it adds two zeroes also //can be used in E-commerce websites etc for calculation purpose

const otherNumber = 23.686465
console.log(otherNumber.toFixed(2))             // prints 23.69 

console.log(otherNumber.toPrecision(5))         //prints 23.686 //here upto 5 digits 


const hundreds = 10000000
console.log(hundreds.toLocaleString())           //prints 10,000,000 i.e in international no. system
console.log(hundreds.toLocaleString(`en-IN`))   //prints 1,00,00,000 i.e in indian no. system


//***************************** MATHS ******************************
console.log(Math)
console.log(Math.abs(-4))         //prints 4
console.log(Math.round(4.6))       //prints 5 (nearest)
console.log(Math.ceil(4.2))     //prints 5  (confirm to top/ceiling)
console.log(Math.floor(4.9))    //prints 4  (confirm to bottom/floor)
console.log(Math.sqrt(144))     //12
console.log(Math.log(3))        //1.0986122886681096


