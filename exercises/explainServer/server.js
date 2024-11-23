// hello
import express from "express";

// Part 2
const app = express();

// Part 3
app.use(bodyParser.json());

// Part 4
app.get("/", (req, res) => {
  res.send("Hi");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Ok");
});

// Part 5
app.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000");
});
