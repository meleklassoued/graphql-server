const mongoose = require("mongoose");
const Schema = new mongoose.schema();

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId : String,
});

module.exports = mongoose.model("Book", bookSchema);



