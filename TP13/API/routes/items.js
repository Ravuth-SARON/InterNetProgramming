var express = require("express");
var app = express();
const auth = require("../Middleware/auth");
const joiValidation = require("../Middleware/joiValidation");
var router = express.Router();
const items = require("../model/items");
const categorie = require("../model/categories");
const itemService = require("../service/item");
const schemas = require("../schemas/index");
const joiValidationMiddleware = require("../Middleware/joiValidation");

router.post(
  "/category/item/create",
  auth.currentUser,

  async (req, res, next) => {
    const item = new items({
      name: req.body.name,
      category: req.body.category,
    });
    try {
      const newItem = await item.save();
      res.status(201).json(newItem);
      await categorie.findByIdAndUpdate(req.body.category, {
        $push: { items: newItem._id },
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
);
router.get("/cate/item/:id", auth.currentUser, async (req, res, next) => {
  const { id } = req.params;
  const result = await itemService.find(id);
  res.json(result);
});
router.get("/item/getallItem", auth.currentUser, async (req, res, next) => {
  const result = await itemService.findAll();
  res.json(result);
});
// router.post("/updateCategorie", auth.currentUser, async (req, res, next) => {
//   const result = await categoryService.update();
// });
router.post(
  "/Category/updateItem/:id",
  auth.currentUser,
  async (req, res, next) => {
    const { name, desc } = req.body;
    const { id } = req.params;
    console.log(id);
    const result = await itemService.update(id, { name, desc });
    res.json(result);
  }
);
router.post("/Itemdelete/:_id", auth.currentUser, async (req, res, next) => {
  const id = req.params;
  const { name, desc, category } = req.body;
  const result = await itemService.Delete(id, { name, desc, category });
  res.json(result);
});

module.exports = router;

// const { name, desc } = req.body;
// const newCategory = await itemService.createNewItem({
//   name,
//   desc,
// });
// return res.json(newCategory);
// } catch (err) {
// console.log(err);
// return res.json(err);
// }
