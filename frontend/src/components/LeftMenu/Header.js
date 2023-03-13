import React from "react";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageIcon from "@mui/icons-material/Message";
import { Grid, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Header() {
  const { account } = useContext(AccountContext);
  const style = {
    bar: {
      height: "55px",
      backgroundColor: "#f0f2f5",
      padding: "15px 16px",
    },
    profilePicture: {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
    },
    dpImage: {
      padding: "10px",
    },
    icons: {
      padding: "15px",
      color: "#54656f",
    },
    menuItem: {
      fontSize: "14px",
      color: "#3b4a54",
      padding: "10px 60px 5px 24px",
    },
    menu: {
      boxShadow: "5px ",
    },
  };
  const [menu, setMenu] = React.useState(null);
  const open = Boolean(menu);
  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };
  const handleClose = () => {
    setMenu(null);
  };

  return (
    <>
      <Box style={style.bar}>
        <Grid container>
          <Grid item xs={8} style={style.dpImage}>
            <img src={account.picture} alt="dp" style={style.profilePicture} />
          </Grid>
          <Grid container item xs={4}>
            <Grid item style={style.icons}>
              <IconButton>
                <MessageIcon />
              </IconButton>
            </Grid>
            <Grid item style={style.icons}>
              <IconButton onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={menu}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                style={style.menu}
              >
                <MenuItem onClick={handleClose} style={style.menuItem}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleClose} style={style.menuItem}>
                  Logout
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
