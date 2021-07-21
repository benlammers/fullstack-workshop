import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
   author: { type: String, required: true, default: "anonymous" },
   content: { type: String, required: true },
   title: { type: String, required: true },
   votes: { type: Number, default: 0 },
   date: { type: Date, default: Date.now },
});

postSchema.index({ "$**": "text" });

const Post = mongoose.model("Post", postSchema);

export default Post;
