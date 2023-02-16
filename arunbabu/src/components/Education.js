import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { CSSTransition } from 'react-transition-group';
import { Styles } from '../Styles';

export default function Education(props) {

    const classes = Styles()
    const {school, degree, field_of_study,start_date, location, exp_icon, start, count} = props
  return (
    <CSSTransition key={start_date} in={true} classNames={classes.slideUpMUI} timeout={1000 + (count * 2000)}>
      <TimelineItem>
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
          {school && 
          <Typography variant="h6" component="span" color="info.main">
            {school}
          </Typography>}
          {location && <Typography variant='body1'><b>Location:</b> {location}</Typography>}
          {degree && <Typography variant='body2'><b>Degree:</b> {degree + ' ' + field_of_study}</Typography>}
        </TimelineContent>}

      </TimelineItem>
      </CSSTransition>
  );
}