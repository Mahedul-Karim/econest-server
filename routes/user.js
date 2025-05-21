const express = require("express");
const { handleUser } = require("../controller/user");

const router = express.Router();

router.route("/").post(handleUser);

module.exports = router;
