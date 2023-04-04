const Conversation = require("../models/conversationModel");

exports.newConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const exist = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (exist) {
      return res.status(200).json({
        status: "success",
        message: "Conversation already exist",
      });
    }

    const newConversation = await Conversation.create({
      members: [senderId, receiverId],
    });

    return res.status(200).json({
      status: "success",
      message: "New conversation created",
      conversation: newConversation,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "Error creating new user",
      error: err,
    });
  }
};
