const express = require("express");
const auth = require("../middleware/auth");
const storyModel = require("../models/Story");
const storyRoute = express.Router();

storyRoute.get("/", async (req, res) => {
  try {
    const stories = await storyModel.find()
      .populate("user", ["firstName", "lastInitial", "role", "created"]);
    res.json(stories);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

storyRoute.post("/", auth, async (req, res) => {
  try {
    const { title, body } = req.body;
    const newStory = new storyModel({
      user: req.user.id,
      title,
      body,
    });
    const story = await newStory.save();
    res.json(story);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

storyRoute.get("/:id", async (req, res) => {
  try {
    const story = await storyModel
      .findOne({ _id: req.params.id })
      .populate("user", ["firstName", "lastInitial", "role", "created"]);
    if (!story) {
      return res.status(400).json({ msg: "Story not found." });
    }
    res.json(story);
  } catch (err) {
    res.status(404).json({
      error: err,
    });
  }
});

storyRoute.put("/:id", auth, async (req, res) => {
  try {
    const story = await storyModel.findById(req.params.id);
    if (!story) {
      return res.status(404).send({ message: `Cannot find Story with id: ${req.params.id}!` });
    }
    if (story.user.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not authorized to update this story." });
    }
    await storyModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send({ message: "Story was updated successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: `Error updating Story with id: ${req.params.id}!` });
  }
});

storyRoute.delete("/:id", auth, async (req, res) => {
  try {
    const story = await storyModel.findById(req.params.id);
    if (!story) {
      return res.status(404).send({ msg: `Cannot delete Story with id: ${req.params.id}.` });
    }
    if (story.user.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not authorized to delete this story." });
    }
    await storyModel.findByIdAndDelete(req.params.id);
    res.send({ msg: "Story was removed!" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: `Cannot delete Story with id: ${req.params.id}.` });
  }
});

module.exports = storyRoute;
