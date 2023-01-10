const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});
// let's see if git knows about this comment

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
