import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxMessageSection from "./ChatBoxMessageSection";
import ChatBoxSearch from "./ChatBoxSearch";
import { AccountContext } from "../context/AccountProvider";
import { getConversation, newMessage } from "../API/api";

export default function ChatBox() {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  const [typedMessage, setTypedMessage] = React.useState("");

  const sendText = async (e) => {
    const code = e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: typedMessage,
      };
      await newMessage(message);
      setTypedMessage("");
    }
  };

  useEffect(() => {
    const getConversationDeatils = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data.conversation);
    };
    getConversationDeatils();
  }, [person.sub]);

  return (
    <>
      <Box>
        <Box>
          <ChatBoxHeader person={person} />
        </Box>
        <Box>
          <ChatBoxMessageSection person={person} conversation={conversation} />
        </Box>
        <Box>
          <ChatBoxSearch
            sendText={sendText}
            typedMessage={typedMessage}
            setTypedMessage={setTypedMessage}
          />
        </Box>
      </Box>
    </>
  );
}
