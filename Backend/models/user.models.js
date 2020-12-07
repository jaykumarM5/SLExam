const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  },
  name : {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("user", TaskSchema);
