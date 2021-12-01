import express from "express";

const app = express();
const port = 5002;

app.get('/', (req, res) => {
    res.send("this is a test!")
})

app.listen(port, (req, res) => {
  console.log(`API listening on port http://localhost:${port}`);
});
