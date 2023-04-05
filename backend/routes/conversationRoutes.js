const express = require("express");
const conversationController = require("../controllers/conversationController");

const router = express.Router();

router
  .route("/")
  .post(conversationController.newConversation)
  .get(conversationController.getConversation);

module.exports = router;
