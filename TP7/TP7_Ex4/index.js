const express = require("express");
const app = express();
app.listen(3000);

app.get("/", (err, res) => {
  if (err) {
    console.log(err);
  }
  res.sendFile("./src/lib/index.html", { root: __dirname });
});
