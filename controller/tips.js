const { asyncWrapper } = require("../util/async");
const Tip = require("../model/tip");

exports.allTips = asyncWrapper(async (req, res) => {
  const { type } = req.query;

  let query;

  if (!type) {
    query = {};
  } else {
    query = {
      difficulty: {
        $regex: type,
        $options: "i",
      },
    };
  }

  const tips = await Tip.find({
    availability: "Public",
    ...query,
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

exports.deleteTips = asyncWrapper(async (req, res) => {
  const { tipId } = req.params;

  await Tip.findByIdAndDelete(tipId);

  res.status(200).json({
    success: true,
    message: "Tip successfully deleted",
  });
});

exports.updateTips = asyncWrapper(async (req, res) => {
  const { tipId } = req.params;

  const data = req.body;

  const tip = await Tip.findByIdAndUpdate(tipId, data, { new: true });

  res.status(200).json({
    success: true,
    message: "Tip updated successfully!",
    tip,
  });
});

exports.createTip = asyncWrapper(async (req, res) => {
  const data = req.body;

  const tip = await Tip.create(data);

  res.status(201).json({
    success: true,
    message: "Tip created successfully!",
    tip,
  });
});

exports.updateLikes = asyncWrapper(async (req, res) => {
  const { tipId } = req.params;

  const tip = await Tip.findByIdAndUpdate(
    tipId,
    {
      $inc: {
        totalLiked: 1,
      },
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    success: true,
    tip,
  });
});

exports.featuredTips = asyncWrapper(async (req, res) => {
  const tips = await Tip.find({ availability: "Public" }).limit(6);

  res.status(200).json({
    success: true,
    tips,
  });
});
