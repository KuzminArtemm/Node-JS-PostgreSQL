const db = require("../db");
class PostController {
  async createPostByUser(req, res) {
    const { tutle, content, user_id } = req.body;
    const newPost = await db.query(
      "INSERT INTO post (tutle, content, user_id) values($1, $2, $3) RETURNING *",
      [tutle, content, user_id]
    );
    res.json(newPost.rows[0]);
  }
  async getAllPostsFromUser(req, res) {
    const id = req.query.id;
    const posts = await db.query("select * from post where user_id = $1", [id]);
    res.json(posts.rows);
  }
}

module.exports = new PostController();
