import express from "express";

const app = express();
const port = 5002;

app.listen(port, (req, res) => {
  console.log(`API listening on port http://localhost:${port}`);
});
