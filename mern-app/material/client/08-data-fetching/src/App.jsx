import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PostItem from "./components/PostItem/PostItem";
import PostForm from "./components/PostForm/PostForm";

import "antd/dist/antd.css";
import "./styles/main.scss";
import "./App.scss";

const App = () => {
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchAllPosts = async () => {
         const response = await axios.get("/post");
         setPosts(response.data);
         setLoading(false);
      };
      fetchAllPosts();
   }, []);

   const addPost = async (post) => {
      const { title, author, content } = post;
      const response = await axios.post("/post", {
         title,
         author,
         content,
      });
      let newPosts = [...posts, response.data];
      setPosts(newPosts);
   };

   const removePost = async (postId) => {
      const response = await axios.delete(`/post/${postId}`);
      let newPosts = [...posts].filter((post) => post._id !== response.data._id);
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
               {loading ? <LoadingOutlined spin style={{ fontSize: "36px" }} /> : posts.map((post) => <PostItem key={post._id} post={post} removePost={removePost} />)}
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default App;
