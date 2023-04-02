import React from "react";
import Box from "@mui/material/Box";
import { chatBackground } from "../../constants/constants";

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
export default function ChatBoxMessageSection() {
  return (
    <>
      <Box style={style.container}></Box>
    </>
  );
}
