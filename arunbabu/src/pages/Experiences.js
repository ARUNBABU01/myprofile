import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import Experience from '../components/Experience';
import { myprofile } from '../db';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { Work, School } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export default function Experiences() {

  const last_working_date = myprofile.experience[0].currently_working ? 'Till Working' : myprofile.experience[0].end_date



  return (
    <>
    <Grid container display={"flex"}>
    <Typography style={{fontFamily:"sans-serif", marginLeft:"10px"}} variant="h4" display={"flex"} color="info.main">What's my story?</Typography>
    <br />
    <Timeline position="alternate">
      <Experience start_date={last_working_date} start={"end"} count={0}  exp_icon={<Work />}/>
      {myprofile.experience.map( (exp,i) => {
        
        return (<Experience {...exp} key={exp + i} start={""} count={i+1} exp_icon={<LaptopMacIcon />}/>)
      
      })}
      <Experience start_date={"Start"} start={"start"} count={myprofile.experience.length+1} exp_icon={<School />}/>
    </Timeline>
    </Grid>
    </>
  );
}