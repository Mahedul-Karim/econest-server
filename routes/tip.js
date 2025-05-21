const express = require("express");
const { allTips, tipDetails, userTips } = require("../controller/tips");

const router = express.Router();

router.route("/").get(allTips).post(userTips);
router.route("/:tipId").get(tipDetails);

module.exports = router;
