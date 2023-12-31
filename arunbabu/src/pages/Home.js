import React, { useEffect, useRef, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "./Home.css"; // Import your custom CSS file for Home
import { ProgramIcon } from "../components/ProgramIcon";
// import VANTA_BG from "vanta/dist/vanta.halo.min";
import VANTA_BG from "vanta/dist/vanta.halo.min";
import image from "../assets/Myphoto4.svg";
import styled, {keyframes} from 'styled-components'
import { Styles } from "../Styles";
import HelloWorld from "../components/HelloWorld";
import Intro from "../components/Intro";
import SubIntro from "../components/Subintro";

const NAV_TABS_HEIGHT = 60;
const ADDITIONAL_SPACE = 80;
const COMPONENT_HEIGHT = window.innerHeight - NAV_TABS_HEIGHT - ADDITIONAL_SPACE;

const dynamicImportImage = (name) => {
  return require(`../assets/${name}-svgrepo-com.svg`);
};

const transformPosition = (props) => {
const {centerX, centerY} = props
// const iconX = this.getBoundingClientRect().x;
// const iconY = this.getBoundingClientRect().y;
// // const currentAngle = 0;
// const AB = Math.abs(centerX - iconX);
// const BC = Math.abs(centerY - iconY);
// const radius = Math.sqrt((AB * AB) + (BC * BC)) //Pythagoras
// const angle = Math.tan(BC/AB)
// const increaseRadius = radius + 100;

// cubic-bezier(0.68, -0.55, 0.265, 1.55)

 return ( keyframes`
0% {
  transform: translateX(${centerX}px) translateY(${centerY}px);
}

100% {
  transform: translateX(0) translateY(0);
}
`)
}


const IconEntry = styled.div`
animation: ${props => transformPosition(props)} 3s ;
  transform-origin: center;
  `

export default function HomeBase() {
  const [showIconContainer, setShowIconContainer] = useState(false);
  const [toggle, setToggle] = useState(false);
  const centerIconRef = useRef(null)
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const centerIcon = centerIconRef.current


const classes = Styles()
  const startEntry = () => {
    setShowIconContainer(true);
    // setRotateIcons(true);
    // setTimeout(() => {
    //   setRotateIcons(false);
    // }, 3000);
  };

  useEffect(() => {
    setToggle(() => !toggle)
  },[])

  useEffect(() => {

    setTimeout(() => {
      startEntry();
    }, 1000);


    if (showIconContainer) {
      const icons = document.querySelectorAll(".icon-entry");
      if (icons.length > 0) {
        const centerIcon = document.querySelector(".icon-javascript");
        const _centerX =
          centerIcon.getBoundingClientRect().x + centerIcon.offsetWidth / 2;
        const _centerY =
          centerIcon.getBoundingClientRect().y + centerIcon.offsetHeight / 2;
        setCenterX(() => _centerX);
        setCenterY(() => _centerY);

        icons.forEach(icon => {
          const iconX = icon.getBoundingClientRect().x;
          const iconY = icon.getBoundingClientRect().y;
          // const currentAngle = 0;
          const AB = Math.abs(centerX - iconX);
          const BC = Math.abs(centerY - iconY);
          const radius = Math.sqrt((AB * AB) + (BC * BC)) //Pythagoras
          const angle = Math.tan(BC/AB)
          const increaseRadius = radius + 100;

        })

      }
    }
  }, [showIconContainer]);

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      try {
      //   const newMinHeight = Math.min(COMPONENT_HEIGHT, window.innerHeight);
      // const newMinWidth = Math.min(window.innerWidth, window.innerHeight);
      setVantaEffect(VANTA_BG({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        // minHeight: 600,
        // minWidth: 600,
        
      })
      );
      } catch (error) {
        console.log('Vanta error: ', error);
      }
      
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleToggle = () => {
    setToggle(() => !toggle)
  }

  return (
    
      <div ref={myRef} style={{ margin: 0, padding: 0,  width:"100vw", height: "100%" }}>
        <Grid className={`home-container ${classes.content}`} >
          <div
            // className="background-image"
            // style={{ backgroundImage: `url(${image})` }}
            style={{height: "100%" , width:"100%"}}
          >
            {/* <CSSTransition
              key="iconContainer"
              in={showIconContainer}
              classNames="slideUp"
              timeout={2000}
            > */}
              <Grid
                item
                container
                direction="row"
                display="flex"
                style={{ height: "100%" }}
                xs={12}
              >
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                  className="content-container"
                  xs={12}
                  sm={6}
                  height={COMPONENT_HEIGHT}
                >
                  <Grid
                    item
                    container
                    direction="column"
                    spacing={6}
                    className="text-container"
                    height={"100%"}
                    justifyContent={"center"}
                  >
                    {/* <HelloWorld /> */}
                    <Intro />
                    <SubIntro />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  direction={"row"}
                  xs={12}
                  sm={6}
                  alignItems="center"
                  justifyContent="center"
                  height={COMPONENT_HEIGHT}
                >
                  <Grid
                    item
                    container
                    direction="column"
                    // className="icon-container"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <div className={`menu ${toggle ? 'active' : ''}`}>
                    <div className="toggle" onClick={handleToggle}>
                        <ProgramIcon
                          icon={dynamicImportImage("javascript")}
                          language="JavaScript"
                          // cssClass="icon-javascript"
                        />
                      </div>
                      
                      <li style={{"--i":0, "--clr":"#25d366"}}>
                        <ProgramIcon
                          icon={dynamicImportImage("nodejs")}
                          language="Node.js"
                          cssClass={`icon-item`}
                        />
                       </li>
                       <li style={{"--i":1, "--clr":"#1da1f2"}}>
                        <ProgramIcon
                          icon={dynamicImportImage("reactjs")}
                          language="React"
                          cssClass={`icon-item`}
                        />
                        </li>
                        <li style={{"--i":2, "--clr":"#FF5733"}}>
                        <ProgramIcon
                          icon={dynamicImportImage("angular")}
                          language="Angular"
                          cssClass={`icon-item`}
                        />
                      </li>
                      <li style={{"--i":3, "--clr":"#0a66c2"}}>
                        <ProgramIcon
                          icon={dynamicImportImage("typescript")}
                          language="TypeScript"
                          cssClass={`icon-item`}
                        />
                      </li>
                      <li style={{"--i":4, "--clr":"#0a66c2"}}>
                        <ProgramIcon
                          icon={dynamicImportImage("express")}
                          language="Express.js"
                          cssClass={`icon-item`}
                        />
                        </li>
                      <li style={{"--i":5, "--clr":"#c32aa3"}}>
                        <ProgramIcon
                          icon={dynamicImportImage("nestjs")}
                          language="Nest.js"
                          cssClass={`icon-item`}
                        />
                      </li>
                      <li style={{"--i":6, "--clr":"#0a66c2"}}>
                      <ProgramIcon
                        icon={dynamicImportImage("postgresql")}
                        language="Postgresql"
                        cssClass={`icon-item`}
                      />
                    </li>
                    <li style={{"--i":7, "--clr":"#0a66c2"}}>
                      <ProgramIcon
                        icon={dynamicImportImage("mysql")}
                        language="MySQL"
                        cssClass={`icon-item`}
                      />
                    </li>
                    <li style={{"--i":8, "--clr":"#25d366"}}>
                      <ProgramIcon
                        icon={dynamicImportImage("mongodb")}
                        language="MongoDB"
                        cssClass={`icon-item`}
                      />
                    </li>
                      
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            {/* </CSSTransition> */}
          </div>
        </Grid>
      </div>

  );
}
