import { Router } from "express";
import Post from "../models/post.js";

const router = Router();

router.post("/", async (req, res) => {
   try {
      const { author, content, title } = req.body;
      const post = new Post({ author, content, title });
      const entry = await post.save();
      return res.status(201).send(entry);
   } catch (err) {
      console.log(err);
   }
});

router.get("/", async (req, res) => {
   try {
      const posts = await Post.find();
      return res.status(200).send(posts);
   } catch (err) {
      console.log(err);
   }
});

router.get("/search", async (req, res) => {
   try {
      const posts = await Post.find({ $text: { $search: req.query.text } });
      return res.status(200).send(posts);
   } catch (err) {
      console.log(err);
   }
});

router.get("/:id", async (req, res) => {
   try {
      const post = await Post.findById(req.params.id);
      return res.status(200).send(post);
   } catch (err) {
      console.log(err);
   }
});

router.put("/:id/upvote", async (req, res) => {
   try {
      const post = await Post.findByIdAndUpdate(req.params.id, { $inc: { votes: 1 } }, { new: true });
      return res.status(200).send(post);
   } catch (err) {
      console.log(err);
   }
});

router.put("/:id/downvote", async (req, res) => {
   try {
      const post = await Post.findByIdAndUpdate(req.params.id, { $inc: { votes: -1 } }, { new: true });
      return res.status(200).send(post);
   } catch (err) {
      console.log(err);
   }
});

router.delete("/:id", async (req, res) => {
   try {
      const post = await Post.findByIdAndRemove(req.params.id);
      return res.status(200).send(post);
   } catch (err) {
      console.log(err);
   }
});

export default router;
