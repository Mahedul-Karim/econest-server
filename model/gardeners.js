const mongoose = require("mongoose");

const gardenerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  experiences: [
    {
      type: String,
    },
  ],
  image: {
    type: String,
  },
  totalSharedTips: {
    type: Number,
  },
});

const Gardener = mongoose.model("Gardener", gardenerSchema);

module.exports = Gardener;
