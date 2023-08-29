import React, { useEffect, useState, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import database from "../firebase";
import { onValue, ref } from "firebase/database";
import { useUserData, useUserActions } from "../UserContext";
import ProfileUpdateForm from "./ProfileUpdateForm";


export default function Main() {
  const classes = Styles();
  const {userId} = useUserData();
  const {setUserProfile} = useUserActions()
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  const shouldApplyContentStyle = !isHomePage;

  useEffect(() => {
    if(userId){
      const userRef = ref(database,userId);
      return onValue(userRef,snapshot => {
        console.log('Snapshot exists:', snapshot.exists());
        if(snapshot.exists()){
          const data = snapshot.val();
          setUserProfile(data);
        }

      })
    }       
      },[userId])
    
  return (
    <>
      <TransitionGroup component={null}>
        <Grid container direction={"column"}>
          <Grid  item container>
            <NavTabs />
          </Grid>
          
          <Grid item container className={shouldApplyContentStyle ? classes.content : ""}>
            <div className={shouldApplyContentStyle ? classes.content : ""}>
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
                {/* <Route path="/update" element={<ProfileUpdateForm />} /> */}
              </Routes>
            </div>
          </Grid>
        </Grid>
      </TransitionGroup>
    </>
  );
}
