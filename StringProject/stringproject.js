//This program helps you find the Free parking days based on House Number. 
// It also defines your Neighborhood based on your zip.

let address = "450 Park Avenue" // User inputs their address that begins with a 3 digit house number 
let zip = "11375" // User input (NYC metro area only)
let houseNum = address.slice(0,3)
let lastchar = address.length;
let parking1 = "Free parking on Tuesday & Thursday"
let parking2 = "Free parking on Wednesday & Friday"
let manmessage = "Skyscrapers and tunnels - you are in Manhattan!"
let bklnmessage = "Brooklyn we go hard!"
let bnxmessage = "Where Jenny is still from..."
let qnsmessage = "I am Queens boulevard"
let simessage = "Far far away and free ferry. You are in Staten Island."
let njmessage = "You are probably in New Jersey. Try again! "
let message
let parking

for (let counter = 0; counter<=zip; counter++)
{
    for(let counter =0; counter<=houseNum; counter++)
    {
        if(houseNum%2==0){
            parking = parking1.toUpperCase()
            }
            else {
            parking = parking2.toLowerCase()
            }      
    }
    if(zip>=10010 && zip<=10040) {
    message = manmessage.replace(/skyscrapers/gi, "tall buildings")
    }
    else if(zip>=11200 && zip<=11240){
    message = bklnmessage.toUpperCase
    }
    else if(zip>=10400 && zip<= 10475){
    message = bnxmessage.replace("Jenny", "JLo")
    }
    else if(zip>=11300 && zip <=11697){
    message = qnsmessage.padStart(qnsmessage.lenth+5, "*") 
    }    
    else if(zip>=10302 && zip<=10314){    
        message = simessage.padEnd(simessage.length+10, "*")
    }   
    else{
    message = njmessage.toUpperCase
    }
}

console.log("Your address is: "+ address.concat("  " + zip.padEnd(zip.length+5," ")))
console.log("Your neighborhood's moto is: " + message + " | "+ parking)
