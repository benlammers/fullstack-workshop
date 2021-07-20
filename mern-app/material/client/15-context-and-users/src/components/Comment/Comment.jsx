import { Comment as AntComment, Tooltip } from "antd";
import { CaretDownOutlined, CaretUpOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useMutation, useQueryClient } from "react-query";

import { upvoteComment, downvoteComment } from "../../api";
import { useUserContext } from "./../../contexts/UserContext";

import "./Comment.scss";

const Comment = ({ comment, removeComment }) => {
   const queryClient = useQueryClient();
   const { username } = useUserContext();

   const date = dayjs(comment.date);

   const { mutate: upvote } = useMutation(() => upvoteComment(comment._id), {
      onSuccess: (updatedComment) => {
         queryClient.setQueryData(["comments", comment.post], (oldComments) => {
            let updatedComments = [...oldComments];
            let updatedIndex = updatedComments.findIndex((comment) => comment._id === updatedComment._id);
            updatedComments[updatedIndex] = updatedComment;
            return updatedComments;
         });
      },
   });

   const { mutate: downvote } = useMutation(() => downvoteComment(comment._id), {
      onSuccess: (updatedComment) => {
         queryClient.setQueryData(["comments", comment.post], (oldComments) => {
            let updatedComments = [...oldComments];
            let updatedIndex = updatedComments.findIndex((comment) => comment._id === updatedComment._id);
            updatedComments[updatedIndex] = updatedComment;
            return updatedComments;
         });
      },
   });

   const actions = [
      <Tooltip key='comment-upvote' title='Upvote'>
         <CaretUpOutlined onClick={upvote} />
      </Tooltip>,
      <span className='comment-action'>{comment.votes}</span>,
      <Tooltip key='comment-downvote' title='Downvote'>
         <CaretDownOutlined onClick={downvote} />
      </Tooltip>,
      username === comment.author && (
         <Tooltip key='comment-remove' title='Remove'>
            <DeleteOutlined onClick={() => removeComment(comment._id)} />
         </Tooltip>
      ),
   ];

   return (
      <AntComment
         actions={actions}
         author={<span>{comment.author}</span>}
         content={<p>{comment.content}</p>}
         datetime={
            <Tooltip title={date.format("YYYY-MM-DD HH:mm:ss")}>
               <span>{date.format("MMMM DD, YYYY")}</span>
            </Tooltip>
         }
      />
   );
};

export default Comment;
