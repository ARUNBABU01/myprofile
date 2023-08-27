import React from "react";
import { Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { CSSTransition } from "react-transition-group";
import image from "../assets/Myphoto4.svg";
import "./Home.css"; // Import your custom CSS file for Home
import { ProgramIcon } from "../components/ProgramIcon";

export default function Home() {
  return (
    <div className="home-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Grid container direction="row" display="flex">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className="content-container"
            xs={10}
            sm={10}
          >
            <CSSTransition
              key="csshome"
              in={true}
              classNames="slideUp"
              timeout={2000}
            >
              <Grid
                item
                container
                direction="column"
                spacing={6}
                className="text-container"
              >
                <Grid item container direction="row" display="flex">
                  <Typography variant="h2" className="highlight">
                    Hi, I'm Arun Babu...
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5" className="subtext">
                    A self-developed, ever learning, and ever listening person.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5" className="subtext">
                    Believe in yourself and keep moving forward!
                  </Typography>
                </Grid>
              </Grid>
            </CSSTransition>
          </Grid>
          <Grid
            item
            container
            direction="column"
            xs={2}
            spacing={6}
            className="icon-container"
          >
            <ProgramIcon icon={faReact} language="React" />
            <ProgramIcon icon={faNodeJs} language="Node.js" />
            <ProgramIcon icon={faJs} language="JavaScript" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
