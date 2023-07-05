const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const product = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: Number,
  item: {
    type: Schema.Types.ObjectId,
    ref: "items",
    require: true,
    null: false,
  },
  imageUrl: String,
  desc: String,
});

var productSchema = mongoose.model("product", product);
module.exports = productSchema;
