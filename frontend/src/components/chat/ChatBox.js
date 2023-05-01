import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxMessageSection from "./ChatBoxMessageSection";
import ChatBoxSearch from "./ChatBoxSearch";
import { AccountContext } from "../context/AccountProvider";
import { getConversation, newMessage } from "../API/api";

export default function ChatBox() {
  const { person, account, socket, sendMessageFlag, setSendMessageFlag } =
    useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  const [typedMessage, setTypedMessage] = useState("");

  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [incomingMessage, setIncomingMessage] = useState("");

  const sendText = async (e) => {
    const code = e.which;
    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: typedMessage,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }
      socket.current.emit("sendMessage", message);
      await newMessage(message);
      setTypedMessage("");
      setFile("");
      setImage("");
      setSendMessageFlag((prev) => !prev);
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

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({ ...data, createdAt: Date.now() });
    });
  });

  return (
    <>
      <Box>
        <Box>
          <ChatBoxHeader person={person} />
        </Box>
        <Box>
          <ChatBoxMessageSection
            sendMessageFlag={sendMessageFlag}
            setSendMessageFlag={setSendMessageFlag}
            incomingMessage={incomingMessage}
            conversation={conversation}
          />
        </Box>
        <Box>
          <ChatBoxSearch
            sendText={sendText}
            typedMessage={typedMessage}
            setTypedMessage={setTypedMessage}
            file={file}
            setFile={setFile}
            setImage={setImage}
          />
        </Box>
      </Box>
    </>
  );
}
