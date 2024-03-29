import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import { qrCodeImage } from "../../constants/constants";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../context/AccountProvider";
import { useContext } from "react";
import { addNewUser } from "../API/api";

const style = {
  title: {
    paddingBottom: "5%",
    color: "#41525d",
    fontSize: "28px",
    fontWeight: "800",
  },
  listItem: {
    padding: "10px",
    fontSize: "18px",
    color: "#3b4a54",
  },
  qrBox: {
    position: "relative",
  },
  oauth: {
    position: "absolute",
    top: "40%",
    left: "32%",
  },
};

// outermost dialog styling
const dialogStyle = {
  height: "90%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialog = () => {
  const { account, setAccount } = useContext(AccountContext);
  //Google login success function
  const onLoginSuccess = async (res) => {
    const decodedInfo = jwt_decode(res.credential);
    setAccount(decodedInfo);

    // api call to store user in db
    await addNewUser(decodedInfo);
  };
  //Google login failure function
  const onLoginError = (res) => {
    console.log("Login fail...", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Grid container margin={5}>
        <Grid item sm={6}>
          <Typography style={style.title}>
            Use Whatsapp on your computer
          </Typography>
          <List>
            <ListItem>
              <Typography style={style.listItem}>
                1. Open Whatsapp on your phone
              </Typography>
            </ListItem>
            <ListItem>
              <Typography style={style.listItem}>
                2. Tap Menu Settings and select Whatsapp Web
              </Typography>
            </ListItem>
            <ListItem>
              <Typography style={style.listItem}>
                3. Point your phone to this screen to capture the code.
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item sm={6} textAlign={"center"} style={style.qrBox}>
          <img src={qrCodeImage} alt="qr code" />
          <Box style={style.oauth}>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default LoginDialog;
