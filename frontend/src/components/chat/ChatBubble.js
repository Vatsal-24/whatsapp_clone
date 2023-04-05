import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { formatTime } from "../utils/TimeFormat";
const style = {
  senderBubbleContainer: {
    backgroundColor: "#dcf8c6",
    marginLedt: "auto",
    minWidth: "20%",
    maxWidth: "25%",
    margin: "1% 3%",
    borderRadius: "10px",
    padding: "0.8% 1%",
    wordBreak: "break-word",
    display: "flex",
  },
  receiverBubbleContainer: {
    backgroundColor: "#fff",
    minWidth: "80%",
    maxWidth: "60%",
    margin: "1% 3%",
    borderRadius: "10px",
    padding: "1% 1%",
    wordBreak: "break-word",
    display: "flex",
  },
  text: {
    color: "#111B21",
    fontSize: "14px",
    fontFamily: "Segoe UI",
  },
  createdAt: {
    color: "#667781",
    fontSize: "11px",
    fontFamily: "Segoe UI",
    marginTop: "px",
    wordBreak: "keep-all",
    marginRight: "auto",
  },
};
export default function ChatBubble(props) {
  const { message } = props;
  return (
    <>
      <Box style={style.senderBubbleContainer}>
        <Typography style={style.text}>{message.text}</Typography>
        <Typography style={style.createdAt}>
          {formatTime(message.createdAt)}
        </Typography>
      </Box>
    </>
  );
}
