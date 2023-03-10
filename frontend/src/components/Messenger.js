import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import LoginDialog from "./account/LoginDialog";

const style = {
  mainBackground: {
    height: "100vh",
    backgroundColor: "#eae6df",
  },
  greenHeaderWrapper: {
    boxShadow: "none",
  },
  greenHeader: {
    height: "220px",
    backgroundColor: "#00bfa5",
  },
};

const Messenger = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={style.greenHeaderWrapper}>
          <Toolbar style={style.greenHeader} />
        </AppBar>
      </Box>
      <LoginDialog />
    </>
  );
};

export default Messenger;
