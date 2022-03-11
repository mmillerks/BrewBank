// // //pull schema and model from mongoose using object destructuring
// const mongoose = require("mongoose");
const { Schema, model } = require ("mongoose");

// make coffee schema
const coffeeSchema = new Schema({
  store: {
      type: String,
      required: true
  },
  city: {
      type: String,
      required: true
  },
  state: {
      type: String,
      required: true
  },
  bestDrink: {
      type: String,
      required: true
  },
  submitter: {
      type: String,
      required: true
  },
  img: {
      data: Buffer,
      contentType: String
  }
});

// // // make coffee model
const coffee = model('Coffee', coffeeSchema);

module.exports = coffee;