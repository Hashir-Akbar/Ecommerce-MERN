import express from "express";
import notFound from "./middleware/404.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(notFound);

app.listen(PORT, () => {
  console.log("Server Running at port " + PORT);
});
