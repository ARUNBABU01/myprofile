import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function HonorCard(props) {
    const {title, issuing_org, issue_date} = props
  return (
    <Box sx={{ maxWidth: 250 }}>
      <Card variant="outlined">
        <CardContent>
            <Typography variant="subtitle2">
                Issued by: {issuing_org}
            </Typography>
            <Typography variant="h6" component="div"  gutterBottom>
                {title}
            </Typography>
            <Typography sx={{ fontSize: 10 }} color="text.secondary">
                Issued Date: {issue_date}
            </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
