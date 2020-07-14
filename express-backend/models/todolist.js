const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: String,
  timeStamp: Date,
});

const TodoListSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  todos: [TodoSchema],
});

module.exports = TodoList = mongoose.model("TodoList", TodoListSchema);
