import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
 
dotenv.config();

const app = express();
const port = 5002;

app.use(cookieParser());
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);

const users = [
  {
    username: "ja",
    firstName: "James",
    lastName: "Anderson",
    email: "ja@mail.com",
  },
  {
    username: "ac",
    firstName: "Ashley",
    lastName: "Cartwright",
    email: "ac@mail.com",
  },
];

// app.get("/", (req, res) => {
//   res.send("this is a test!");
// });

app.get("/login/:username", (req, res) => {
  const user = users.find((user) => user.username === req.params.username);
  if (user) {
    req.session.user = user;
    req.session.save();
    res.send(`User logged in: ${JSON.stringify(user)}`);
  } else {
    res.status(500).send("bad login");
  }
});

app.get("/user", (req, res) => {
    if (req.session.user) {
        res.send(req.session.user);
    } else {
        res.send('no user logged in');
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("User logged out");
});

app.listen(port, (req, res) => {
  console.log(`API listening on port http://localhost:${port}`);
});
