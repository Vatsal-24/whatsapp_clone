import React, { useState } from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import SearchComponent from "./SearchComponent";
import Conversations from "../chat/Conversations";

export default function LeftSide() {
  const [searchText, setSearchText] = React.useState("");
  return (
    <>
      <Box>
        <Box>
          <Header />
        </Box>
        <Box>
          <SearchComponent setSearchText={setSearchText} />
        </Box>
        <Box>
          <Conversations searchText={searchText} />
        </Box>
      </Box>
    </>
  );
}
