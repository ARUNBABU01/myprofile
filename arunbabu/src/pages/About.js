import { Grid, Typography } from '@mui/material'
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { myprofile } from '../db'
import { Styles } from '../Styles';

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


export default function About(){

    const aboutArray = myprofile.about.split(/\\n/g)
    const allSkills = []
    Object.keys(myprofile.skills).forEach(type => {
        myprofile.skills[type].forEach( skl => {
            allSkills.push((skl.skill + '').toLowerCase())
        })
    })
    const classes = Styles()
    return (
        <>
        <Typography variant="h4" color="info.main">Who Am I?</Typography>
        <br />
        <Grid container spacing={3} alignItems="center" justifyContent="center" style={{width:'100%'}} >
        {aboutArray.map( (str,i) => 
        <CSSTransition key={'cssabout'+i} in={true} classNames={classes.slideUpMUI} sx={slideInMUI_Custom(1 + (i * 1) )} timeout={2000}>
            <Grid item container direction="row" >
            { str.split(' ').map( (wrd) => {
                if(allSkills.includes((wrd.replace(',', '') + '').toLowerCase())){
                    return (<span key={'aboutspan'+i}><Typography variant='h5' key={'about'+i} gutterBottom color="warning.light" 
                        style={{fontFamily:"Helvetica Neue"}}>{wrd}&nbsp;
                    </Typography></span>)
                } else {
                    return (<span key={'aboutspan2'+i}><Typography variant='h5' key={'about'+i} gutterBottom color="text.secondary" 
                        >{wrd}&nbsp; 
                    </Typography></span>)
                    }
                }
            )}
            
            </Grid>
        </CSSTransition>
        
        )}
        </Grid>
        </>
        
    )
}