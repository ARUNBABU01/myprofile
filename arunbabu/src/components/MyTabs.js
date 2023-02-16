import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Edit, Home, Assignment, Info, Psychology, WorkHistory, 
    School, EmojiEvents, AssignmentInd, ContactMail, Construction} from '@mui/icons-material';
import { Link, useLocation } from "react-router-dom";

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

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

]

const location = useLocation();
const [open,setOpen] = useState(true);
const [currentPage, setCurrentPage] = useState("Home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%' }} >
      <Tabs value={value} 
        onChange={handleChange}
        aria-label="My nav tabs" 
        // centered
        variant="scrollable"
        scrollButtons="auto"
        // variant='fullWidth'
        >
        {menu.map( (myMenu,index) => {
            return (<Tab
                key={myMenu.text + index}
                index={myMenu.text + index}
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