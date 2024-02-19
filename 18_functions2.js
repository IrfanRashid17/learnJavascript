function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,300,400))    //will print only 200 

//so we use REST operator for multiple arguments
function calculateCartPrice2(...num1){     //... three dots are callled as rest operator
    return num1
}
console.log(calculateCartPrice2(200,300,400))    //will print all values as an array

                        //********* Passing objects***************/
const user = {
    username: "Irfan",
    price: 999
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}

handleObjects(user)
//handleObjects({username: "Sam", price: 777})   //passing values during execution


            //************************** Passing Arrays ***************************** */
const newArray = [11,22,33,44,55]
function arrayFunction(getArray){
    return getArray[1]
}
console.log(arrayFunction(newArray))
console.log(arrayFunction([10,20,30,40,50]))      //passing different values other than the already specified