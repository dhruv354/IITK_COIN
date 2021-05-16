const express = require("express");
const app = express();

const port = 8080;

//dummy data
const num_coins = {
  1: 8,
  2: 7,
  56: 78,
  123: 1000,
};

// console.log(num_coins[1]);

/***********middlware*********** */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/************endpoints****************** */

app.post("/coins", (req, res) => {
  const roll_no = req.body.rollno;
  res.json({ coins: num_coins[roll_no] });
});

/************listening on server**************** */

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server started on port ${port}`);
});
