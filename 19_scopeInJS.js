var trying = 999
 
if (true){
    let a = 10
    const b = 20
    var trying = 30
    console.log("Inner IF :", trying) 
}
console.log(trying)   //it will overide the variable TRYING= 999 with 30, which was global but now changed by local block

for(i=0; i<ArrayBuffer.length;i++){     //'i' is used inside the block
    const element= array[i]
}
