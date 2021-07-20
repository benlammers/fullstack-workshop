import { LoadingOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { fetchPosts, removePost } from "../../api";

import PostItem from "../../components/PostItem/PostItem";
import PostForm from "../../components/PostForm/PostForm";
import { useUserContext } from "./../../contexts/UserContext";

import "./Home.scss";

const Home = () => {
   const queryClient = useQueryClient();
   const { username } = useUserContext();

   const { data: posts, isFetching } = useQuery("posts", fetchPosts);

   const { mutate: removePostMutation } = useMutation(removePost, {
      onSuccess: async (deletedPost) => {
         queryClient.setQueryData("posts", (oldPosts) => [...oldPosts].filter((post) => post._id !== deletedPost._id));
      },
   });

   return (
      <main className='home'>
         <h1>Welcome to Readit</h1>
         {username && (
            <>
               <h2>Add Post</h2>
               <PostForm />
            </>
         )}
         <h2>All Posts</h2>
         <div className='posts'>
            {isFetching ? <LoadingOutlined spin style={{ fontSize: "36px" }} /> : posts.map((post) => <PostItem key={post._id} post={post} removePost={removePostMutation} />)}
         </div>
      </main>
   );
};

export default Home;
