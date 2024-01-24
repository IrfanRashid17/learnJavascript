const accountId = 144553           // used for constants
let accountEmail = "irfan@gmail.com"  // prefered over VAR as it overcomes the problem of block scope
var accountPassword = "12345"      // not prefered 

accountCity = "Rahmoo"            //not a good way to provide memory to variable without using keywords LET or VAR
let accountState;             //if not assigned any value,then it will return UNDEFINED

// accountId = 21

accountEmail = "acv@j.com"            //used to print single value
accountCity = "mal"
accountPassword="12345556"

/*.console.log(accountId);
console.log(accountEmail)
console.log(accountCity);*/

//**********************************
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);  //USED TO PRINT MULTIPLE VALUES IN THE TABULAR FORMAT, VARIABLES ARE SEPARATED BY COMMAS