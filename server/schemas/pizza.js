const { Schema, model } = require("mongoose");

const pizzaSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

module.exports = model("Pizza", pizzaSchema);
