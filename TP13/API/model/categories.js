"use strict";
var mongoose = require("mongoose");

var categoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: String,
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "items" }],
  },
  {
    timestamps: true,
  }
);

var Category = mongoose.model("Categories", categoriesSchema);
module.exports = Category;
