const Router = require("express");
const router = new Router();

const PostController = require("../controller/post.controller");

router.post("/post", PostController.createPostByUser);
router.get("/post", PostController.getAllPostsFromUser);

module.exports = router;