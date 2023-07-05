var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
const { login } = require("../service/login");
const { logout } = require("../service/logout");
const { register } = require("../service/register");
const joiValidationMiddleware = require("../Middleware/joiValidation");
const registerSchema = require("../schemas/register");
const userService = require("../service/user");
const categoryService = require("../service/category");
const {
  ensureSignedIn,
  ensureSignedOut,
  currentUser,
} = require("../Middleware/auth");

router.get("/", function (req, res, next) {
  console.log("Router is working");
  res.send("Hello from API");
});

//for decode token
router.get("/me", currentUser, async (req, res, next) => {
  const { currentUser } = req;
  const result = await userService.findByOne(currentUser.email);
  return res.json(result);
});

router.post("/login", ensureSignedOut, async (req, res, next) => {
  const { email, password } = req.body;
  const result = await login(email, password);
  req.session.jwt = result?.data?.token;

  res.json(result);
});

router.post(
  "/register",
  joiValidationMiddleware(registerSchema),
  async function (req, res, next) {
    const createdUser = await register(req.body);
    res.json(createdUser);
  }
);

router.post("/logout", ensureSignedIn, function (req, res, next) {
  const result = logout(req.session);
  res.clearCookie("access-token");
  res.json(result);
});

// router.post("/create", currentUser, async (req, res, next) => {
//   try {
//     const { name, desc, imageUrl } = req.body;
//     const newCategory = await categoryService.createNewCategory({
//       name,
//       desc,
//       imageUrl,
//     });
//     return res.json(newCategory);
//   } catch (err) {
//     return res.json(err);
//   }
// });

module.exports = router;
