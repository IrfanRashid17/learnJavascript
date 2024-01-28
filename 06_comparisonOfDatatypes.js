    console.log("2" < 1)       //false as 2 !< 1 
    console.log("22" <= 22)  // true as js compares non-string and string values
    // so remember to compare values of same datatypes everytime, ***** TYPESCRIPT language stricts it 

    console.log(null < 0)
    console.log(null > 0)
    console.log(null <= 0)   //true as null is equal to 0
    console.log(null == 0)   //false

    console.log(undefined < 0)     //all false
    console.log(undefined > 0)
    console.log(undefined <= 0)   
    console.log(undefined == 0)   
 
    //===
    console.log("2" === 2 )  //strict check  i.e checks datatypes alongwith values  
    console.log("2" === "2" ) //true as the datatype of both values is same 