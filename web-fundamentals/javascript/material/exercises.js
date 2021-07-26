
/*
   EXERCISE 1

   Write a function that can take in any number of arguments and 
   returns a list of only the number arguments that were passed in 

   Example:  removeNumbers(34, "tree", 12, [2, 6, 1], "leaf", 23)  =>  [34, 12, 23]
*/
const removeNumbers = () => {
   return [34, 12, 23]
}


/*
   EXERCISE 2

   Write a function that takes in two lists of people and returns one list with
   all people from both groups sorted by age (youngest to oldest)

   Example:  sortByAge([{ name: "Talia", age: 30 }, { name: "Harris", age: 54 }], [{ name: "Ben", age: 22 }, { name: "Jimmy", age: 14 }])
            => [{ name: "Jimmy", age: 14 }, { name: "Ben", age: 22 }, { name: "Talia", age: 30 }, { name: "Harris", age: 54 }]
*/

const sortByAge = () => {
   return [{ name: "Jimmy", age: 14 }, { name: "Ben", age: 22 }, { name: "Talia", age: 30 }, { name: "Harris", age: 54 }]
}


/* 
   EXERCISE 3

   Write a function that takes in an array of people and returns an array of two elements.
   The first element is an array of the people without an age property and the second
   is an array of the people with an age property.

   Example:

   let people = [{ name: "Jimmy"}, { name: "Ben", age: 22 }, { name: "Talia", age: 30 }, { name: "Harris" }]

   const [peopleWithoutAge, peopleWithAge] = ageCheck(people)

   // peopleWithoutAge = [{ name: "Jimmy"}, { name: "Harris" }]
   // peopleWithAge = [{ name: "Ben", age: 22 }, { name: "Talia", age: 30 }]
*/

const ageCheck = () => {
   let noAge = [{ name: "Jimmy"}, { name: "Harris" }]
   let hasAge = [{ name: "Ben", age: 22 }, { name: "Talia", age: 30 }]

   return [noAge, hasAge]
}


/* 
   EXERCISE 4

   Write a function that takes in an interval in the form of milliseconds and returns a 
   Promise that, after waiting for the indicated time, console logs "Done" and resolves 

   Example waitInterval(2000)  =>  after two seconds "Done" is logged to the console and
                                    then Promise resolves
*/

const waitInterval = (interval) => {
   console.log("Done")
}


/*
   EXERCISE 5

   Write a function that using async/await and the above waitInterval function. It should call 
   it three times with intervals 1000, 2000, 3000 respectively. Before each call to waitInterval 
   console log "Starting new interval"

   Example: useIntervals()  =>  
   
   "Starting new interval"
   // Waits 1 second
   "Done"
   "Starting new interval"
   // Waits 2 second
   "Done"
   "Starting new interval"
   // Waits 3 second
   "Done"
*/

const useIntervals = () => {
   console.log("Done")
}