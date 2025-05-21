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

exports.tipDetails = asyncWrapper(async (req, res) => {
  const { tipId } = req.params;

  const tip = await Tip.findById(tipId);

  res.status(200).json({
    success: true,
    tip: tip || null,
  });
});
