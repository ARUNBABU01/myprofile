import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Styles } from '../Styles';
import { ThemeContext } from '@emotion/react';
import { Grid } from '@mui/material';


export default function SkillCard(props) {
    const {skill, exp, version, last_used, skillType} = props
    const classes = Styles()
  return (

    <Box sx={{ maxWidth: 500 }} border={"1px solid"} borderColor="secondary.light" boxShadow="inherit">
      <Card variant="outlined">
        <CardContent>
            <Typography variant="h6" component="div"  gutterBottom 
            color={skillType === 'key_skills' ? "success.main" : "secondary.dark"}>
                {skill}
            </Typography>
            <Typography variant="subtitle2">
                Experience: {exp}
            </Typography>
            <Typography sx={{ fontSize: 10 }} color="text.secondary">
                Version: {version}
            </Typography>
            <Typography sx={{ fontSize: 10 }} color="text.secondary">
                Last Used: {last_used}
            </Typography>
        </CardContent>
      </Card>
    </Box>

  );
}
