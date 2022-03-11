// // //pull schema and model from mongoose using object destructuring
const { Schema, model } = require ("mongoose");

// make coffee schema
const coffeeSchema = new Schema({
  store: String,
  city: String,
  state: String,
  bestDrink: String,
  submitter: String,
  img: {
      data: Buffer,
      contentType: String
  }
});

// // // make coffee model
const coffee = model("Coffee", coffeeSchema);

module.exports = coffee;