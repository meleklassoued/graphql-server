const mongoose = require("mongoose");
const schema = mongoose.schema();

const authorSchema = new schema({
  name: String,
  age: Number,
});
