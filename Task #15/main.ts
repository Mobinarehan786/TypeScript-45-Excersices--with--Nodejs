let guestList = [ "Eram","Rehan", "Mobina"]
 
 let dontCome = guestList[0];
 console.log(dontCome ,"Nahi a skti")

 guestList.splice(0, 1, "Ahmed");

 guestList.forEach(guest => console.log(`Salam ${guest} would you like to Dinner with me`))