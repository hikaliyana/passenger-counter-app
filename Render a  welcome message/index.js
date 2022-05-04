// let username = "Yan"
// let message = "You have three new notifications"
// let messageToUser = message + "," + username + "."
// console.log(messageToUser)


// let name = "Hikayan"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name + "!"
// console.log(myGreeting)

// console.log(4 + 5) // 9  numbers
// console.log("2" + "4") // "24" strings so ""
// console.log("5" + 1) //"51"  strings so ""
// console.log(100 + "100") // "100100" strings so ""

let welcomEL = document.getElementById("welcome-el")

let name = "Hikayan"
let greeting = "Welcome mi amigo, me llamo "
welcomEL.innerText = greeting + name
welcomEL.innerText += " 😄 "