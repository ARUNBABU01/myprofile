import { Grid, Typography } from "@mui/material";
import React from "react";
import { myprofile } from "../db";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import { Styles } from "../Styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";



export default function Contact(){

    const classes = Styles()
    
        const contactData = myprofile.contact_info

        const customComp = (props) => {
            const {icon,text} = props
            return (
                    <Grid item>
                        <SmartphoneIcon  sx={{ fontSize: 40 }} color="primary" />
                        <Typography>9094023639</Typography>
                    </Grid>
            )
        }

    return(
<>


<div>
<Grid container direction={"column"} spacing={3}>
<Grid item>
<Typography style={{fontFamily:"sans-serif"}} variant="h4" color="info.main">How can you contact me?</Typography>
</Grid>
<br />
<CSSTransition key={'csscontact'} in={true} classNames={classes.slideInMUI} timeout={2000}>
    <div>
        <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item><SmartphoneIcon  sx={{ fontSize: 40 , color:"#ffe082" }}  /></Grid>
            <Grid item ><Typography align="justify">{contactData.mobile}</Typography></Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item><WhatsAppIcon sx={{ fontSize: 40, color:"#4FCE5D"  }} /></Grid>
        <Grid item ><Typography align="justify">{contactData.whatsapp}</Typography></Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item><MailOutlineIcon sx={{ fontSize: 40, color:"#BB001B"  }} /></Grid>
            <Grid item ><Typography align="justify">{contactData.email}</Typography></Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item> <AlternateEmailIcon sx={{ fontSize: 40, color:"#EA4335"  }} /></Grid>
            <Grid item ><Typography align="justify">{contactData.alternamte_email}</Typography></Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item> <LinkedInIcon sx={{ fontSize: 40, color:"#0e76a8" }}/></Grid>
            <Grid item ><Typography align="justify">{contactData.linkedin}</Typography></Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item> <LanguageIcon sx={{ fontSize: 40, color:"primary"  }} /></Grid>
            <Grid item ><Typography align="justify">{contactData.website}</Typography></Grid>
        </Grid>
        </div>
        </CSSTransition>
</Grid>
</div>
</>

    )
}