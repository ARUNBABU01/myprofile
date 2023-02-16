import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import Education from '../components/Education';
import { myprofile } from '../db';
import { School, Work } from '@mui/icons-material';
import { Typography } from '@mui/material';

export default function Educations() {

  const last_working_date = myprofile.education[0].currently_working ? 'Studying' : myprofile.education[0].end_date

  return (
    <>
    <Typography style={{fontFamily:"sans-serif"}} variant="h4" color="info.main">What's my background?</Typography>
    <br />
    <Timeline position="alternate">
      <Education start_date={last_working_date} start={"end"} count={0}  exp_icon={<Work />}/>
      {myprofile.education.map( (exp,i) => {
        
        return (<Education {...exp} key={exp + i} start={""} count={i+1} exp_icon={<School />}/>)
      
      })}
      <Education start_date={"Start"} start={"start"} count={myprofile.education.length +1} exp_icon={<School />}/>
    </Timeline>
    </>
  );
}