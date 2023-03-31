import React from "react";
import { emptyChatImage } from "../../constants/constants";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const style = {
  container: {
    backgroundColor: "#f8fafb",
    padding: "30px 0",
    textAlign: "center",
    height: "88vh",
    borderBottom: "6px solid #25d366",
  },
  emptyChatImage: {
    width: "450px",
    marginTop: "200px",
    marginBottom: "10px",
  },
  title: {
    fontWeight: "100",
    fontSize: "32px",
    color: "#41525D",
    fontFamily: "Segoe UI",
    margin: "2%",
  },
  description: {
    color: "#667781",
    fontWeight: "400",
    fontSize: "14px",
    fontFamily: "Segoe UI",
    margin: "2%",
  },
  encrypted: { verticalAlign: "bottom", fontSize: "20px" },
};
export default function EmptyChat() {
  return (
    <>
      <Box>
        <Box style={style.container}>
          <img
            src={emptyChatImage}
            style={style.emptyChatImage}
            alt="empty-chat"
          />
          <Typography style={style.title}>WhatsApp Web</Typography>
          <Typography style={style.description}>
            Send and receive messages without keeping your phone online. <br />
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </Typography>
          <Typography
            style={{
              color: "#8696a0",
              fontSize: "14px",
              fontFamily: "Segoe UI",
            }}
          >
            <LockIcon style={style.encrypted} /> End-to-end encrypted
          </Typography>
        </Box>
      </Box>
    </>
  );
}
