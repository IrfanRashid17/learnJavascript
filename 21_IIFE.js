//IIFE (Immediately Invoked Function Expressions)
//used to overcome from the pollution of Global scope declaration

(function chai(){          //this is named IIFE
                          //iife syntax: (function is inside( )) ()
    console.log("I'm here,Akhi")
})();   //semicolon is needed to invoke where to end one code, as we have declared another function below 


( () => {
    console.log("I'm here, Bro")
})();              //if semicolon not given, then there will be error

( (name) => {
    console.log(`I'm here, ${name}`)
})("brother")             //passing argument explicitly


