import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import { chatBackground } from "../../constants/constants";
import { getConversation, getMessage } from "../API/api";
import ChatBubble from "./ChatBubble";
import { AccountContext } from "../context/AccountProvider";

const style = {
  container: {
    backgroundImage: `url(
      ${chatBackground}
    )`,
    backgroundSize: "40%",
    height: "80vh",
    overflowY: "scroll",
  },
};

export default function ChatBoxMessageSection(props) {
  const { person, account } = useContext(AccountContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetching conversation
    let conversation = {};
    const getConversationDeatils = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      conversation = data.conversation;
      console.log(person.name, conversation);
      const res = await getMessage(conversation?._id);
      setMessages(res.messages);
    };
    getConversationDeatils();
  }, [person._id]);
  return (
    <>
      <Box style={style.container}>
        {messages &&
          messages.map((message) => <ChatBubble message={message} />)}
      </Box>
    </>
  );
}
