// Array of Current Users
let currentUsers:string[] =["Ali","Amir","Ana","Arfa","Arij"]
// Array of new users Name

let newUsers:string[] =["Eram","Amir","Ana","Rehan","Mobin"]
// Loop through new_users to check for username avaibility
newUsers.forEach(new_one_user => {
    let our_condition =currentUsers.some(currentoneUser=>currentUser())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`);
        
    }
    else{ console.log(`This Username ${new_one_user} is already available!`)}
})