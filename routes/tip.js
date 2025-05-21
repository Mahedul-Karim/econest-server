const express = require("express");
const { allTips, tipDetails } = require("../controller/tips");

const router = express.Router();

router.route("/").get(allTips);
router.route("/:tipId").get(tipDetails);

module.exports = router;
