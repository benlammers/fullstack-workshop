import { Button, Form, Input } from "antd";
import { useMutation, useQueryClient } from "react-query";

import { addComment } from "./../../api";

import "./CommentForm.scss";

const CommentForm = ({ postId }) => {
   const queryClient = useQueryClient();

   const { mutate: addCommentMutation } = useMutation(addComment, {
      onSuccess: async (comment) => {
         queryClient.setQueryData(["comments", postId], (oldComments) => [...oldComments, comment]);
      },
   });

   const [form] = Form.useForm();

   const handleAddComment = (comment) => {
      addCommentMutation({ ...comment, post: postId });
      form.resetFields();
   };

   return (
      <Form className='comment-form' name='basic' form={form} layout='vertical' onFinish={handleAddComment}>
         <h2>Add a Comment</h2>
         <Form.Item label='Author' name='author' id={`basic_author-${postId}`} rules={[{ required: true, message: "Tell us who you are!" }]}>
            <Input />
         </Form.Item>
         <Form.Item label='Content' name='content' id={`basic_content-${postId}`} rules={[{ required: true, message: "You probably wanna fill this in" }]}>
            <Input.TextArea rows={4} placeholder='Comment content' allowClear />
         </Form.Item>
         <Form.Item>
            <Button type='primary' htmlType='submit'>
               Submit
            </Button>
         </Form.Item>
      </Form>
   );
};

export default CommentForm;
