const route = require("express").Router();

const Task = require("../models/task.models");

const User = require("../models/user.models");

route.post("/adduser", async (req, res) => {
  const eventItem = new User({
    userID: req.body.user,
    pass: req.body.password,
    name: req.body.name,
  })
  try {
    const savedEvent = await eventItem.save();
    res.json(savedEvent);
  } catch (err) {
    console.log(err);
  }

});



route.get("/event",async (req, res) => {
  try {
    const foundEvent = await Task.find();
    res.json(foundEvent);
  } catch (err) {
    console.log(err)
  }

});



route.post("/event", async (req, res) => {
  const eventItem = new Task({
    desc: req.body.desc,
    assignedTo: req.body.assignedTo,
    assignedBy: req.body.assignedTo,
    status : incomplete,
  })
  try {
    const savedEvent = await eventItem.save();
    res.json(savedEvent);
  } catch (err) {
    console.log(err);
  }

});



// route.delete("/event/:id",async (req, res) => {
//   const eventId = req.params.id
//   try {
//     const deletedItem = await Task.deleteOne({_id: eventId});
//     res.json(deletedItem);
//   } catch (err) {
//     console.log(err)
//   }
// });

module.exports = route;
