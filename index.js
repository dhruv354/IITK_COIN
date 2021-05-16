const express = require("express");
const path = require("path");
const app = express();

const port = 8080;
console.log(path.join(__dirname, "views"));

/***********middlware*********** */
app.use(express.urlencoded());
app.use(express.json());

/************endpoints****************** */
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/coins", (req, res) => {
  const num_coins = req.body.rollno;
  res.json({ coins: num_coins });
});

/**********************set up view engine******************** */
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

/************listening on server**************** */

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server started on port ${port}`);
});
