const express = require("express");
const {
  allTips,
  tipDetails,
  userTips,
  deleteTips,
  updateTips,
  createTip,
  updateLikes,
  featuredTips,
} = require("../controller/tips");

const router = express.Router();

router.route("/").get(allTips).post(userTips);
router.route("/featured").get(featuredTips);
router.route("/create").post(createTip);
router
  .route("/:tipId")
  .get(tipDetails)
  .delete(deleteTips)
  .patch(updateTips)
  .put(updateLikes);

module.exports = router;
