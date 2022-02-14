const express = require("express");
const router = express.Router({ mergeParams: true });

router.post("/signUp", async (req, res) => {
    try {
        const {email, password} = req.body
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже.",
          });
    }
});

router.post("/signInWithPassword", async (req, res) => {});

router.post("/token", async (req, res) => {});

module.exports = router;
