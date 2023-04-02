import React, { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const style = {
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  profilePicture: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    padding: "30px 0",
  },
  nameContainer: {
    backgroundColor: "#fff",
    padding: "12px 30px 2px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },
  yourProfile: {
    color: "#008069",
    fontWeight: "200",
  },
  profileName: {
    margin: "20px 0px",
    fontSize: "17px",
    color: "#3b4a54",
  },
  descriptionText: {
    color: "#8696A0",
    fontSize: "16px",
    fontWeight: "normal",
    fontFamily: "Segoe UI",
    margin: "25px 25px",
  },
};
export default function Profile() {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Box style={style.imageContainer}>
        <img
          src={account.picture}
          alt="profile-pic"
          style={style.profilePicture}
        />
      </Box>
      <Box style={style.nameContainer}>
        <Typography style={style.yourProfile}>Your Profile</Typography>
        <Typography style={style.profileName}>{account.name}</Typography>
      </Box>
      <Box>
        <Typography style={style.descriptionText}>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </Box>
      <Box style={style.nameContainer}>
        <Typography style={style.yourProfile}>About</Typography>
        <Typography style={style.profileName}>
          Eat, Sleep, Code, Invest, Repeat!
        </Typography>
      </Box>
    </>
  );
}
