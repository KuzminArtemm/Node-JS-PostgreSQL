const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const userRouter = require("./routes/routes");
const postRouter = require("./routes/post.routes");

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
