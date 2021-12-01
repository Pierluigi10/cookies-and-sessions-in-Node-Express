import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();
const port = 5002;

app.use(cookieParser());
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "sse31493147cret",
  })
);

const users = [
    {
        username: "ja",
        firstName: "James",
        lastName: "Anderson",
        email: "ja@mail.com"
    },
    {
        username: "ac",
        firstName: "Ashley",
        lastName: "Cartwright",
        email: "ac@mail.com"
    }
];

app.get("/", (req, res) => {
  res.send("this is a test!");
});

app.listen(port, (req, res) => {
  console.log(`API listening on port http://localhost:${port}`);
});
