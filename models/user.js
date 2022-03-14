//pull schema and model from mongoose using object destructuring
const { Schema, model } = require ('mongoose');
//POST for user



// make user schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// make user model
const user = model("User", userSchema);

//export model
module.exports = user;

