import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import LoginDialog from "./account/LoginDialog";
import { useContext } from "react";
import { AccountContext } from "./context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

const style = {
  mainBackground: {
    height: "100vh",
    backgroundColor: "#eae6df",
  },
  greenHeaderWrapper: {
    boxShadow: "none",
  },
  headerBeforeLogin: {
    height: "250px",
    backgroundColor: "#00bfa5",
  },
  headerAfterLogin: {
    height: "150px",
    backgroundColor: "#00a884",
  },
};

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      {account ? (
        <>
          <Box sx={{ flexGrow: 1 }} style={style.mainBackground}>
            <AppBar position="static" style={style.greenHeaderWrapper}>
              <Toolbar style={style.headerAfterLogin} />
            </AppBar>
          </Box>
          <ChatDialog />
        </>
      ) : (
        <>
          <Box sx={{ flexGrow: 1 }} style={style.mainBackground}>
            <AppBar position="static" style={style.greenHeaderWrapper}>
              <Toolbar style={style.headerBeforeLogin} />
            </AppBar>
          </Box>
          <LoginDialog />
        </>
      )}
    </>
  );
};

export default Messenger;
