const mongoose = require("mongoose");

const tipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
    enum: ["Public", "Hidden"],
  },
  totalLiked: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    required:true
  },
});

const Tip = mongoose.model("Tip", tipSchema);

module.exports = Tip;
