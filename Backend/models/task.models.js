const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  desc: {
    type: String,
    required: true
  },
  assignedTo: {
    type: String,
    required: true
  },
  assignedBy : {
    type: String,
    required: true
  },
  status : {
      type: String,
      required: true
  }
});

module.exports = mongoose.model("task", TaskSchema);