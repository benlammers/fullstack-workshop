import { Card } from "antd";

import "./PostItem.scss";

const PostItem = ({ post }) => {
   const { title, author, content } = post;

   return (
      <Card title={title} className='post-item'>
         <span className='post-item__author'>Posted by: {author}</span>
         <p>{content}</p>
      </Card>
   );
};

export default PostItem;
