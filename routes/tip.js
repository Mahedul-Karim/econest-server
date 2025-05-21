const express = require("express");
const {
  allTips,
  tipDetails,
  userTips,
  deleteTips,
  updateTips,
  createTip,
} = require("../controller/tips");

const router = express.Router();

router.route("/").get(allTips).post(userTips);
router.route("/create").post(createTip);
router.route("/:tipId").get(tipDetails).delete(deleteTips).patch(updateTips);

module.exports = router;
