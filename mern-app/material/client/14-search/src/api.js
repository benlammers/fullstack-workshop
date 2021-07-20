import axios from "axios";

export const fetchPosts = async () => {
   const { data } = await axios.get("/post");
   return data;
};

export const fetchPostbyId = async (postId) => {
   const { data } = await axios.get(`/post/${postId}`);
   return data;
};

export const searchPosts = async (searchText) => {
   const { data } = await axios.get(`/post/search?text=${searchText.toLowerCase().replace(/ /g, "%20")}`);
   return data;
};

export const addPost = async (post) => {
   const { data } = await axios.post("/post", post);
   return data;
};

export const removePost = async (postId) => {
   const { data } = await axios.delete(`/post/${postId}`);
   return data;
};

export const upvotePost = async (postId) => {
   const { data } = await axios.put(`/post/${postId}/upvote`);
   return data;
};

export const downvotePost = async (postId) => {
   const { data } = await axios.put(`/post/${postId}/downvote`);
   return data;
};

export const fetchComments = async (postId) => {
   const { data } = await axios.get(`/comment/${postId}`);
   return data;
};

export const addComment = async (comment) => {
   const { data } = await axios.post("/comment", comment);
   return data;
};

export const removeComment = async (commentId) => {
   const { data } = await axios.delete(`/comment/${commentId}`);
   return data;
};

export const upvoteComment = async (commentId) => {
   const { data } = await axios.put(`/comment/${commentId}/upvote`);
   return data;
};

export const downvoteComment = async (commentId) => {
   const { data } = await axios.put(`/comment/${commentId}/downvote`);
   return data;
};
