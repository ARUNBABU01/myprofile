import React, { useEffect, useRef, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "./Home.css"; // Import your custom CSS file for Home
import { ProgramIcon } from "../components/ProgramIcon";
import HALO from "vanta/dist/vanta.halo.min";
import image from "../assets/Myphoto4.svg";

const NAV_TABS_HEIGHT = 60;
const ADDITIONAL_SPACE = 50;
const COMPONENT_HEIGHT =
  window.innerHeight - NAV_TABS_HEIGHT - ADDITIONAL_SPACE;

const dynamicImportImage = (name) => {
  return require(`../assets/${name}-svgrepo-com.svg`);
};

export default function HomeBase() {
  const [showIconContainer, setShowIconContainer] = useState(false);
  const [rotateIcons, setRotateIcons] = useState(false);

  const startRotation = () => {
    setShowIconContainer(true);
    setRotateIcons(true);
    setTimeout(() => {
      setRotateIcons(false);
    }, 3000);
  };

  useEffect(() => {
    setTimeout(() => {
      // startRotation();
    }, 1000);

    if (showIconContainer) {
      const icons = document.querySelectorAll(".icon-rotate");
      if (icons.length > 0) {
        const centerIcon = document.querySelector(".icon-javascript");
        const centerX =
          centerIcon.getBoundingClientRect().x + centerIcon.offsetWidth / 2;
        const centerY =
          centerIcon.getBoundingClientRect().y + centerIcon.offsetHeight / 2;
        const radius = 100;
        const angleIncrement = (2 * Math.PI) / icons.length;
        let currentAngle = 0;

        const interval = setInterval(() => {
          if (currentAngle >= 2 * Math.PI) {
            clearInterval(interval);
            setRotateIcons(false);
          }

          icons.forEach((icon) => {
            const x = centerX + radius * Math.cos(currentAngle);
            const y = centerY + radius * Math.sin(currentAngle);
            icon.style.transform = `translate(${x}px), ${y}px`;
            currentAngle += angleIncrement;
          });

          return () => {
            clearInterval(interval);
          };
        }, 50);
      }
    }
  }, [showIconContainer]);

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      const newMinHeight = Math.min(COMPONENT_HEIGHT, window.innerHeight);
      const newMinWidth = Math.min(window.innerWidth, window.innerHeight);
      setVantaEffect(
        HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: newMinHeight,
          minWidth: newMinWidth,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div ref={myRef} style={{ margin: 0, padding: 0, marginLeft: "-50px" }}>
        <Grid className="home-container">
          <div
            className="background-image"
            // style={{ backgroundImage: `url(${image})` }}
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
                  justifyContent="center"
                  alignItems="top"
                  className="content-container"
                  xs={4}
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
                  >
                    <Grid
                      item
                      container
                      direction="row"
                      display="flex"
                      justifyContent={"flex-start"}
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
                  direction={"row"}
                  xs={4}
                  sm={4}
                  alignItems="center"
                  justifyContent="center"
                  height={COMPONENT_HEIGHT}
                >
                  <Grid
                    item
                    container
                    direction="column"
                    xs={4}
                    sm={4}
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
                          cssClass={`icon-entry icon-rotate ${
                            rotateIcons ? "rotate-animation" : ""
                          }`}
                        />
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                      </div>
                      <div className="row">
                        <ProgramIcon
                          icon={dynamicImportImage("reactjs")}
                          language="React"
                          cssClass={`icon-entry icon-rotate ${
                            rotateIcons ? "rotate-animation" : ""
                          }`}
                        />
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <ProgramIcon
                          icon={dynamicImportImage("angular")}
                          language="Angular"
                          cssClass={`icon-entry icon-rotate ${
                            rotateIcons ? "rotate-animation" : ""
                          }`}
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
                          cssClass={`icon-entry icon-rotate ${
                            rotateIcons ? "rotate-animation" : ""
                          }`}
                        />
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <ProgramIcon
                          icon={dynamicImportImage("nestjs")}
                          language="Nest.js"
                          cssClass={`icon-entry icon-rotate ${
                            rotateIcons ? "rotate-animation" : ""
                          }`}
                        />
                      </div>
                      <div className="row">
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <div className="empty"></div>
                        <ProgramIcon
                          icon={dynamicImportImage("typescript")}
                          language="TypeScript"
                          cssClass={`icon-entry icon-rotate ${
                            rotateIcons ? "rotate-animation" : ""
                          }`}
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
                  xs={4}
                  sm={4}
                  className="db-container"
                  alignItems="center"
                  justifyContent="center"
                >
                  <div className="matrix-grid">
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
    </>
  );
}
