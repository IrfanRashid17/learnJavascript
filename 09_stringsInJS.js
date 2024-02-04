const name = "Irfan-Rashid"

const subjects = 5
//console.log(name + subjects + " value");    //OUTDATED also NOT RECOMMENDED NOW 

//NOWADAYS BACK TICKS ARE USED i.e. ` `
// string interpolation
console.log(`Hello, my name is ${name} and my total subjects are ${subjects}`)


const myVillage = new String('Rahmoo')   // Another way of defining a string
console.log(myVillage[0])
console.log(myVillage.__proto__)      // it is as: double dash proto double dash(_ _proto_ _) without spaces


console.log(myVillage.length) //results will be 6 
console.log(myVillage.toUpperCase())   //()parenthesis are must as toUpperCase() is a function
console.log(myVillage.charAt(4))
console.log(myVillage.indexOf('m'))

                    //SUBSTRING FUNCTION
const newVillage = myVillage.substring(0, 4)   //4th index is not included i.e. only 0,1,2,3
console.log(newVillage)

                    //SLICE FUNCTION
const anotherVillage = myVillage.slice(-3, 4)   /*uses -ve values, turns from backwards also and
                                                  prints upto the  mentioned STOP character*/                       
console.log(anotherVillage) 

                    //Strings with spaces
const name2 = "     irfan  "
console.log(name2)             //     irfan    
console.log(name2.trim())     //prints without spaces

const url = "https://irfan.com/irfan%22rashid" 
console.log(url.replace('%22', '-'))            //replaces %22 with -
console.log(url.includes('iriz'))                //false as iriz is not included in url variable

const myDashedName = new String('Irfan-Rashid-Dar')        //'Irfan', 'Rashid', 'Dar'
console.log(myDashedName.split('-'))                     //