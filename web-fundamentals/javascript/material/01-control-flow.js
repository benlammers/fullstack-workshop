/*  FOR LOOP  */

// Over Arrays
let nums = [1, 2, 3, 4, 5]

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
}

for (num of nums) {
    console.log(num)
}

nums.forEach(num => console.log(num))

// Over Objects
let person = { age: 22, name: "Ben", location: "Kingston" }

for (prop in person) {
    console.log(prop)
}

/*  IF/ELSE  */
let number = 8

if (number > 5) {
    console.log("Number is greater than 5")
} else {
    console.log("Number is less than or equal to 5")
}

// Conditionals with one statement can be simplified to one line
if (number < 5) console.log("Number is less than 5")        
else if (number < 10) console.log("Number is greater or equal to 5 and less than 10")
else console.log("Number is greater than 10")


/*  EQUIVALENCE OPERATORS

    == and != perform type conversion therefore 25 == "25"
    === and !== are stricker and do not perform type conversion

    It is almost always preferred to use === and !==
*/

25 == "25"                  // true
25 === "25"                 // false

25 != "25"                  // false
25 !== "25"                 // true


/*  TRUTHY VS FALSY  */
const isTrue = (name, value) => {
    if (value) console.log(`${name} is true`)
    else console.log(`${name} is false`)
}

// Falsy
let age;

isTrue("undefined variable", age)       // false
isTrue("null", null)                    // false
isTrue("undefined", undefined)          // false
isTrue("0", 0)                          // false
isTrue("empty string", "")              // false

// Truthy
age = 12

isTrue("non-null variable", age)        // true
isTrue("10", 10)                        // true
isTrue("-10", -10)                      // true
isTrue("non-empty string", "test")      // true
isTrue("empty object", {})              // true
isTrue("empty array", [])               // true


/*  TERNARY OPERATOR  */
const isAboveTen = num => {                 // condition ? true value : false value
    let message = num > 10 ? "Num is greater than 10" : "Num is less than or equal to 10"
    console.log(message)
}


/*  AND/OR  */
false && "dog"              // false            
0 && "dog"                  // 0      

false || "dog"              // "dog"
0 || "dog"                  // "dog"





