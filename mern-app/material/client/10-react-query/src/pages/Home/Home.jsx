import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "react-query";

import PostItem from "../../components/PostItem/PostItem";
import PostForm from "../../components/PostForm/PostForm";

import "./Home.scss";

const fetchPosts = async () => {
   const { data } = await axios.get("/post");
   return data;
};

const addPost = async (post) => {
   const { data } = await axios.post("/post", post);
   return data;
};

const removePost = async (postId) => {
   const { data } = await axios.delete(`/post/${postId}`);
   return data;
};

const Home = () => {
   const queryClient = useQueryClient();

   const { data: postsData, isFetching } = useQuery("posts", fetchPosts);

   const { mutate: removePostMutation } = useMutation(removePost, {
      onSuccess: async (deletedPost) => {
         queryClient.setQueryData("posts", (oldPosts) => [...oldPosts].filter((post) => post._id !== deletedPost._id));
      },
   });

   const { mutate: addPostMutation } = useMutation(addPost, {
      onSuccess: async (post) => {
         queryClient.setQueryData("posts", (oldPosts) => [...oldPosts, post]);
      },
   });

   return (
      <main className='home'>
         <h1>Welcome to Readit</h1>
         <h2>Add Post</h2>
         <PostForm addPost={addPostMutation} />
         <h2>All Posts</h2>
         <div className='posts'>
            {isFetching ? <LoadingOutlined spin style={{ fontSize: "36px" }} /> : postsData.map((post) => <PostItem key={post._id} post={post} removePost={removePostMutation} />)}
         </div>
      </main>
   );
};

export default Home;
