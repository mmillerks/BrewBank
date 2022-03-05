//pull schema and model from mongoose using object destructuring
const { Schema, model } = mongoose;

// make user schema
const user = new Schema({
  firstName: String,
  lastName: String,
  userName: String
});

// make user model
const user = model("User", userSchema);