import { Grid, Typography } from '@mui/material'
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { myprofile } from '../db'
import image from '../assets/Myphoto4.png'

const slideInMUI_Custom = (timeInSecs) => ({
    "&-enter":{
        transform: "translateX(-100px)"
    },
    "&-enter-active": {
        transform: "translateX(0%)",
        transition: `all ${timeInSecs}s`
    },
    "&--exit": {
        transform: "translateX(0%)"
    },
    "&-exit-active": {
        transform: "translateX(-100px)",
        transition: `all ${timeInSecs}s`
    }
});


export default function Home(){



    return (
        <>
        <Grid container spacing={3} alignItems="center" justifyContent="center" 
        style={{width:'85%', 
        backgroundImage:`url(${image})`,
         backgroundRepeat:"no-repeat",
         backgroundSize:"cover",
        height:'100vh', 
        width:'100vw',
        marginTop:"-70px"
        }} >

        <CSSTransition key={'csshome'} in={true} classNames="slideUp"  timeout={2000}>
            <Grid item container direction="column" spacing={6} display="flex" style={{ marginLeft:"25px",  marginTop:"-200px"}}>
            <Grid item container direction={"row"} display="flex">
                <Typography variant='h2' key={'about1'} component="i" gutterBottom color="success.main" 
                    style={{fontFamily:"sans-serif"}}>
                    Hi i'm 
                </Typography>
                <Typography variant='h2' key={'about2'} component="i" gutterBottom color="success.main" 
                    style={{fontFamily:"sans-serif"}}>&nbsp;Arun Babu
                </Typography>
                <Typography variant='h2' key={'about3'} component="i" gutterBottom color="success.main" 
                    style={{fontFamily:"sans-serif"}}>
                ...
                </Typography>
            </Grid>
                <Grid item>
                <Typography variant='h5' key={'about4'} gutterBottom color="info.main" 
                    style={{fontFamily:"sans-serif"}}>
                        A self-developed, ever learning, and ever listening person.
                </Typography>
                </Grid>
                <Grid item>
                <Typography variant='h5' key={'about5'} gutterBottom color="info.main" 
                    style={{fontFamily:"sans-serif"}}>
                        Believe yourself and Look-up!!!
                </Typography>
                </Grid>
            </Grid>
        </CSSTransition>
        

        </Grid>
        </>
        
    )
}