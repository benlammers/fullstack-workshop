let cars = ["Honda Civic", "Toyota Corolla", "Nissan Sentra"]
let trucks = ["Ford F150", "Toyota Tacoma", "Chevrolet Silverado"]

/*  SPREAD OPERATOR  */
cars = [...cars, "Chevrolet Malibu"]        //    cars = ["Honda Civic", "Toyota Corolla", "Nissan Sentra", "Chevrolet Malibu"]

let vehicles = [...cars, ...trucks]         //    vehicles = ["Honda Civic", "Toyota Corolla", "Nissan Sentra", "Chevrolet Malibu",
                                            //             "Ford F150", "Toyota Tacoma", "Chevrolet Silverado"]

let newTrucks = [...trucks]                 //    newTrucks holds a copy of trucks array
trucks.pop("Ford F150")                     //    Removes "Ford F150" from trucks array
console.log({ trucks, newTrucks})           //    newTrucks is unaffected by removal


/*  DESTRUCTURING ARRAYS  */
let interns = ["Connor", "Jack", "Jake", "Nana", "Braedon", "Matt", "Chris", "Oliver", "Noor", "Ben"]

let [connor, jack, ...remainingInterns] = interns       //   connor = "Connor", jack = "Jack", 
                                                        //   remainingInterns = ["Jake", "Nana", "Braedon", "Matt", "Chris", "Oliver", "Noor", "Ben"]

let { 3: nana, 6: chris, 8: noor } = interns            //   Deconstruct by index
                                                        //   nana = "Nana", chris = "chris", noor = "Noor"

console.log({ connor, jack, nana, chris, noor })


/*  HELPFUL ARRAY METHODS  */
let nums = [100, 4, 56, 12, 32, 18, 30, 83];
let numsOver50 = nums.filter((num) => num >= 50)        //   Filters out all numbers less than 50 and returns the array

let number56 = nums.find(num => num === 56)             //   Looks for first element that satisfies condition and returns it
                                                        //   If no element is found, returns undefined

let includes100 = nums.includes(100)                    //   Returns boolean based on if value in array

nums.sort()                                             //   Sorts array in place
                                                        //   nums = [100, 12, 18, 30, 32, 4, 56, 83]

nums.sort((num1, num2) => num1 - num2)                  //   Sorted by value, nums = [4, 12, 18, 30, 32, 56, 83, 100]

let sum = nums.reduce((num1, num2) => num1 + num2, 0)   //   Reduces array to a single value
                                                        //   Gets sum of array, sum = 335

//   Map creates a new array with the results of the provided function on each element of the calling array
let numsDescribed = nums.map((num) => {                 
    if (num <= 30) return `${num} is a low number`
    else if (num <= 70) return `${num} is a midrange number`
    else return `${num} is a high number`
})

/* numsDescribed = [
  '4 is a low number',
  '12 is a low number',
  '18 is a low number',
  '30 is a low number',
  '32 is a midrange number',
  '56 is a midrange number',
  '83 is a high number',
  '100 is a high number'
]    */
