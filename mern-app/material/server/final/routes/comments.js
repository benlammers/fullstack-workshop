import {Router} from 'express';
import Comment from '../models/comment.js';


const router = Router();

router.post("/", async(req, res) => {
    try{
        const {author, content, post} = req.body
        const comment = new Comment({author, content, post})
        const entry = await comment.save()
        return res.status(201).send(entry)
    } catch (err){
        console.log(err)
    }
})


router.get("/:postId", async(req, res) => {
    try{
        const comments = await Comment.find({post: req.params.postId})
        return res.status(200).send(comments)
    } catch (err){
        console.log(err)
    }
})


router.put("/:id/upvote", async(req,res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id, {$inc : {votes:1}}, {new:true})
        return res.status(200).send(comment)
    } catch (err){
        console.log(err)
    }
})

router.put("/:id/downvote", async(req,res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id, {$inc : {votes:-1}}, {new:true})
        return res.status(200).send(comment)
    } catch (err){
        console.log(err)
    }
})

router.delete("/:id", async(req,res) => {
    try{
        const comment = await Comment.findByIdAndRemove(req.params.id)
        return res.status(200).send(comment)
    } catch (err){
        console.log(err)
    }
})

export default router;