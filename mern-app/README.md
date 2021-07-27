# Full Stack MERN App

**Table Of Contents**

- [Purpose](#purpose)
- [Getting Started](#getting-started)
- [React Client](#react-client)
- [Express Server](#express-server)
- [Further Learning](#further-learning)

## Purpose

This folder holds two seperate workshops that together build a full stack application using the MERN stack (Mongo, Express, React and Node). The workshops should be led by a knowledgeable individual and the material and resources to be used as reference for the participants following the completion of the workshop. The participants should gain an understanding of how to build a simple full stack application using modern web frameworks.

## Getting Started

### Requirements

- Basic understanding of HTML, CSS and JavaScript
- [Node JS](https://nodejs.org/en/download/)
- [Mongo Compass](https://www.mongodb.com/products/compass)
- Code Editor such as [VSCode](https://code.visualstudio.com/)
- Browser such as Chrome, Firefox or Safari

### Running the App

**Server**  
In the server folder there is multiple versions of the server representing different steps it takes to make an API. You can run the server directly from one of these folders or copy the files inside into another folder on your computer

To run the files where they are you must first install the required node packages by running

```sh
npm install
```

This will install the required packages in that folder. If you move to another folder or step in the creation process you will have to run ``npm install` again to install the packages in the new folder or to install the new packages needed for that step

To run the server for development run

```sh
npm run dev
```

This will run the server using nodemon, a package that listens for updates and automatically restarts your server

To run the server normally run

```sh
npm start
```

**Client**  
In the client folder there is multiple versions of the client representing different steps it takes to make a React application. You can run the client directly from one of these folders or copy the files inside into another folder on your computer

To run the files where they are you must first install the required node packages by running

```sh
npm install
```

This will install the required packages in that folder. If you move to another folder or step in the creation process you will have to run ``npm install` again to install the packages in the new folder or to install the new packages needed for that step

To run the client run

```sh
npm start
```

This will run the React application and by default it will use Hot Module Reloading to reload the application when changes are made to the code.

_Note: If running the client and the server together you must start the server first then the client. You will be prompted to run the client on another port other than 3000. Respond `Y` to this_

## Express Server

### 00 Express setup

**Installing express**

- [Install express](https://expressjs.com/en/starter/installing.html)
  **Getting server side setup**
- [Hello world in express](https://expressjs.com/en/starter/hello-world.html)

### 01 mongo setup

**Installing mongo**

- [Getting Your Free MongoDB Atlas Cluster - MongoDB](https://www.youtube.com/watch?v=rPqRyYJmx2g)
- [Install mongodb](https://docs.mongodb.com/guides/server/install/)
  **Connect db to back end**
- [Connect mongo to express server](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database)

### 02 Models setup

**Installing mongoose and setting up models**

- [Install mongoose and create model](https://mongoosejs.com/docs/)
- [Install mongoose and create model](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)

### 03 Routes setup

_Setting up routes_

- [Installing axios and setting up routes](https://flaviocopes.com/node-axios/)
- [Connect express and react with axios](https://betterprogramming.pub/connect-your-express-and-react-applications-using-axios-c35723b6d667)

## React Client

### Create React App

- [Create React App - Reactjs.org](https://reactjs.org/docs/create-a-new-react-app.html)
- [Create React App - Github](https://github.com/facebook/create-react-app)

### Functional Components

- [Components and Props - Reactjs.org](https://reactjs.org/docs/components-and-props.html)

### Input and Forms

- [Controlled Inputs - The Net Ninja](https://www.youtube.com/watch?v=IkMND33x0qQ)

### Data Fetching

- [React Query- Tanner Linsley](https://react-query.tanstack.com/overview)

### React Router

- [React Router - React Training](https://reactrouter.com/)

### React Context

- [React Context and Hooks - Net Ninja](https://www.youtube.com/watch?v=6RhOzQciVwI&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI)

## Further Learning

Below are recommended resources that are procured by others that can help expand your knowledge on HTML

### [Redux for Beginners - Dev Ed](https://www.youtube.com/watch?v=CVpUuw9XSjY) - YouTube Video

**Author: Dev Ed**
In this video Ed goes over the concepts behind Redux and its use in React applications. Contains charts and images that help understand Redux and its integration into React applications.

### [Next Js For Beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw) - YouTube Playlist

**Author: Net Ninja**  
Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.

### [Gatsby Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB) - YouTube Playlist

**Author: Net Ninja**  
Gatsby provides development teams an open source frontend framework for creating dynamic, optimized websites and a cloud platform for delivering them on a blazing fast edge network.

-[Express setup with middleware](https://www.robinwieruch.de/node-js-express-tutorial) -[mongodb express setup](https://www.robinwieruch.de/mongodb-express-setup-tutorial)
