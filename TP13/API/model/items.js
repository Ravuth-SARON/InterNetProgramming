"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var item = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
      require: true,
      null: false,
    },

    desc: String,
  },
  {
    timestamps: true,
  }
);
var items = mongoose.model("items", item);
module.exports = items;
