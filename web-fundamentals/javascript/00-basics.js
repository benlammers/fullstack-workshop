/*  TYPES  */
let age = 16                                    // Number

let isTeenager = true                           // Boolean

let name = "Peter"                              // String

let person = { age: 16, name: "Peter" }         // Object

let things = [16, true, "Peter"]                // Array


/*  LET VS CONST  */
let varString = "This string can be reassigned" // Declares a variable that can be reassigned
varString = "Reassigned the string"

const constString = "This string cannot be reassigned" // Declares a constant that cannot be reassigned

const numArray = [1, 2, 3, 4, 5]                // Does not make it immutable
                                                // Arrays or objects declared by const can have their contents changed
numArray[0] = 10                                // numArray = [10, 2, 3, 4, 5] 


/*  LOGGING  */
                                                // Logging to the console
console.log("This is logged to the console")    // Console: This is a logged to the console

let alert = "This is an alert"                  // Logging a variable to console
console.log(alert)                              // Console: This is an alert

let pizzas = 12                                 // Logging multiple values to the console
console.log("Num of pizzas: ", pizzas)          // Console: Num of pizzas: 12

let toppings = 4                                // Logging multiple variables with variable names
console.log({ pizzas, toppings })               // Console: { pizzas: 12, toppings: 4 }


/*  FUNCTIONS  */
function sum(num1, num2) {                      // Using function syntax to declare function
    return num1 + num2
}

const difference = (num1, num2) => {            // Using arrow function
    return num1 - num2
}

const square = num => num ** 2                  // Using arrow function with 1 parameter