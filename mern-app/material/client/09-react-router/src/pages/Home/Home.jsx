import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

import PostItem from "../../components/PostItem/PostItem";
import PostForm from "../../components/PostForm/PostForm";

import "./Home.scss";

const Home = () => {
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
      <main className='home'>
         <h1>Welcome to Readit</h1>
         <h2>Add Post</h2>
         <PostForm addPost={addPost} />
         <h2>All Posts</h2>
         <div className='posts'>
            {loading ? <LoadingOutlined spin style={{ fontSize: "36px" }} /> : posts.map((post, index) => <PostItem key={index} post={post} removePost={removePost} />)}
         </div>
      </main>
   );
};

export default Home;
