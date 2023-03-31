import React from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import Profile from "./Profile";

const style = {
  drawer1: {
    left: "65px",
    top: "25px",
    height: "95%",
    width: "27.5%",
    boxShadow: "none",
  },
  drawer2: {
    zIndex: "1500",
  },
  header: {
    backgroundColor: "#008069",
    height: "125px",
    color: "white",
    paddingTop: "70px",
    paddingLeft: "25px",
  },
  headerText: {
    fontWeight: "600",
    fontSize: "18px",
  },
  arrowIcon: {
    verticalAlign: "bottom",
    marginRight: "50px",
  },
};

export default function infoDrawer(props) {
  const { openDrawer, setOpenDrawer } = props;

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: style.drawer1 }}
        style={style.drawer2}
      >
        <Grid container>
          <Grid
            item
            sm={12}
            onClick={() => setOpenDrawer(false)}
            style={style.header}
          >
            <Typography style={style.headerText}>
              <ArrowBackIcon style={style.arrowIcon} />
              Profile
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            style={{ backgroundColor: "#f0f2f5", height: "82vh" }}
          >
            <Profile />
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}
