const { asyncWrapper } = require("../util/async");
const Gardener = require("../model/gardeners");

exports.featuredGardener = asyncWrapper(async (req, res) => {
  const gardeners = await Gardener.find({
    status: "active",
  }).limit(6);

  res.status(200).json({
    success: true,
    gardeners,
  });
});

exports.allGardeners = asyncWrapper(async (req, res) => {
  const gardeners = await Gardener.find();

  res.status(200).json({
    success: true,
    gardeners,
  });
});
