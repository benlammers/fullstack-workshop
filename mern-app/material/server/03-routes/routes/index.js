import { Router } from "express";
import postRouter from "./posts.js";
import commentRouter from "./comments.js";

const router = Router();

router.use("/post", postRouter);
router.use("/comment", commentRouter);

export default router;
