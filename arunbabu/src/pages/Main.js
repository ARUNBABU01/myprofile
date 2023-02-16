import React, {useState} from "react";
import { Route, Routes,Navigate, useLocation } from "react-router-dom";
import { Styles } from "../Styles";
import "typeface-roboto"
import MyAppBar from "../components/MyAppBar";
import MyDrawer from "../components/MyDrawer";
import MyNavigationBar from "../components/MyNavigationBar";
import "../App.css"
import { useToggle } from "../hooks";
import Home from "./Home";
import NavTabs from "../components/MyTabs";
import About from "./About";
import { Grid, Slide } from "@mui/material";
import Skills from "./Skills";
import Honors from "./Honors";
import Experiences from "./Experiences";
import Educations from "./Educations";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import '../App.css'
import Contact from "./Contact";
import TechStack from "./TechStack";

export default function Main(){
    const classes = Styles()
    const location = useLocation();

    return (
        <>
        {/* <MyAppBar open={open} toggleDrawer={toggleDrawer} >
            
        </MyAppBar> */}
        <TransitionGroup component={null}>
        <Grid container direction={"column"}>


        <Grid container item>
        <NavTabs />
        </Grid>
        {/* <MyDrawer open={open} toggleDrawer={toggleDrawer}>
            <MyNavigationBar />
        </MyDrawer> */}

        <Grid container item className={classes.content}>
        <div className={classes.content}>
            {/* <div className={classes.toolbar} /> */}
        
            {/* <CSSTransition key={location.key} in={true} classNames="slideIn" timeout={2000}> */}
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
            {/* </CSSTransition> */}
                
        </div>
        </Grid>

        </Grid>
        </TransitionGroup>
        </>
    )
}