var express = require("express");
var app = express();
const joiValidation = require("../Middleware/joiValidation");
const auth = require("../Middleware/auth");
const schema = require("../schemas/index");
var router = express.Router();

app.use("/", router);
const categoryService = require("../service/category");
// const itemService = require("../service/p");
const schemas = require("../schemas/index");
const productService = require("../service/product");
const joiValidationMiddleware = require("../Middleware/joiValidation");
const multer = require("multer");
const fileStorageEnjine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEnjine });
// router.post("/single", upload.single("image"), (req, res) => {
//   console.log(req.file);
//   res.send("success hx");
// });

router.post(
  "/product/create",
  upload.single("image"),
  async (req, res, next) => {
    const { name, price, item, imageUrl, desc } = req.body;

    const newProduct = await productService.create({
      name,
      price,
      item,
      imageUrl: req.file.path,
      desc,
    });
    res.json(newProduct);
  }
);
router.get("/product/getAll", async (req, res, next) => {
  const result = await productService.getall();
  return res.json(result);
});
router.post("/deleleProduct/:_id", auth.currentUser, async (req, res, next) => {
  const { _id } = req.params;
  const { name, price, item, imageUrl, desc } = req.body;
  const result = await productService.Delete(_id, {
    name,
    price,
    item,
    imageUrl,
    desc,
  });
  res.json(result);
});

router.post("/deleteProduct/:_id", auth.currentUser, async (req, res, next) => {
  const { _id } = req.params;
  const { name, desc } = req.body;
  const result = await categoryService.Delete(_id, { name, desc });
  res.json(result);
});

module.exports = router;
