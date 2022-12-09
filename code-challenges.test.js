// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { match } = require("assert");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.


// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// Inputs: string
// Outputs: string with coded message

describe("codeMess", () => {
   it("returns a string with a coded message", () => {
      expect(codeMess(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codeMess(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codeMess(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
    })

// Good Fail
// ReferenceError: codeMess is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// Second Run - fails
// Expected: "3cc3ntr1c"
//     Received: "Ecc3ntr1c"

// Third Run - Pass
// ites: 1 passed, 1 total
// Tests:       1 passed, 1 totalPASS  ./code-challenges.test.js
// codeMess
// ✓ returns a string with a coded message


// b) Create the function that makes the test pass.

// Create a function that takes in a string - parameter (string)
const codeMess = (string) => {
// Create a new variable newString that uses .replaceAll function
// Must account for upper and lower case replacements
    let newString = string
    .replaceAll("a", "4")
    .replaceAll("A", "4")

    .replaceAll ("e", "3") 
    .replaceAll ("E", "3") 

    .replaceAll ("i", "1") 
    .replaceAll ("I", "1") 

    .replaceAll ("o", "0")
    .replaceAll ("O", "0");

// Return the new string with the replaced characters
    return newString
}
console.log(codeMess(secretCodeWord1))
console.log(codeMess(secretCodeWord2))
console.log(codeMess(secretCodeWord3))

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe("letterPick", () => {
    it("returns an array of all the words containing that particular letter", () => {
      expect(letterPick(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
      expect(letterPick(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
    


// Good Fail
// ReferenceError: letterPick is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Second test run
// letterPick
// ✓ removes the first item from the array and shuffles the remaining content (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]



// b) Create the function that makes the test pass.

// Create a function that takes in an array and a specific letter (2 parameters)
const letterPick = (array,letter) => {
// returns a modified array wich filters (.filter)
// Note: .filter method requires to take in a function
return array.filter((array) => {
// Return the filtered array that only includes a specific letter
// Need to account for casing so capital letters are not missed in the inlude method. 
// Use .toLowerCase to make all letters lower case in the array
    return array.toLowerCase().includes(letter)})
}


console.log(letterPick(fruitArray,letterA))
console.log(letterPick(fruitArray,letterE))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

describe("fullHouse", () => {
    it("determines whether or not the array is a full house", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
      expect(fullHouse(hand4)).toEqual(true)


    })
    })


// Good Fail
// ReferenceError: fullHouse is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// Create a function fullHouse that take in an array
const fullHouse = (array) => {


// Create for loop to iterate through the array
for(let i=0; i < array.length; ) 

// Create a conditional statement 
// if the array has 3 duplicate values && 2 Duplicate values return true
// else return falue

}
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
console.log(fullHouse(hand4))
