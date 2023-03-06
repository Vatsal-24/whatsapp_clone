import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Box from "@mui/material/Box"
import LoginDialog from "./account/LoginDialog"
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    mainBackground:{
        height:"100vh",
        backgroundColor:"#eae6df",
    },
    greenHeader:{
        height:"220px",
        backgroundColor:"#00bfa5!important",
        boxShadow:"none!important",
    },
  });

const Messenger = () =>{
    const classes = useStyles();
    return (
        <Box className={classes.mainBackground}>
        <AppBar className={classes.greenHeader}>
            <Toolbar>

            </Toolbar>
        </AppBar> 
        <LoginDialog/>
        </Box>
        
    )

}

export default Messenger;