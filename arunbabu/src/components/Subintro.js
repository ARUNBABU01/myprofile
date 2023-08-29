import React from "react";
import "./SubIntro.css"; // Replace with your CSS file
import { Grid, Typography } from "@mui/material";

export default function SubIntro() {
  return (
    <div className="container">
      <Grid item>
        <Typography variant="h5" className="subtext fade-in">
          A self-developed, ever learning, and ever listening person.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" className="subtext fade-in">
          Believe in yourself and keep moving forward!
        </Typography>
      </Grid>
    </div>
  );
}
