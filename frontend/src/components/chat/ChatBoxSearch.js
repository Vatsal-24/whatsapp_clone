import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import InputBase from "@mui/material/InputBase";
import { uploadFile } from "../API/api";

const style = {
  container: {
    height: "6vh",
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0 15px",
    backgroundColor: "#f0f2f5",
  },
  icons: {
    margin: "5px",
    color: "#54656f",
  },
  searchContainer: {
    margin: "5px 10px",
    color: "#54656f",
    width: "85%",
  },
  searchBar: {
    backgroundColor: "#fff",
    width: "100%",
    padding: "5px 12px",
    borderRadius: "8px",
  },
};
export default function ChatBoxSearch(props) {
  const { sendText, typedMessage, setTypedMessage, file, setFile } = props;

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setTypedMessage(e.target.files[0].name);
  };

  useEffect(() => {
    const setImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        await uploadFile(data);
      }
    };
    setImage();
  }, [file]);

  return (
    <>
      <Box style={style.container}>
        <EmojiEmotionsOutlinedIcon style={style.icons} />
        <label htmlFor="fileInput">
          <AttachFileIcon style={style.icons} />
        </label>

        <input
          type="file"
          style={{ display: "none" }}
          id="fileInput"
          onChange={(e) => onFileChange(e)}
        />
        <Box style={style.searchContainer}>
          <InputBase
            placeholder="Type a message"
            style={style.searchBar}
            onChange={(e) => setTypedMessage(e.target.value)}
            onKeyPress={(e) => sendText(e)}
            value={typedMessage}
          />
        </Box>
        <MicIcon style={style.icons} />
      </Box>
    </>
  );
}
