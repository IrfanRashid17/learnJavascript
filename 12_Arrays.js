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