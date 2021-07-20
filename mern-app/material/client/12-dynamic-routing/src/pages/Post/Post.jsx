import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchPostbyId } from "../../api";

import "./Post.scss";

const Post = () => {
   const { id } = useParams();

   const { data: post, isFetching } = useQuery(["post", id], () => fetchPostbyId(id));
   const formattedDate = dayjs(post?.date).format("MMMM DD, YYYY");

   return (
      <main className='post'>
         {!isFetching && (
            <>
               <h1>{post.title}</h1>
               <div className='post__details'>
                  <p>Posted By: {post.author}</p>
                  <p>{formattedDate}</p>
               </div>
               <p className='post__content'>{post.content}</p>
            </>
         )}
      </main>
   );
};

export default Post;
