const express = require("express");
const app = express();
app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./src/Ex2.html", { root: __dirname });
});
