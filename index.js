const express = require("express");
const app = express();
const port = 3000;

const GID = () => {
  return Date.now();
};

const data = [
  { id: GID()+1, name: "mohamed" },
  { id: GID()+2, name: "ayman" },
  { id: GID()+3, name: "mohamoud" },
  { id: GID()+4, name: "ahmad" },
  { id: GID()+5, name: "amr" },
  { id: GID()+6, name: "fares" },
  { id: GID()+7, name: "yusof" },
  { id: GID()+8, name: "osama" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log("Listen to: http://localhost:" + port);
});
