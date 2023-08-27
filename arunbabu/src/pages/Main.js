import React from "react";
import { Route, Routes } from "react-router-dom";
import { Styles } from "../Styles";
import "typeface-roboto";
import "../App.css";
import Home from "./Home";
import NavTabs from "../components/MyTabs";
import About from "./About";
import { Grid } from "@mui/material";
import Skills from "./Skills";
import Honors from "./Honors";
import Experiences from "./Experiences";
import Educations from "./Educations";
import { TransitionGroup } from "react-transition-group";
import Contact from "./Contact";
import TechStack from "./TechStack";

export default function Main() {
  const classes = Styles();
  return (
    <>
      <TransitionGroup component={null}>
        <Grid container direction={"column"}>
          <Grid container item>
            <NavTabs />
          </Grid>
          <Grid container item className={classes.content}>
            <div className={classes.content}>
              <Routes>
                <Route index exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Skills" element={<Skills />} />
                <Route exact path="/Experience" element={<Experiences />} />
                <Route exact path="/Education" element={<Educations />} />
                <Route path="/Certification" element={<Honors />} />
                {/* <Route path="/Projects" element={<Home />} /> */}
                <Route path="/Contact" element={<Contact />} />
                <Route path="/TechInfo" element={<TechStack />} />
              </Routes>
            </div>
          </Grid>
        </Grid>
      </TransitionGroup>
    </>
  );
}
