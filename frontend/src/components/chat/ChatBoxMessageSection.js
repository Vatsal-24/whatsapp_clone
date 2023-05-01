import React, { useEffect, useState, useContext, useRef } from "react";
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
  const { sendMessageFlag, setSendMessageFlag, incomingMessage, conversation } =
    props;
  const scrollRef = useRef();

  useEffect(() => {
    // Fetching conversation
    let conversation = {};
    const getConversationDeatils = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      conversation = data.conversation;
      const res = await getMessage(conversation?._id);
      setMessages(res.messages);
    };
    getConversationDeatils();
  }, [person._id, sendMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  return (
    <>
      <Box style={style.container}>
        {messages &&
          messages.map((message) => (
            <>
              <ChatBubble message={message} key={message._id} />
              <div ref={scrollRef} />
            </>
          ))}
      </Box>
    </>
  );
}
