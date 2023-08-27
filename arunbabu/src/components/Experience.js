import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import '../App.css'
import { CSSTransition } from 'react-transition-group';
import { Styles } from '../Styles';
import { myprofile } from '../db';

const slideUpMUI_custom = (timeInSecs) => ({
    "&-enter":{
        transform: "translateY(1000px)"
    },
    "&-enter-active": {
        transform: "translateY(0%)",
        transition: `all ${timeInSecs}s ease-in-out`
    },
    "&--exit": {
        transform: "translateY(0%)"
    },
    "&-exit-active": {
        transform: "translateY(1000px)",
        transition: `all ${timeInSecs}s ease-in-out`
    }
  })


export default function Experience(props) {


    const {company, job_title, start_date, skills, location, exp_icon, start, count} = props

  const classes = Styles()

  const keySkills = []
  
      myprofile.skills['key_skills'].forEach( skl => {
        keySkills.push((skl.skill + '').toLowerCase())
      })


  return (
        <CSSTransition key={start_date} in={true} sx={slideUpMUI_custom(1 + (count * 1))} classNames={classes.slideUpMUI} timeout={1000 + (count * 2000)}>
      <TimelineItem className='slideIn'>
         {start_date && <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="h6"
          color="text.secondary"
        >
          {start_date}
        </TimelineOppositeContent>}

        <TimelineSeparator>
        {start === "end" ? null : <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>}
          <TimelineDot variant="outlined" color="primary">
            {exp_icon }
          </TimelineDot>
          {start === "start" ? null : <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>}
        </TimelineSeparator>

        {<TimelineContent sx={{ py: '12px', px: 2 }}>
          {company && 
          <Typography variant="h6" component="div" color="info.main">
            {company}
          </Typography>}
          {location && <Typography variant='body1'  color="text.secondary"><b>Location:</b> {location}</Typography>}
          {job_title && <Typography variant='body2'  color="text.secondary"><b>Title:</b> {job_title}</Typography>}
          <br/>
          {skills && <Typography variant='caption' color="text.secondary"><b>Skills:</b> 
          
          {skills.map( sk => {
            if(keySkills.includes(sk.toLowerCase())){
                return <Typography key={sk} variant='caption' color="secondary">#{sk}&nbsp;</Typography>
            } else {
                return <Typography key={sk} variant='caption' color="text.secondary">#{sk}&nbsp;</Typography>
            }

          })}
          </Typography>}
        </TimelineContent>}

      </TimelineItem>
      </CSSTransition>

  );
}