import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Tooltip,
} from "@mui/material";
import {
  Home,
  Info,
  Psychology,
  WorkHistory,
  School,
  EmojiEvents,
  ContactMail,
  Construction,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const StyledList = styled(List)({
  "&& .Mui-selected, && .Mui-selected:hover": {
    backgroundColor: "#3f51b5",
    "&, ^ .MuiListItemIcon-root": {
      color: "#ffffff",
    },
  },
  "^ .MuiListItemButton-root:hover": {
    backgroundColor: "blue",
    "&, & .MuiListItemIcon-root": {
      color: "#000000",
    },
  },
});

function MyNavigationBar() {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("Home");

  let menu = [
    { text: "Home", icon: <Home />, target: "/home" },
    { text: "About", icon: <Info />, target: "/about" }, // Updated target here
    { text: "Skills", icon: <Psychology />, target: "/skills" }, // Updated target here
    { text: "Experience", icon: <WorkHistory />, target: "/experience" }, // Updated target here
    { text: "Education", icon: <School />, target: "/education" }, // Updated target here
    {
      text: "Certification/Honors",
      icon: <EmojiEvents />,
      target: "/certification",
    },
    { text: "Projects", icon: <Construction />, target: "/projects" }, // Updated target here
    { text: "Contact", icon: <ContactMail />, target: "/contact" },
    { text: "Update Profile", icon: <ContactMail />, target: "/update" },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrentPage("/home");
    } else {
      setCurrentPage(location.pathname);
    }
  }, [location]);

  return (
    <StyledList key="styleNavList">
      <List key="navItemsList">
        {menu.map((myMenu, index) => {
          return (
            <ListItemButton
              key={'listbutton' + myMenu.text}
              component={Link}
              to={myMenu.target}
              data-testid={"Tab-" + myMenu.text}
              selected={myMenu.target === currentPage}
            >
              <ListItemIcon key={"Icon" + myMenu.text}>
                <Tooltip title={myMenu.text}>{myMenu.icon}</Tooltip>
              </ListItemIcon>
              <ListItemText
                key={"Text" + myMenu.text}
                primary={myMenu.text}
              />
            </ListItemButton>
          );
        })}
      </List>
    </StyledList>
  );
}

export default MyNavigationBar;
