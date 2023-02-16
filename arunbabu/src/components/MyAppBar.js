import React, { useEffect, useState } from "react";
import {styled,alpha} from '@mui/material/styles'
import clsx from 'clsx';
import {AppBar, Toolbar, Typography} from '@mui/material'
import { Styles } from "../Styles";
const Logo = styled("div")(({theme}) => ({
    position:"relative",
    borderRadius:theme.shape.borderRadius,
    marginRight:theme.spacing(2),
    marginLeft:0,
    width:"100%",
    [theme.breakpoints.up("sm")]:{
        marginLeft:"20vw",
        width:"30vw",
    }
}))



const LogoWrapper = styled("div")(({theme}) => ({
    backgroundColor: alpha(theme.palette.primary.light,0),
    "&:hover":{
        backgroundColor:alpha(theme.palette.primary.light,0.25),
    },
    padding:theme.spacing(0,3),
    height:"100%",
    position:"relative",
    pointerEvents:"none",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
}))




function MyAppBar(props){
    const classes = Styles();
    const {open, toggleDrawer} = props;

    return(
        <AppBar
            position="static"
            className={clsx(classes.appBar, {
            [classes.appBarShift]:open,
            })}
            data-testid="Appbar"
        >
            <Toolbar>
                <Logo>
                    <LogoWrapper>
                        {/* <img 
                        src="../assets/logo_pic.webp"
                         alt="My Pic">
                            style={{width:"5rem",height:"5rem"}}
                        </img> */}
                         <Typography 
                         component="h1"
                         variant="h5"
                         color="inherit"
                         className={clsx(classes.title, classes.personName)}
                         style={{paddingLeft:"10px", fontWeight:"bold"}}
                         >
                            Arunbabu Anandakumar
                        </Typography>
                    </LogoWrapper>
                </Logo>
            
            </Toolbar>

        </AppBar>
    )


}

export default MyAppBar;