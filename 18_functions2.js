function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,300,400))    //will print only 200 

//so we use REST operator for multiple arguments
function calculateCartPrice2(...num1){     //... three dots are callled as rest operator
    return num1
}
console.log(calculateCartPrice2(200,300,400))    //will print all values as an array

