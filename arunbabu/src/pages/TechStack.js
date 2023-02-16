import React from "react";
import * as pack from '../../package.json'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Avatar, Grid, Typography } from "@mui/material";
import { CSSTransition } from "react-transition-group";

export default function TechStack(){

    const packJSON = JSON.parse(JSON.stringify(pack))
    const techData = Object.keys(packJSON.dependencies)

    return (
        <>
        <Typography style={{fontFamily:"sans-serif"}} variant="h4" color="info.main">Tech stack's I already know to create this site?</Typography>
            <br />
        <CSSTransition key={'csscontact'} in={true} classNames="my-node" timeout={2000}>
        <Grid container width={"100%"}  direction="row" spacing={2}>
                {techData.map( (d,i) => <Grid item key={'stack'+i}>
                    <Chip
                        key={'pack' + d} label={d} variant="outlined" 
                        avatar={<Avatar>{d[0].toUpperCase()}</Avatar>}
                        color="primary" sx={{fontSize:"20",}} 
                        labelMedium
                    />
        </Grid>)
                 }
        </Grid>
        </CSSTransition>
        </>
    )
}