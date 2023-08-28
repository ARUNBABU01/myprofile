import { Grid, Typography } from '@mui/material'
import React from 'react'
import { myprofile } from '../db'
import HonorCard from '../components/HonorCard'
import LicenseCard from '../components/LicenseCard'
import { LinkedIn } from '@mui/icons-material'
import { CSSTransition } from 'react-transition-group'
import { Styles } from '../Styles'
import { useUserData } from '../UserContext'
import { USE_FIREBASE_DB } from '../Base'

export default function Honors(){

    const classes = Styles()
    const {userData} = useUserData();
    const userProfile = USE_FIREBASE_DB ? userData : myprofile

    return (
        <div>
        <Typography style={{fontFamily:"sans-serif"}} variant="h4" color="info.main">How have employers recognised my achievements?</Typography>
        <br />
        <Typography style={{fontFamily:"sans-serif"}} variant="h6" color="secondary">Performance Awards</Typography>
        <CSSTransition key={'csshonor'} in={true} classNames={classes.slideInMUI} timeout={2000}>
                <div >
                    <Grid container direction={'row'} spacing={1} 
                    style={{width:'80%', alignItems:'center', justifyContent:'flex-start', alignContent:'center'}}>
                        {
                        userProfile.honors.map( (hnr,i) => 
                            {
                            return(
                                <Grid item key={'honor'+ hnr.title}>
                                    <HonorCard {...hnr} />
                                </Grid>
                            )
                            }
                        )
                        }
                    </Grid>
                    <br/>
                </div>
                </CSSTransition>
            <br />
            <Typography style={{fontFamily:"sans-serif"}} variant="h6" color="secondary">Licenses and Certifications</Typography>
            <br />
            <CSSTransition key={'csshonor'} in={true} classNames={classes.slideInMUI} timeout={2000}>
            <Grid container direction={'row'} spacing={3} display="flex" >
                {userProfile.licences.map( lic => {
                    const newIcon = lic.issuing_org.toLowerCase().includes('linkedin') ? <LinkedIn /> : null
                    return <Grid item key={'licgrid'+lic.name}><LicenseCard key={'lic' + lic.name} name={lic.name} issuing_org={lic.issuing_org} icon={newIcon}  ></LicenseCard></Grid>
                })}
                
            </Grid>
            </CSSTransition>
        </div>
        
    )
}