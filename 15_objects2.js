const guestUser = new Object()      //singleton object
const guestUser2 = {}           //non-singleton object 

console.log(guestUser)        //returns same results i.e. {}
console.log(guestUser2)         // {}
guestUser.id = "123abc"
guestUser.name = "Irfan"
guestUser.isLoggedIn = false

const owner = {
    email: "abc123@gmail.com",
    fullname: {
        userFullName: {
           firstName: "irfan rashid",
           lastName: "dar"
                      }
               }
}

console.log(owner.fullname.userFullName.lastName)

console.log(owner.fullname?.userFullName.firstName) // Note: '?'  adds some protection like if the variable or object doesn't exist
//we can avoid if else etc by this

const obj1 = { 1: "a", 2:"b", 3:"c" }
const obj2 = { 4:"d", 5:"e"}

const obj3 = {obj1,obj2}
console.log(obj3)

const obj4 = Object.assign({},obj1,obj2)         //this method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object   //it merges
console.log(obj4)

const obj5 = {...obj1,...obj2}    //SPREAD AND COMBINE 
console.log(obj5)