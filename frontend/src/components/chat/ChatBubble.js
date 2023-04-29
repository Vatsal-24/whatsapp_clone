import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { formatTime } from "../utils/TimeFormat";
import { AccountContext } from "../context/AccountProvider";
import DownloadIcon from "@mui/icons-material/Download";
import { iconPDF } from "../../constants/constants";
import { mediaDownload } from "../utils/downloadMedia";

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

const fileMessageStyle = {
  pdfImage: {
    width: "80px",
    height: "100%",
    objectFit: "cover",
  },
  photoImage: {
    width: "300px",
    height: "100%",
    objectFit: "cover",
  },
  downloadIcon: {
    alignItems: "center",
    marginRight: "220px",
    marginTop: "5px",
    border: "1px solid #667781",
    borderRadius: "50%",
  },
};
export default function ChatBubble(props) {
  const { message } = props;
  const { account } = useContext(AccountContext);
  return (
    <>
      {account.sub === message.senderId ? (
        <Box style={style.senderBubbleContainer} margin={0.5}>
          {message.type === "file" ? (
            <FileMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Box>
      ) : (
        <Box style={style.receiverBubbleContainer} margin={0.5}>
          {message.type === "file" ? (
            <FileMessage message={message} />
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

const FileMessage = ({ message }) => {
  return (
    <>
      <Box>
        {message?.text?.includes("pdf") ? (
          <>
            <Box alignItems="center">
              <Box style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={iconPDF}
                  alt={"pdf"}
                  style={fileMessageStyle.pdfImage}
                  onClick={(e) => mediaDownload(e, message.text)}
                />

                <Typography style={{ fontSize: "14px" }}>
                  {message.text.split("/").pop()}
                </Typography>
              </Box>
              <Typography style={style.createdAt}>
                {formatTime(message.createdAt)}
              </Typography>
            </Box>
          </>
        ) : (
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={message.text}
              alt={message.text}
              style={fileMessageStyle.photoImage}
            />

            <Typography style={style.createdAt}>
              <DownloadIcon
                style={fileMessageStyle.downloadIcon}
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
