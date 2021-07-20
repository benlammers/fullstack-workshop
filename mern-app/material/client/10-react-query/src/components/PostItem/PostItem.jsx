import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import "./PostItem.scss";

const PostItem = ({ post, removePost }) => {
   const { title, author, content, _id } = post;

   return (
      <Card title={title} className='post-item' extra={<DeleteOutlined style={{ fontSize: "24px" }} onClick={() => removePost(_id)} />}>
         <span className='post-item__author'>Posted by: {author}</span>
         <p className='post-item__content'>{content}</p>
      </Card>
   );
};

export default PostItem;
