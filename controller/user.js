const User = require("../model/user");
const { asyncWrapper } = require("../util/async");

exports.handleUser = asyncWrapper(async (req, res, next) => {
  const { email } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(200).json({
      success: true,
    });
  }

  await User.create({ email });

  res.status(201).json({
    success: true,
  });
});
