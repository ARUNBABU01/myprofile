import React from 'react';
import { Grid, Typography } from "@mui/material";

export function ContactItem(props) {
    const { ContactItemIcon, data, itemColor } = props;

    return (
        <Grid container item direction="row" alignItems="center" spacing={2}>
            <Grid item>
                <ContactItemIcon sx={{ fontSize: 40, color: itemColor }} />
            </Grid>
            <Grid item>
                <Typography variant="body1" color="text.primary">
                    {data}
                </Typography>
            </Grid>
        </Grid>
    );
}
