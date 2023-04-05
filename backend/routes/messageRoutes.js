const express = require("express");
const messageController = require("../controllers/messageController");

const router = express.Router();

router.route("/").post(messageController.newMessage);

router.route("/:id").get(messageController.getMessage);

module.exports = router;
