import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import SearchComponent from "./SearchComponent";
import Conversations from "../chat/Conversations";

export default function LeftSide(props) {
  const { userSelected, setUserSelected, chatSelected, setChatSelected } =
    props;
  return (
    <>
      <Box>
        <Box>
          <Header />
        </Box>
        <Box>
          <SearchComponent />
        </Box>
        <Box>
          <Conversations
            userSelected={userSelected}
            setUserSelected={setUserSelected}
            chatSelected={chatSelected}
            setChatSelected={setChatSelected}
          />
        </Box>
      </Box>
    </>
  );
}
