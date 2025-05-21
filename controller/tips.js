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

exports.userTips = asyncWrapper(async (req, res) => {
  const { email } = req.body;

  const tips = await Tip.find({ email });

  res.status(200).json({
    success: true,
    tips,
  });
});
