var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var session = require("express-session");

var app = express();
app.use(express.json());
const path = require("path");

// Serve static files from the "images" directory

const port = 3001;

// app.use(
//   session({
//     secret: "my-secret-jwt",
//     resave: false,
//     saveUninitialized: true,
//     name: "access-token",
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 2, // 2 hours
//       secure: false,
//     },
//   })
// );

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require("./config/db")();
require("./config/session")(app);

app.use(require("./routes/category"));
app.use(require("./routes/users"));
app.use(require("./routes/items"));
app.use(require("./routes/product"));
app.use("/images", express.static(path.join(__dirname, "API", "images")));

app.listen(port, () => console.log("App on http://localhost:3001"));
