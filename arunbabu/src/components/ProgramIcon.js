import React from "react";
import { Grid, Typography } from "@mui/material";

export function ProgramIcon(props) {
    const { icon, language, cssClass = "" } = props;
    return (
        <Grid container direction="column" alignItems="center" className={cssClass}>
            <Grid item>
                <img src={icon} alt={language} className="icon" style={{ width: "60px", height: "60px" }} />
            </Grid>
            <Grid item>
                <Typography variant="subtitle2" align="center">
                    {language}
                </Typography>
            </Grid>
        </Grid>
    );
}
