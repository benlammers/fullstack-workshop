/*  PROMISE  */

// Simulate a login API call that waits two seconds then returns some user data
const loginRequest = (username) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log(username, "logged in");
         resolve({ age: 12 });
      }, 2000);

      console.log("Request made to login");
   });
};

/*  .then() 

    Older way of handling Promises using nested .then() blocks 
*/
const loginProcessThen = () => {
   loginRequest("blammers").then((data) => {
      console.log(data);
      console.log("Moving On");
   });
};

/*  ASYNC/AWAIT

    Using Async/Await makes asynchronous code easier to write and read
    Removes the need for nested .then() blocks 
*/
const loginProcess = async () => {
   let data = await loginRequest("blammers");
   console.log(data);
   console.log("Moving On");
};
