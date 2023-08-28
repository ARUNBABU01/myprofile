import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import Experience from '../components/Experience';
import { myprofile } from '../db';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { Work, School } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { useUserData } from '../UserContext';
import { USE_FIREBASE_DB } from '../Base';

export default function Experiences() {

  const {userData} = useUserData();
  const userProfile = USE_FIREBASE_DB ? userData : myprofile
  const last_working_date = userProfile.experience[0].currently_working ? 'Till Working' : userProfile.experience[0].end_date

  return (
    <>
    <Grid container display={"flex"}>
    <Typography style={{fontFamily:"sans-serif", marginLeft:"10px"}} variant="h4" display={"flex"} color="info.main">What's my story?</Typography>
    <br />
    <Timeline position="alternate">
      <Experience start_date={last_working_date} start={"end"} count={0}  exp_icon={<Work />}/>
      {userProfile.experience.map( (exp,i) => {
        
        return (<Experience {...exp} key={exp.company + exp.job_title} start={""} count={i+1} exp_icon={<LaptopMacIcon />}/>)
      
      })}
      <Experience start_date={"Start"} start={"start"} count={userProfile.experience.length+1} exp_icon={<School />}/>
    </Timeline>
    </Grid>
    </>
  );
}