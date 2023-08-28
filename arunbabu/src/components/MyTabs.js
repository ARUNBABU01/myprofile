import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Home, Info, Psychology, WorkHistory, 
    School, EmojiEvents, ContactMail, Construction} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { List, useMediaQuery } from "@mui/material";
import ScrollContainer from 'react-indiana-drag-scroll';
import { ProgramIcon } from './ProgramIcon';

const StyledList = styled(List)({
  // Your existing styles...
})

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  let menu =[
    { text:"Home", icon:<Home />, target:"/home" },
    { text:"About Me", icon:<Info />, target:"/About" },
    { text:"Skills", icon:<Psychology />, target:"/Skills" },
    { text:"Experience", icon:<WorkHistory />, target:"/Experience" },
    { text:"Education", icon:<School />, target:"/Education" },
    { text:"Certification/Honors", icon:<EmojiEvents />, target:"/Certification" },
    // { text:"Projects", icon:<AssignmentInd />, target:"/Projects" },
    { text:"Contact", icon:<ContactMail />, target:"/Contact" },
    { text:"Tech Stack", icon:<Construction />, target:"/TechInfo" },
    { text:"Update Profile", icon:<Construction />, target:"/update" },

]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navTabsHeight = 60
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={{ width: '100%' }} >
      <Tabs 
        value={value} 
        onChange={handleChange}
        aria-label="My nav tabs" 
        variant={isMobile ? "scrollable" : "standard"}
        // orientation={isMobile ? "auto": "auto"}
        scrollButtons="auto"
        >
        {menu.map( (myMenu) => {
            return (<Tab
                key={myMenu.text}
                index={myMenu.text}
                component={Link}
                to={myMenu.target}
                icon={myMenu.icon}
                label={myMenu.text}
                 />)
        })}
      </Tabs>
    </Box>
  );
}