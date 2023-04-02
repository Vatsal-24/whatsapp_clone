import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import LeftSide from "../LeftMenu/LeftSide";
import EmptyChat from "./EmptyChat";
import ChatBox from "./ChatBox";
import { AccountContext } from "../context/AccountProvider";

const style = {
  rightPart: {
    borderLeft: "1px solid rgba(0,0,0,0.14)",
    minWidth: "300px",
  },
};

// outermost dialog styling
const dialogStyle = {
  height: "95%",
  margin: "20px 65px",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius: "0px",
};

const ChatDialog = () => {
  const [chatSelected, setChatSelected] = React.useState(true);

  const { person } = useContext(AccountContext);
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth="md"
    >
      <Grid container>
        <Grid item xs={3.5}>
          <LeftSide />
        </Grid>
        <Grid item xs={8.5} style={style.rightPart}>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ChatDialog;
