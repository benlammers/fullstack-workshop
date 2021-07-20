import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PostItem from "./components/PostItem/PostItem";
import PostForm from "./components/PostForm/PostForm";

import "antd/dist/antd.css";
import "./styles/main.scss";
import "./App.scss";

const App = () => {
   const [posts, setPosts] = useState([
      {
         title: "Pepperoni Pizza",
         author: "Noor",
         content: "I like peeperoni pizza and sometimes I do like pineapple on my pizza",
         _id: 1,
      },
      {
         title: "Loki: Episode 6",
         author: "Ben",
         content: "Hoping the Loki finale is gonna be good today",
         _id: 2,
      },
      {
         title: "Hot New Music",
         author: "Nana",
         content: "I just dropped a new song on Spotify, give it a listen",
         _id: 3,
      },
   ]);

   const addPost = (post) => {
      let newPosts = [
         ...posts,
         {
            ...post,
            id: posts.length + 1,
         },
      ];
      setPosts(newPosts);
   };

   const removePost = (postId) => {
      let newPosts = [...posts].filter((post) => post._id !== postId);
      setPosts(newPosts);
   };

   return (
      <div className='app'>
         <Header />
         <main>
            <h1>Welcome to Readit</h1>
            <h2>Add Post</h2>
            <PostForm addPost={addPost} />
            <h2>All Posts</h2>
            <div className='posts'>
               {posts.map((post, index) => (
                  <PostItem key={index} post={post} removePost={removePost} />
               ))}
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default App;
