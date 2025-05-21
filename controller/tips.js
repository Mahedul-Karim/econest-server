const { asyncWrapper } = require("../util/async");
const Tip = require("../model/tip");

exports.allTips = asyncWrapper(async (req, res) => {
  const tips = await Tip.find({
    availability: "Public",
  });

  res.status(200).json({
    success: true,
    tips,
  });
});
