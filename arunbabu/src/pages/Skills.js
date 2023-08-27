import { Grid, Typography } from "@mui/material";
import React from "react";
import { myprofile } from "../db";
import SkillCard from "../components/SkillCard";
import { descriptions } from "../setup";
import { CSSTransition } from "react-transition-group";
import { Styles } from "../Styles";
import SkillTableMUI from "../components/SkillTableMUI";
import SkillTable from "../components/SkillTable";

export default function Skills() {
  const classes = Styles();
  const skillSets = Object.keys(myprofile.skills);
  const keySkillIndex = skillSets.findIndex((sk) => sk === "key_skills");
  const keySkill = skillSets.splice(keySkillIndex, 1).toString();
  skillSets.sort(
    (a, b) => myprofile.skills[a].length - myprofile.skills[b].length
  );
  const orderedSkills = [keySkill, ...skillSets];
  const keySkillsList = myprofile.skills[keySkill].map((skl) => skl.skill);

  return (
    <>
      <Typography
        style={{ fontFamily: "sans-serif", marginLeft: "30px" }}
        variant="h4"
        display={"flex"}
        color="info.main"
      >
        What I have?
      </Typography>
      <br />
      <br />
      <br />
      <Grid container spacing={3} style={{ marginLeft: "30px" }}>
        {orderedSkills.map((type, i) => {
          const type_clean = descriptions[type].name;

          return (
            <Grid container key={"skill" + type} display="flex">
              <br />
              {
                //  myprofile.skills[type].length > 10 ? null :
                <Typography variant="h6" component={"div"}>
                  {type_clean}
                </Typography>
              }
              <CSSTransition
                key={"skill" + type + "trans"}
                in={true}
                classNames={classes.slideInMUI}
                timeout={1000 + i * 1000}
              >
                {
                  <Grid
                    container
                    item
                    direction={"row"}
                    spacing={1}
                    style={{
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    {myprofile.skills[type].length > 10 ? (
                      <Grid
                        container
                        item
                        key={"skill" + type}
                        width="100%"
                        display={"flex"}
                        spacing={2}
                      >
                        <>
                          {/* <SkillTableMUI
                                data={myprofile.skills[type].filter( skl => !keySkillsList.includes(skl.skill))} 
                                title={type_clean} />  */}
                        </>
                        {myprofile.skills[type]
                          .filter((skl) => !keySkillsList.includes(skl.skill))
                          .map((skill) => (
                            <Grid item style={{padding:"4px", margin:"4px"}} className="skill-table">
                            <SkillTable key={skill.skill} skill={skill.skill}/>
                            </Grid>
                          ))}
                      </Grid>
                    ) : (
                      myprofile.skills[type]
                        .filter((skl) => {
                          return type === "key_skills"
                            ? true
                            : !keySkillsList.includes(skl.skill);
                        })
                        .map((skl, i) => {
                          const {
                            skill,
                            experience_years,
                            experience_months,
                            last_used,
                            version,
                          } = skl;
                          return (
                            <Grid item key={"skill" + type + skill}>
                              <SkillCard
                                skill={skill}
                                exp={`${experience_years} years ${experience_months} months`}
                                version={version}
                                last_used={last_used}
                                skillType={type}
                              />
                            </Grid>
                          );
                        })
                    )}
                  </Grid>
                }
              </CSSTransition>
              <br />
              <br />
              <br />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
