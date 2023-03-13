import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import LeftSide from "../LeftMenu/LeftSide";
import EmptyChat from "./EmptyChat";

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
          <EmptyChat />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ChatDialog;
