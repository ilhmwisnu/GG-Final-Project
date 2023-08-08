const router = require('express').Router();
const videoController = require("../controller/video_controller")

router.get("/", videoController.getAll )

router.get("/:id", videoController.getById )

router.get("/:id/product", videoController.getProducts )

router.get("/:id/comment", videoController.getComments  )

router.post("/:id/comment", videoController.addComment )

module.exports = router