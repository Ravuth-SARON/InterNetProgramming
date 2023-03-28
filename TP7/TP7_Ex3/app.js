const express = require("express");
const app = express();
app.get("/", (err, res) => {
  if (err) {
    console.log(err);
  }
  res.sendFile("./src/index.html", { root: __dirname });
});

app.get("/detail", (err, res) => {
  if (err) {
    console.log(err);
  }
  res.sendFile("./src/detail.html", { root: __dirname });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
