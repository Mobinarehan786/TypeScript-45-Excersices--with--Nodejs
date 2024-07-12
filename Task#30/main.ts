import { userInfo } from "os";

// Creating an Array
let userNames =["Ali","Ahmed","Rehan","Admin","Usama"];

// Using Foreach Loop on array
userNames.forEach(oneUser =>{
    if(oneUser==="Admin"){
        console.log(`Hello ${oneUser},would you like to to see a status report?`);
    }else{
        console.log(`Hello ${oneUser},Thank u for loging again`);
        
    }
    
    
    })
