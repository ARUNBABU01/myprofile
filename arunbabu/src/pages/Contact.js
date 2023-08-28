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
import { CSSTransition } from "react-transition-group";
import GitHubIcon from '@mui/icons-material/GitHub';
import { ContactItem } from "../components/ContactItem";
import { useUserData } from "../UserContext";
import { USE_FIREBASE_DB } from "../Base";


const contactIcons = {
    email: {icon: MailOutlineIcon, color:"#BB001B"},
    alternate_email:{icon: AlternateEmailIcon, color:"#EA4335"},
    mobile:{icon: SmartphoneIcon, color:"#ffe082"},
    whatsapp:{icon: WhatsAppIcon, color:"#4FCE5D"},
    linkedin:{icon: LinkedInIcon, color:"#0e76a8"},
    github:{icon: GitHubIcon, color:"#primary"},
    xing:{icon: "", color:"#"},
    website:{icon: LanguageIcon, color:"#primary"},
    }

export default function Contact(){

    const classes = Styles()
    
    const {userData} = useUserData();
    const userProfile = USE_FIREBASE_DB ? userData : myprofile
    const contactData = userProfile.contact_info

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
    {Object.keys(contactData)
        .filter( item => typeof contactData[item] === 'string' && contactData[item] !== "")
        .map(
            item => <ContactItem key={ contactData[item]} ContactItemIcon={contactIcons[item].icon} data={ contactData[item]} itemColor={contactIcons[item].color} />
        )}
        </div>
        </CSSTransition>
</Grid>
</div>
</>

    )
}