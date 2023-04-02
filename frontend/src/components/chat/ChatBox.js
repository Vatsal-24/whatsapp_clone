import React, { useContext } from "react";
import Box from "@mui/material/Box";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxMessageSection from "./ChatBoxMessageSection";
import ChatBoxSearch from "./ChatBoxSearch";
import { AccountContext } from "../context/AccountProvider";

export default function ChatBox() {
  const { person } = useContext(AccountContext);
  return (
    <>
      <Box>
        <Box>
          <ChatBoxHeader person={person} />
        </Box>
        <Box>
          <ChatBoxMessageSection person={person} />
        </Box>
        <Box>
          <ChatBoxSearch />
        </Box>
      </Box>
    </>
  );
}
