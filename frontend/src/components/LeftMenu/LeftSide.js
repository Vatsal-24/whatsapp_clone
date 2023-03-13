import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import SearchComponent from "./SearchComponent";

export default function LeftMenu() {
  return (
    <>
      <Box>
        <Box>
          <Header />
        </Box>
        <Box>
          <SearchComponent />
        </Box>
      </Box>
    </>
  );
}
