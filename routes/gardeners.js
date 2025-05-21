const express = require("express");
const { allGardeners, featuredGardener } = require("../controller/gardeners");

const router = express.Router();

router.route("/").get(allGardeners);
router.route("/featured").get(featuredGardener);

module.exports = router;
