const array = [0,1,2,3,4,5,6,7,8,9,'irfan rashid']   //data items can be different 
console.log(array)
console.log(array[10])   //location wise

//SHALLOW COPY : A shallow copy of an object is a copy whose properties share the same references(point to the same underlying values)

//DEEP COPY : A deep copy of an object is a copy whose properties do not share the same references 

//********* Another method of declaring an array 
const myArr =new Array(1,2,3,4,"irfan rashid")
console.log(myArr)

//ARRAY METHODS by investigation
myArr.push(5)      //**** adds the item to array */
console.log(myArr)

myArr.pop()          // removes the last item    
console.log(myArr)          //// Output: [ 1, 2, 3, 4, 'irfan rashid' ]

myArr.unshift(10)
console.log(myArr)      // Output: [ 10, 1, 2, 3, 4, 'irfan rashid' ]

myArr.shift()
console.log(myArr)      //Output: [ 1, 2, 3, 4, 'irfan rashid' ]

console.log(myArr.includes(6)) //returns boolean value
console.log(myArr.indexOf(3))    //returns index of a particular data item

const myNewArray = myArr.join()  
console.log(myArr)
console.log(myNewArray)      //prints same items but as a string
console.log(typeof myArr)   //returns object type
console.log(typeof myNewArray) //returns string type

//********************* SLICE AND SPLILCE *********************
console.log("A", myArr)          //values are: [1,2,3,4,"irfan rashid"]
//use of slice
const myn1 = myArr.slice(1,3)  // 1-start and 3-end index 
console.log(myn1)               // prints  [ 2, 3 ] i.e it doesn't include end index

console.log("B",myArr)             ////values are: [1,2,3,4,"irfan rashid"]
//use of splice
const myn2 = myArr.splice(1,3)   //1-start and 3-end index
console.log(myn2)                //[ 2, 3, 4 ] i.e it includes end index

console.log("C",myArr)      //prints : C [ 1, 'irfan rashid' ]

//DIFFERENCE BETWEEN SLICE AND SPLICE
//1. Slice doesn't manipulate the origival array, while
//  Splice manipulates the original array 

//2. Slice doesn't include the end range while as Splice includes the end range

