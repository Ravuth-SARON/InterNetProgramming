const Item = require("../model/items");
const categories = require("../model/categories");

const createNewItem = async (newItem) => {
  const category = await categories.findById(newItem.category);
  if (!category) {
    throw new Error("Invalid category");
  }
  try {
    const item = await Item.create(newItem); //create is method means srab
    return {
      success: true,
      data: item,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      err: "Unknow error",
    };
  }
};
//get categorie BY id
const find = async (id) => {
  try {
    const item = await Item.findById(id);
    console.log(item);
    return {
      success: true,
      data: item,
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
    const items = await Item.find();
    return {
      success: true,
      data: items,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: err || "unknown err",
    };
  }
};

const update = async (cat_id, newItem) => {
  try {
    const item = await Item.findById(cat_id);
    item.name = newItem.name;
    item.desc = newItem.desc;
    await item.save();
    return {
      success: true,
      data: item,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      err: error.message,
    };
  }
};

const Delete = async (item_id) => {
  try {
    const id = await Item.deleteOne({ id: item_id });

    return {
      success: true,
      data: "Item has deleted",
      id: id,
    };
  } catch (err) {
    return {
      success: false,
      data: err,
    };
  }
};

module.exports = {
  createNewItem,
  findAll,
  update,
  Delete,
  find,
};
