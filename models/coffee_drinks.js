//pull schema and model from mongoose using object destructuring
const { Schema, model } = mongoose;

// make coffee schema
const coffeeDrinkSchema = new Schema({
  name: String,
  store: String,
  location: String
});

// make coffee model
const CoffeeDrink = model("Coffee Drink", coffeeDrinkSchema);