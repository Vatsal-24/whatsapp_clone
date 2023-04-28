import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { formatTime } from "../utils/TimeFormat";
import { AccountContext } from "../context/AccountProvider";
import DownloadIcon from "@mui/icons-material/Download";
import { iconPDF } from "../../constants/constants";
import { mediaDownload } from "../utils/downloadMedia";

// const Wrapper = styled(Box)`
//     background: #FFFFFF;
//     padding: 5px;
//     max-width: 60%;
//     width: fit-content;
//     display: flex;
//     border-radius: 10px;
//     word-break: break-word;
// `;

// const Own = styled(Box)`
//     background: #dcf8c6;
//     padding: 5px;
//     max-width: 60%;
//     width: fit-content;
//     margin-left: auto;
//     display: flex;
//     border-radius: 10px;
//     word-break: break-word;
// `;

// const Text = styled(Typography)`
//     font-size: 14px;
//     padding: 0 25px 0 5px;
// `;

// const Time = styled(Typography)`
//     font-size: 10px;
//     color: #919191;
//     margin-top: 6px;
//     word-break: keep-all;
//     margin-top: auto;
// `;

const style = {
  senderBubbleContainer: {
    backgroundColor: "#dcf8c6",
    marginLeft: "auto",
    maxWidth: "60%",
    width: "fit-content",
    padding: "5px",
    display: "flex",
    borderRadius: "10px",
    wordBreak: "break-word",
  },
  receiverBubbleContainer: {
    backgroundColor: "#fff",
    marginRight: "auto",
    maxWidth: "60%",
    width: "fit-content",
    padding: "5px",
    display: "flex",
    borderRadius: "10px",
    wordBreak: "break-word",
  },
  text: {
    color: "#111B21",
    fontSize: "14px",
    fontFamily: "Segoe UI",
    padding: "0 25px 0 5px",
  },
  createdAt: {
    color: "#667781",
    fontSize: "10px",
    fontFamily: "Segoe UI",
    wordBreak: "keep-all",
    marginTop: "auto",
    minWidth: "45px",
  },
};
export default function ChatBubble(props) {
  const { message } = props;
  const { account } = useContext(AccountContext);
  return (
    <>
      {account.sub === message.senderId ? (
        <Box style={style.senderBubbleContainer} margin={0.5}></Box>
      ) : (
        <Box style={style.receiverBubbleContainer} margin={0.5}>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Box>
      )}
    </>
  );
}

const TextMessage = ({ message }) => {
  return (
    <>
      <Typography style={style.text}>{message.text}</Typography>
      <Typography style={style.createdAt}>
        {formatTime(message.createdAt)}
      </Typography>
    </>
  );
};

const ImageMessage = ({ message }) => {
  return (
    <>
      <Box>
        {message?.text?.includes("pdf") ? (
          <Box style={{ display: "flex", alignItems: "center" }}>
            <img
              src={iconPDF}
              alt={"pdf"}
              style={{ width: "80px", height: "100%", objectFit: "cover" }}
            />
            <Typography style={{ fontSize: "14px" }}>
              {message.text.split("/").pop()}
            </Typography>
          </Box>
        ) : (
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={message.text}
              alt={message.text}
              style={{ width: "300px", height: "100%", objectFit: "cover" }}
            />

            <Typography
              style={{
                color: "#667781",
                fontSize: "10px",
                fontFamily: "Segoe UI",
                wordBreak: "keep-all",
              }}
            >
              <DownloadIcon
                style={{
                  alignItems: "center",
                  marginRight: "40px",
                  marginTop: "5px",
                  border: "1px solid #667781",
                  borderRadius: "50%",
                }}
                fontSize="small"
                onClick={(e) => mediaDownload(e, message.text)}
              />
              {formatTime(message.createdAt)}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};
