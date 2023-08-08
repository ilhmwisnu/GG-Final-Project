const router = require('express').Router();
const videoRoute = require("./video")

router.use("/video", videoRoute )

module.exports = router