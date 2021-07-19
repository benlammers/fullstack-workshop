let person = {
    name: "Ben",
    age: 22,
    location: "Kingston"
}

person.age                  // Options for accessing object properties
person["age"]

let prop = "age"            // Can dynamically get different properties
person[prop]                // Returns 22


/*  DESTRUCTURING OBJECTS  */
const { age, location } = person      //   Creates new constants age, location with values from person, values are not removed from person
                                      //   age = 22, location = "Kingston"

// Destructure with spread operator
const { name, ...rest } = person      // Creates constant name = "Ben" and object rest = { age: 22, location: "Kingston" }

//  Able to rename variables that are being destructured
const { name: bensName, location: bensLocation}         //  bensName = "Ben", bensLocation = "Kingston"