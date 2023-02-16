import React from "react";
import clsx from 'clsx';
import { Drawer, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Styles } from "../Styles";


function MyDrawer(props){
    const classes = Styles()
    const {toggleDrawer, open} = props

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]:open,
                [classes.drawerClose]:!open,
            })}
            classes={{
                paper:clsx({
                    [classes.drawerOpen]:open,
                    [classes.drawerClose]:!open,
                })
            }}
            open={open}
            onToggle={toggleDrawer}
            key="drawer"
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={toggleDrawer} size="large">
                        {open ? <ChevronLeft key='iconleft' /> : <ChevronRight key='iconright' />}    
                    </IconButton>
                </div>
                {props.children}
             </Drawer>   

    )
}

export default MyDrawer