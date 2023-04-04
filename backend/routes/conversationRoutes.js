const express = require("express");
const conversationController = require("../controllers/conversationController");

const router = express.Router();

router.route("/").post(conversationController.newConversation);

module.exports = router;
