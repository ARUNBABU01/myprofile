import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Styles } from '../Styles';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

export default function SkillTable(props) {
  const { skill } = props;

  return (
    <Grid item variant="outlined">
      <div>
        <Typography variant="h6" component="div" gutterBottom>
          #{skill}
        </Typography>
      </div>
    </Grid>
  );
}
