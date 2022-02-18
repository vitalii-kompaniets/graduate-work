const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/rooms", require("./rooms.routes"));
router.use("/favouritesRooms", require("./favouritesRooms.routes"));
router.use("/users", require("./users.routes"));

module.exports = router;
