import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { fetchPostbyId, fetchComments, removeComment } from "../../api";

import Comment from "./../../components/Comment/Comment";
import CommentForm from "../../components/CommentForm/CommentForm";

import "./Post.scss";

const Post = () => {
   const queryClient = useQueryClient();
   const { id } = useParams();

   const { data: post, isFetching: isFetchingPosts } = useQuery(["post", id], () => fetchPostbyId(id));
   const { data: comments, isFetching: isFetchingComments } = useQuery(["comments", id], () => fetchComments(id));

   const { mutate: removeCommentMutation } = useMutation(removeComment, {
      onSuccess: async (deletedComment) => {
         queryClient.setQueryData(["comments", id], (oldComments) => [...oldComments].filter((comment) => comment._id !== deletedComment._id));
      },
   });

   const formattedDate = dayjs(post?.date).format("MMMM DD, YYYY");

   return (
      <main className='post'>
         {!isFetchingPosts && (
            <>
               <h1>{post.title}</h1>
               <div className='post__details'>
                  <p>Posted By: {post.author}</p>
                  <p>{formattedDate}</p>
               </div>
               <p className='post__content'>{post.content}</p>
               {!isFetchingComments && (
                  <div className='post__comments'>
                     {comments.map((comment) => (
                        <Comment key={comment._id} comment={comment} removeComment={removeCommentMutation} />
                     ))}
                     <CommentForm postId={id} />
                  </div>
               )}
            </>
         )}
      </main>
   );
};

export default Post;
