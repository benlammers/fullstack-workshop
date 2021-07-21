import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
   author: { type: String, required: true, default: "anonymous" },
   content: { type: String, required: true },
   votes: { type: Number, default: 0 },
   date: { type: Date, default: Date.now },
   post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
