import * as React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';


export default function HonorCard(props) {
    const {title, issuing_org, issue_date} = props
  return (
    <Box sx={{ maxWidth: 250 }}>
      <Card variant="outlined" sx={{boxShadow:2}}>
        <CardContent>
            <Typography variant="subtitle2" color="text.secondary">
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
