import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SkillCard(props) {
    const { skill, exp, version, last_used, skillType } = props;

    return (
        <Box className="skill-box">
            <Card variant="outlined" >
                <CardContent className='skill-card'>
                    <Typography variant="h6" component="div" gutterBottom
                        color={skillType === 'key_skills' ? "success.main" : "secondary.dark"}>
                        {skill}
                    </Typography>
                    <Typography variant="subtitle2">
                        Experience: {exp}
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        Version: {version}
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                        Last Used: {last_used}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
