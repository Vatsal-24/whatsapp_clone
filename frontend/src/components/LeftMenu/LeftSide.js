import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import SearchComponent from "./SearchComponent";
import Conversations from "../chat/Conversations";

export default function LeftSide() {
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
          <Conversations />
        </Box>
      </Box>
    </>
  );
}
