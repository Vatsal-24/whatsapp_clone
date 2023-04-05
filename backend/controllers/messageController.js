const Message = require("../models/messageModel");
const Conversation = require("../models/conversationModel");

exports.newMessage = async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.value,
    });
    return res.status(200).json({
      status: "success",
      message: newMessage,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "error",
      message: "Error creating/sending new message",
      error: err,
    });
  }
};

exports.getMessage = async (req, res) => {
  try {
    const conversationId = req.params.id;
    console.log(conversationId);
    const message = await Message.find({
      conversationId: conversationId,
    });
    return res.status(200).json({
      status: "success",
      messages: message,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "error",
      message: "Error getting message",
      error: err,
    });
  }
};
