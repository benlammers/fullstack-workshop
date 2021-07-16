/*  PROMISE  */
const timeoutPromise = (interval) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("done")
        }, interval)
    })
}

/*  .then() 

    Older way of handling Promises using nested .then() blocks 
*/
const timeTestThen = () => {
    timeoutPromise(3000).then(() => {
        console.log("First done")
        timeoutPromise(3000).then(() => {
            console.log("Second done")
            timeoutPromise(3000).then(() => {
                console.log("Third done")
            })
        })
    })
}

// timeTestThen()


/*  ASYNC/AWAIT

    Using Async/Await makes asynchronous code easier to write and read
    Removes the need for nested .then() blocks 
*/
const timeTest = async () => {
    await timeoutPromise(3000)
    console.log("First done")
    await timeoutPromise(2000)
    console.log("Second done")
    await timeoutPromise(3000)
    console.log("Third done")
}

// timeTest()

// Simulate an API call that waits one second then returns a user
const apiCall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Ben",
                age: 22,
                location: "Kingston"
            })
        }, 1000)
    })
}

// Function awaits for the user data
const getUserData = async () => {
    let data = await apiCall()
    console.log(data)
}

// getUserData()