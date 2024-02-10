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

console.log(owner.fullname.userFullName.firstName)

console.log(owner.fullname?.userFullName.firstName) //? adds some protection like if the variable or object doesn't exist
//we can avoid if else etc by this


