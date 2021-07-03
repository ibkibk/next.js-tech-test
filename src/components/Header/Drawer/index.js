import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Drawer,
  Button,
  Menu, 
  MenuItem,
  MenuIcon
  
} from '@material-ui/core';
import Links from "next/link"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import useStyles from '../../../styles/drawer';

const DrawerComp = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [addMargin,setAddMargin] =useState(false);
  const [isIconOpen,setIsIconOpen] =useState(false);

 
    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
        setAddMargin(true)
        setIsIconOpen((prev)=>!prev)

    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setAddMargin(false)

    };

  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor='top'
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}>
        <List  className={ addMargin ? classes.listedItems : classes.listedItem}>
          <ListItem className={classes.listed }  button onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                Product 
              </ListItemText>
               <ExpandMoreIcon/>

          </ListItem>

          <ListItem className={classes.listed }  button onClick={() => setOpenDrawer(false)}>
              <ListItemText >
                Company
              </ListItemText>
             <ExpandMoreIcon/>
          </ListItem>

          <ListItem  className={classes.listed }  button onClick={handleOpenMenu} >
              <ListItemText>
                  Connect
              </ListItemText>
             {isIconOpen? <ExpandLessIcon/>:<ExpandMoreIcon/>}

          </ListItem>  
          
        </List>
        <List className={classes.listedItem } >

        <hr className={classes.divider }/>

         <ListItem className={classes.listed } button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon >
              <Button
                aria-controls='menu'
                className={classes.acount}
                disableElevation
                disableRipple
                >Login</Button>
            </ListItemIcon>
          </ListItem>  

          <ListItem className={classes.listed } button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <Button     
                aria-controls='menu'
                className={classes.acount}
                disableElevation
                disableRipple
                variant='contained'
                color='secondary'>Sign Up</Button>
            </ListItemIcon>
          </ListItem>  
        </List>

      </Drawer>
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>

      <Menu
        elevation={0}
        className={classes.menu}
        id='menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}>
       <List        
        className={classes.list}
        >
        <Links href="/contact">
          <MenuItem 
           className={classes.menuItem}
           onClick={handleCloseMenu}>
             Contact
          </MenuItem>
        </Links>
        <MenuItem           
           className={classes.newsLetter}
           onClick={handleCloseMenu}>
             News Letter
             </MenuItem>
        <MenuItem
        className={classes.linkedIn}
         onClick={handleCloseMenu}>LinkedIn</MenuItem>
      </List>
      </Menu>
    </>
  );
};

export default DrawerComp;
