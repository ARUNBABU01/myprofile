import React from 'react';
import Timeline from '@mui/lab/Timeline';
import Education from '../components/Education';
import { myprofile } from '../db';
import { School, Work, Backpack } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useUserData } from '../UserContext';
import { USE_FIREBASE_DB } from '../Base';

export default function Educations() {

  const {userData} = useUserData();
  const userProfile = USE_FIREBASE_DB ? userData : myprofile

  const last_working_date = userProfile.education[0].currently_working ? 'Studying' : userProfile.education[0].end_date
 

  return (
    <>
    <Typography style={{fontFamily:"sans-serif"}} variant="h4" color="info.main">What's my background?</Typography>
    <br />
    <Timeline position="alternate">
      <Education start_date={last_working_date} start={"end"} count={0}  exp_icon={<Work />}/>
      {userProfile.education.map( (edu,i) => {
        return (<Education {...edu} key={edu.degree + edu.school} start={""} count={i+1} exp_icon={<School />}/>)      
      })}
      <Education start_date={"Start"} start={"start"} count={userProfile.education.length +1} exp_icon={<Backpack />}/>
    </Timeline>
    </>
  );
}