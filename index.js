// document.getElementById("count-el").innerText = 5


// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// let myAge = 32
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


// function happynumber() {
//   console.log(42)
// }

// happynumber()

// happynumber()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36


// function loglaptime() {
//   // let totaltime = lap1 + lap2 + lap3
//   // console.log(totaltime)
//   console.log(lap1 + lap2 + lap3)
// }

// loglaptime()

// let lapsCompleted = 0

// function increment() {
//   lapsCompleted = lapsCompleted + 1
// }

// increment()
// increment()
// increment()

// console.log(lapsCompleted)

let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
  count += 1
  countEL.textContent = count
}

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEL.textContent = 0
  count = 0
}

/* RECAP
@ script tag
@ variavles / let xxx =
@ numbers
@ strings / ""
@ console.log()
@ functions
@ The DOM
@ getELementByID
@ innexText
@ textContent */

// let firstName = "Yan"
// let lastName = " Jiang"
// let fullName = firstName + lastName
// console.log(fullName)

// let name = "Linda"
// let greeting = "Hi there"

// function greet() {
//   console.log(greeting + ", " + name + "!")
// }

// greet()

// let myPoints = 3

// function add3Points() {
//   myPoints += 3
// }
// function remove1Point() {
//   myPoints -= 1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// console.log(myPoints)

// console.log("2" + 2) // "22"
// console.log(11 + 7) // 18
// console.log(6 + "5") // "65"
// console.log("My points: " + 5 + 9) // "My points: 59" ***********
// console.log(2 + 2) // 4
// console.log("11" + "14") // "1114"



