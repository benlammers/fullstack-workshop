import { Button, Form, Input } from "antd";
import { useMutation, useQueryClient } from "react-query";

import { addPost } from "../../api";
import { useUserContext } from "./../../contexts/UserContext";

import "./PostForm.scss";

const PostForm = () => {
   const queryClient = useQueryClient();
   const { username } = useUserContext();

   const { mutate: addPostMutation } = useMutation(addPost, {
      onSuccess: async (post) => {
         queryClient.setQueryData("posts", (oldPosts) => [...oldPosts, post]);
      },
   });

   const [form] = Form.useForm();

   const handleAddPost = (post) => {
      addPostMutation({ author: username, ...post });
      form.resetFields();
   };

   return (
      <Form className='post-form' name='post' form={form} layout='vertical' onFinish={handleAddPost}>
         <Form.Item label='Title' name='title' rules={[{ required: true, message: "You need a title!" }]}>
            <Input />
         </Form.Item>
         {username ? (
            <span>Author: {username}</span>
         ) : (
            <Form.Item label='Author' name='author' rules={[{ required: true, message: "Tell us who you are!" }]}>
               <Input />
            </Form.Item>
         )}
         <Form.Item label='Content' name='content' rules={[{ required: true, message: "You probably wanna fill this in" }]}>
            <Input.TextArea rows={7} placeholder='Post content' allowClear />
         </Form.Item>
         <Form.Item>
            <Button size='large' type='primary' htmlType='submit'>
               Submit
            </Button>
         </Form.Item>
      </Form>
   );
};

export default PostForm;
