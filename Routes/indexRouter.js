const express = require("express");

const router = express.Router();

router.get("/", (res, req) => {
    res.status(200).json({
        message: "Hit from indexRouter!"
    })
})

module.exports = router;