import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { qrCodeImage } from "../../constants/constants";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const useStyles = makeStyles(() => ({
  title: {
    paddingBottom: "5%",
    color: "#41525d",
    // ! not working
    fontSize: "28px",
    fontWeight: "800",
    fontFamily: "inherit",
    // ! not working
  },
  listItem: {
    padding: "10px",
    // ! not working
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
}));

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
  const classes = useStyles();

  //Google login success function
  const onLoginSuccess = (res) => {
    const decodedInfo = jwt_decode(res.credential);
    console.log(decodedInfo);
  };
  //Google login failure function
  const onLoginError = (res) => {
    console.log("Login fail...", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Grid container margin={5}>
        <Grid item sm={6}>
          <Typography className={classes.title}>
            Use Whatsapp on your computer
          </Typography>
          <List>
            <ListItem>
              <Typography className={classes.listItem}>
                1. Open Whatsapp on your phone
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.listItem}>
                2. Tap Menu Settings and select Whatsapp Web
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.listItem}>
                3. Point your phone to this screen to capture the code.
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item sm={6} textAlign={"center"} className={classes.qrBox}>
          <img src={qrCodeImage} alt="qr code" />
          <Box className={classes.oauth}>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default LoginDialog;
