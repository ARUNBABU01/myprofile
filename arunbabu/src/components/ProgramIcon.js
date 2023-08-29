import React from "react";
import { Grid, Typography } from "@mui/material";

export function ProgramIcon(props) {
    const { icon, language, cssClass = "" } = props;
    return (
        <Grid container direction="column" alignItems="center" className={cssClass} display={"flex"}>
                <img src={icon} alt={language} className="icon"/>
                <Typography variant="subtitle1" align="center">
                    {language}
                </Typography>

        </Grid>
    );
}
