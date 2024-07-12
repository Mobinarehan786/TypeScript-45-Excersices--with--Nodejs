let usersNames=["mahad","Zeeshan","Ali","Admin","Usman"]
// Remove all values from our array Now our array is empty
usersNames=[]

if(usersNames.length===0){
    console.log(" Your Array is empty We need to find some users! ");
    
}
else{  
    // Using ForEach Loop on Array
    usersNames.forEach(oneUser =>{
    if(oneUser==="Admin"){
        console.log(`Hello ${oneUser},would you like to to see a status report?`);
    }else{
        console.log(`Hello ${oneUser},Thank u for loging again`);}
        
    })}
    
    
    
