const { model } = require("mongoose");
const product = require("../model/product");
const item = require("../model/items");

const create = async (newproduct) => {
  const result = await product.create(newproduct);

  /* await categorie.findByIdAndUpdate(req.body.category, {
        $push: { items: newItem._id },
      }); */

  try {
    return {
      success: true,
      data: result,
    };
  } catch (err) {
    return {
      success: false,
      error: err,
    };
  }
};
const getall = async () => {
  try {
    const products = await product.find();
    return {
      success: true,
      data: products,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: err || "unknown err",
    };
  }
};
const Delete = async (cat_id) => {
  try {
    await product.deleteOne({ _id: cat_id });
    return {
      success: true,
      data: "Product has deleted",
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: err,
    };
  }
};
module.exports = {
  create,
  getall,
  Delete,
};
