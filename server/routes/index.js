const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/rooms", require("./rooms.routes"));
router.use("/bookedRooms", require("./bookedRooms.routes"));
router.use("/adminPanel", require("./adminPanel.routes"));

module.exports = router;
