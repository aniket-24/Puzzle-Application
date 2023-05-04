const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UsersModel = require("./models/Users");
require("dotenv").config();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://aniket24:root@cluster0.eruuj.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.post("/addUser", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  var flag = 0;

  await UsersModel.find({ email: email })
    .then(async (documents) => {
      if (documents.length === 0) {
        flag = 1;
      } else {
        flag = 0;
      }
    })
    .catch(() => {
      res.send("error!");
    });

  if (flag) {
    res.send("User not found...sign in");
  } else {
    await UsersModel.find({ email: email })
      .then(async (documents) => {
        if (documents[0].password === password) {
          res.send("Login successful");
        } else {
          res.send("Your password is incorrect");
        }
      })
      .catch(() => {
        res.send("error!");
      });
  }
});

app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  var flag = 0;

  await UsersModel.find({ email: email })
    .then(async (documents) => {
      if (documents.length === 0) {
        flag = 1;
      } else {
        flag = 0;
      }
    })
    .catch(() => {
      res.send("error!");
    });

  if (flag) {
    const user = new UsersModel({
      email: email,
      password: password,
      completed: "0",
    });
    await user.save();
    res.send("Login successful");
  } else {
    res.send("Email already exists...try logging in");
  }
});

app.put("/update", async (req, res) => {
  const email = req.body.email;
  const completed = req.body.completed;

  try {
    await UsersModel.find({ email: email }).then((response) => {
      response[0].completed = completed;
      response[0].save();
    });
  } catch (err) {
    console.log(err);
  }

  res.send("updated");
});

app.get("/getData", (req, res) => {
  UsersModel.find().then((documents) => {
    res.send(documents);
  });
});

app.get("/", async (req, res) => {
  res.send("Hello, World");
});

app.listen(process.env.PORT || 3001, () => {
  console.log("You are connected!");
});
