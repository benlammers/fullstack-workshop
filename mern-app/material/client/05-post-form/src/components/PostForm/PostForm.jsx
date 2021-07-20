import { useState } from "react";

import "./PostForm.scss";

const PostForm = () => {
   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");
   const [content, setContent] = useState("");

   const handleAddPost = (e) => {
      e.preventDefault();
      console.log({ title, author, content });
      setTitle("");
      setAuthor("");
      setContent("");
   };

   return (
      <form className='post-form' onSubmit={handleAddPost}>
         <label>Title</label>
         <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
         <label>Author</label>
         <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} />
         <label>Content</label>
         <textarea rows={12} value={content} onChange={(e) => setContent(e.target.value)} />

         <button type='submit'>Add Post</button>
      </form>
   );
};

export default PostForm;
