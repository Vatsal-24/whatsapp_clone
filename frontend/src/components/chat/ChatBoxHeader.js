import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { defaultProfilePicture } from "../../constants/constants";
import { AccountContext } from "../context/AccountProvider";

const style = {
  mainContainer: {
    height: "55px",
    padding: "15px 16px",
    backgroundColor: "#f0f2f5",
    display: "flex",
    alignItems: "center",
  },
  dp: {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  name: {
    marginLeft: "16px",
    fontSize: "16px",
    color: "#111b21",
  },
  status: {
    marginLeft: "16px",
    fontSize: "13px",
    color: "#667781",
  },
  iconContainer: {
    marginLeft: "auto",
  },
  icon: {
    padding: "12px",
    fontSize: "24px",
    color: "#54656f",
  },
};

export default function ChatBoxHeader() {
  const { person } = useContext(AccountContext);
  return (
    <>
      <Box style={style.mainContainer}>
        <Box>
          <img
            src={person.picture || defaultProfilePicture}
            alt="dp"
            style={style.dp}
          />
        </Box>
        <Box>
          <Typography style={style.name}>{person.name || "User"}</Typography>
          <Typography style={style.status}>Online</Typography>
        </Box>
        <Box style={style.iconContainer}>
          <SearchIcon style={style.icon} />
          <MoreVertIcon style={style.icon} />
        </Box>
      </Box>
    </>
  );
}
