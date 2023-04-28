const express = require("express");
const fileController = require("../controllers/fileController");
const fileUploadMiddleware = require("../middlewares/fileUploadMiddleware");
const router = express.Router();

router
  .route("/")
  .post(fileUploadMiddleware.single("file"), fileController.uploadFile);

router.route("/:filename").get(fileController.getFile);

module.exports = router;
