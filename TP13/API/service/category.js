const Category = require("../model/categories");
// const { id } = require("../schemas/register");

const createNewCategory = async (newCategory) => {
  try {
    const category = await Category.create(newCategory); //create is method means srab
    return {
      success: true,
      data: category,
    };
  } catch (error) {
    return {
      success: false,
      err: error,
    };
  }
};
//get categorie BY id
const find = async (id) => {
  try {
    const result = await Category.findById(id);
    return {
      success: true,
      data: result,
    };
  } catch (err) {
    return {
      success: false,
      data: err,
    };
  }
};
//get All categorie
const findAll = async () => {
  try {
    const categories = await Category.find();
    return {
      success: true,
      data: categories,
    };
  } catch (err) {
    return {
      success: false,
      error: err,
    };
  }
};

const update = async (cat_id, newCategory) => {
  try {
    const category = await Category.findById(cat_id);
    category.name = newCategory.name;
    category.desc = newCategory.desc;
    await category.save();
    return {
      success: true,
      data: category,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      err: error.message,
    };
  }
};

const Delete = async (cat_id) => {
  try {
    await Category.deleteOne({ _id: cat_id });
    return {
      success: true,
      data: "Category has deleted",
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
  createNewCategory,
  findAll,
  update,
  Delete,
  find,
};
