import Dialog from "@mui/material/Dialog"
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from "@mui/material/Grid";
import {makeStyles} from '@mui/styles';
import {qrCodeImage} from "../../constants/constants"
import {styled} from "@mui/material"
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


const useStyles = makeStyles(()=>({
    dislog:{
        margin:"auto",
    },
    dialogCSS:{
        padding:"300px 400px 300px 400px!important"
    },
  }));

  const dialogStyle = {
    height:"90%",
    marginTop:"12%",
    width:"60%",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    overflow:"hidden"

  }

const LoginDialog = ()=>{
    const classes = useStyles();


    
    const onLoginSuccess = (res) =>{
        const decodedInfo = jwt_decode(res.credential);
        console.log(decodedInfo)

    }
    const onLoginError = (res) =>{
        console.log("Login fail...", res)
    }
    return (
        <Dialog open={true} PaperProps={{sx:dialogStyle}}>
            <Grid container alignContent={"center"} margin={5}>
                <Grid item sm={6} style={{paddingLeft:"5%"}}>
                <Typography variant="h4" style={{paddingBottom:"5%", color:"#41525d", fontWeight:"300", fontFamily:"inherit"}}>Use Whatsapp on your computer</Typography>
                    <List>
                        <ListItem style={{padding:"0", fontSize:"18px", marginTop:"25px", color:"#3b4a54", lineHeight:"25px"}}>1. Open Whatsapp on your phone</ListItem>
                        <ListItem style={{padding:"0", fontSize:"18px", marginTop:"25px", color:"#3b4a54", lineHeight:"25px"}}>2. Tap Menu Settings and select Whatsapp Web</ListItem>
                        <ListItem style={{padding:"0", fontSize:"18px", marginTop:"25px", color:"#3b4a54", lineHeight:"25px"}}>3. Point your phone to this screen to capture the code.</ListItem>
                    </List>
                </Grid>
                <Grid item sm={6} textAlign={"center"} style={{maxWidth:"75%", position:"relative"}}>
                <img src={qrCodeImage} alt="qr code"/>
                <Box style={{position:"absolute", top:"40%", left:"38%"}}>
                <GoogleLogin  onSuccess={onLoginSuccess}
  onError={onLoginError}/>
                </Box>
                
                </Grid>
            </Grid>
            
        </Dialog>
    )
}

export default LoginDialog