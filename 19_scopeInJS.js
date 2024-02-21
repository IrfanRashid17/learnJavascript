var trying = 999
 
if (true){
    let a = 10
    const b = 20
    var trying = 30
    console.log("Inner IF :", trying) 
}
console.log(trying)   //it will overide the variable TRYING= 999 with 30, which was global but now changed by local block

/*for(i=0; i<ArrayBuffer.length;i++){     //'i' is used inside the block
    const element= array[i]
}*/

//++++++++++++++++ function inside function (Scope within block and outside the block) ++++++++++++++++++
function outerFunction(){
    let username = "Irfan"
    function innerFunction(){
        const innerUser = username     
        console.log(username)       //innerFunction can access the outerFuctions variable but outerFunction cannot access the innerFunction variables
    }
    innerFunction()
}
outerFunction()

// ******************* Example 2: *********************
if(true){
    const username = "If Irfan"
    if(username === "If Irfan"){
        const father = " Rashid"
        console.log(username + father)
    }
}