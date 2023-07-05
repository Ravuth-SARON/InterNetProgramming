var express = require("express");
var app = express();
const joiValidation = require("../Middleware/joiValidation");
const auth = require("../Middleware/auth");
const schema = require("../schemas/index");
var router = express.Router();
app.use("/", router);
const categoryService = require("../service/category");
const itemService = require("../service/item");
const schemas = require("../schemas/index");
const joiValidationMiddleware = require("../Middleware/joiValidation");

router.post(
  "/create",
  auth.currentUser,
  joiValidationMiddleware(schema.Category),
  async (req, res, next) => {
    const { name, desc } = req.body;
    const newCategory = await categoryService.createNewCategory({
      name,
      desc,
    });
    return res.json(newCategory);
  }
);
router.get("/cat/:id", auth.currentUser, async (req, res, next) => {
  const { id } = req.params;
  const result = await categoryService.find(id);
  res.json(result);
});
router.get("/getAllCategorie", auth.currentUser, async (req, res, next) => {
  const result = await categoryService.findAll();
  res.json(result);
});
// router.post("/updateCategorie", auth.currentUser, async (req, res, next) => {
//   const result = await categoryService.update();
// });
router.post("/updateCategory/:id", auth.currentUser, async (req, res, next) => {
  const { name, desc } = req.body;
  const { id } = req.params;
  console.log(id);
  const result = await categoryService.update(id, { name, desc });
  res.json(result);
});
router.post("/deleteCat/:_id", auth.currentUser, async (req, res, next) => {
  const { _id } = req.params;
  const { name, desc } = req.body;
  const result = await categoryService.Delete(_id, { name, desc });
  res.json(result);
});

module.exports = router;
