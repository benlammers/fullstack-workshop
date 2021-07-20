import { Card, Tooltip } from "antd";
import { CaretDownOutlined, CaretUpOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

import { useMutation, useQuery, useQueryClient } from "react-query";

import { fetchComments, upvotePost, downvotePost } from "../../api";

import "./PostItem.scss";

const PostItem = ({ post, removePost }) => {
   const queryClient = useQueryClient();

   const { title, author, content, date, _id, votes } = post;

   const { data: comments } = useQuery(["comment", post._id], () => fetchComments(post._id));

   const { mutate: upvote } = useMutation(upvotePost, {
      onSuccess: (updatedPost) => {
         queryClient.setQueryData("posts", (oldPosts) => {
            let updatedPosts = [...oldPosts];
            let updatedIndex = updatedPosts.findIndex((post) => post._id === updatedPost._id);
            updatedPosts[updatedIndex] = updatedPost;
            return updatedPosts;
         });
      },
   });

   const { mutate: downvote } = useMutation(downvotePost, {
      onSuccess: (updatedPost) => {
         queryClient.setQueryData("posts", (oldPosts) => {
            let updatedPosts = [...oldPosts];
            let updatedIndex = updatedPosts.findIndex((post) => post._id === updatedPost._id);
            updatedPosts[updatedIndex] = updatedPost;
            return updatedPosts;
         });
      },
   });

   const formattedDate = dayjs(date).format("MMMM DD, YYYY");
   const numOfComments = comments?.length || 0;

   return (
      <Card
         title={title}
         className='post-item'
         extra={[<span key='date'>{formattedDate}</span>, <DeleteOutlined key='delete' style={{ fontSize: "24px" }} onClick={() => removePost(_id)} />]}
      >
         <span className='post-item__author'>Posted by {author}</span>
         <p className='post-item__content'>{content}</p>
         <div className='post-item__details'>
            <span>{numOfComments} comments</span>
            <div className='post-item__votes'>
               <Tooltip title='Upvote'>
                  <CaretUpOutlined onClick={() => upvote(post._id)} />
               </Tooltip>
               <span>{votes}</span>
               <Tooltip title='Downvote'>
                  <CaretDownOutlined onClick={() => downvote(post._id)} />
               </Tooltip>
            </div>
         </div>
      </Card>
   );
};

export default PostItem;
