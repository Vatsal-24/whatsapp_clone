import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoginDialog from "./account/LoginDialog";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainBackground: {
    height: "100vh",
    backgroundColor: "#eae6df",
  },
  greenHeaderWrapper: {
    // ! This is not working
    boxShadow: "100px 0px 0px 0px grey",
  },
  greenHeader: {
    height: "220px",
    backgroundColor: "#00bfa5",
  },
});

const Messenger = () => {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.greenHeaderWrapper}>
          <Toolbar className={classes.greenHeader} />
        </AppBar>
      </Box>
      <LoginDialog />
    </>
  );
};

export default Messenger;
