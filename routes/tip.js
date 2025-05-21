const express = require("express");
const { allTips } = require("../controller/tips");

const router = express.Router();

router.route("/").get(allTips);

module.exports = router;
