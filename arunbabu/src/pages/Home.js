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


  return (
    
      <div ref={myRef} style={{ margin: 0, padding: 0,  width:"100vw", height: "100%" }}>
        <Grid className={`home-container ${classes.content}`}  >
          <div
            // className="background-image"
            // style={{ backgroundImage: `url(${image})` }}
            style={{height: "100%" , width:"100%"}}
          >
            <CSSTransition
              key="iconContainer"
              in={showIconContainer}
              classNames="slideUp"
              timeout={2000}
            >
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
                  sm={4}
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
                    <Grid
                      item
                      container
                      direction="row"
                      display="flex"
                      justifyContent={"center"}
                    >
                      <Typography variant="h2" className="highlight">
                        Hi, I'm Arun Babu...
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" className="subtext">
                        A self-developed, ever learning, and ever listening
                        person.
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5" className="subtext">
                        Believe in yourself and keep moving forward!
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  direction={"row"}
                  xs={12}
                  sm={4}
                  alignItems="center"
                  justifyContent="center"
                  height={COMPONENT_HEIGHT}
                >
                  <Grid
                    item
                    container
                    direction="column"
                    className="icon-container rotate"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <div className="matrix-grid circle">
                      <div className="row">
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <ProgramIcon
                          icon={dynamicImportImage("nodejs")}
                          language="Node.js"
                          // cssClass={`icon-entry`}
                        />
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                      </div>
                      <div className="row">
                        <ProgramIcon
                          icon={dynamicImportImage("reactjs")}
                          language="React"
                          cssClass={`icon-entry`}
                        />
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <ProgramIcon
                          icon={dynamicImportImage("angular")}
                          language="Angular"
                          cssClass={`icon-entry`}
                        />
                      </div>
                      <div className="row">
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <ProgramIcon
                          icon={dynamicImportImage("javascript")}
                          language="JavaScript"
                          cssClass="icon-javascript"
                        />
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                      </div>
                      <div className="row">
                        <ProgramIcon
                          icon={dynamicImportImage("express")}
                          language="Express.js"
                          cssClass={`icon-entry`}
                        />
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <ProgramIcon
                          icon={dynamicImportImage("nestjs")}
                          language="Nest.js"
                          cssClass={`icon-entry`}
                        />
                      </div>
                      <div className="row">
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <ProgramIcon
                          icon={dynamicImportImage("typescript")}
                          language="TypeScript"
                          cssClass={`icon-entry`}
                        />
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction={"column"}
                  xs={12}
                  sm={4}
                  className="db-container"
                  alignItems="center"
                  justifyContent="center"
                >
                  <div className="matrix-grid" alignItems="center"
                    justifyContent="center">
                    <div className="row">
                      <ProgramIcon
                        icon={dynamicImportImage("postgresql")}
                        language="Postgresql"
                      />
                    </div>
                    <div className="row">
                      <ProgramIcon
                        icon={dynamicImportImage("mysql")}
                        language="MySQL"
                      />
                    </div>
                    <div className="row">
                      <ProgramIcon
                        icon={dynamicImportImage("mongodb")}
                        language="MongoDB"
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </CSSTransition>
          </div>
        </Grid>
      </div>

  );
}
