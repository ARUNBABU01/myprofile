import * as React from 'react';
import { Avatar, Chip } from '@mui/material';


export default function LicenseCard(props) {
    const {name, issuing_org, icon} = props
    /*
  return (
    <Grid container sx={{ maxWidth: 300}} display= 'flex'  direction='column' spacing={1}>
      <Card variant="outlined">
        <Grid container item>
            <Avatar >
                {icon !== null ? icon : issuing_org[0].toUpperCase()}
            </Avatar>
        </Grid>
        
        <CardContent>
        <Grid container sx={{ maxWidth: 300}} display= 'block'  direction='row' spacing={1}>
            <Grid item>
            <Typography variant="h6" component="div"  gutterBottom>
                {name}
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="subtitle2">
                Issued by: {issuing_org}
            </Typography>
            </Grid>
        </Grid>
        </CardContent>
        
      </Card>
    </Grid>
  );
  */
return (

            <Chip
                 size="medium" key={'lic' + name} label={name} variant="outlined" 
                 avatar={<Avatar variant='outlined' style={{ backgroundColor:"#0e76a8" }}>{icon !== null ? icon : issuing_org[0].toUpperCase()}</Avatar>}
                 color="warning"
                 sx={{marginBottom:1}}
            />

)
}
