import React, { useState } from 'react';
import {
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Link,
  ListItem,
  Typography,
  Button,
  IconButton,
  AppBar,
  Toolbar
} from '@material-ui/core';
import Image from "next/image"
import logos from "../../../public/images/logo.svg"
import DrawerComp from './Drawer';
import Links from "next/link"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Fragment } from 'react';
import useStyles from '../../styles/header';


const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [isIconOpen,setIsIconOpen] = useState(false);

    const theme = useTheme(); 
    const isMatch = useMediaQuery(theme.breakpoints.down('600px'));


  const handleOpenMenu = e => {
    setAnchorEl(e.currentTarget);
    setIsIconOpen((prev)=>!prev)
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };


  return (
    <div>
    <AppBar 
        elevation={0} 
        className={classes.appbar} 
        position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
          >
             <Image   
               width="90" 
               height="48" 
               src={logos} /> 
          </IconButton>
             {isMatch ? <DrawerComp/>:<Fragment>
           <Typography variant="h8" className={classes.title}></Typography>
           <Typography variant="h6" className={classes.title}>
                   <Typography variant="h8" className={classes.title}>
                      <ListItem className={classes.listed }   >
                         <Link className={classes.Link} >   
                            Company
                         </Link>
                        <ExpandMoreIcon/>
                      </ListItem> 
                   </Typography>
           </Typography>
           <Typography variant="h6" className={classes.title}>
                   <Typography variant="h8" className={classes.title}>
                      <ListItem className={classes.listed }   >
                         <Link className={classes.Link} >   
                            Product
                         </Link>
                         <ExpandMoreIcon/>
                       </ListItem> 
                   </Typography>
           </Typography>
           <Typography variant="h6" className={classes.title}>
                   <Typography variant="h8" className={classes.title}>
                      <ListItem className={classes.listed }  button onClick={handleOpenMenu} >
                         <Link className={classes.Link} >   
                            Connect
                         </Link>
                         {isIconOpen? <ExpandLessIcon/>:<ExpandMoreIcon/>}
                      </ListItem>              
                   </Typography>
          </Typography>
          <Typography variant="h8" className={classes.title}></Typography>
          <Typography variant="h8" className={classes.title}></Typography>
          <Typography variant="h8" className={classes.title}></Typography>
          <Typography variant="h8" className={classes.title}></Typography>
          <Typography variant="h8" className={classes.title}></Typography>
          <Typography variant="h8" className={classes.title}></Typography>
          <Typography variant="h8" className={classes.title}></Typography>
          <Button color="inherit">Login</Button>
          <Button   
              aria-controls='menu'
              className={classes.acount}
              disableElevation
              disableRipple
              variant='contained'
              color='secondary' color="inherit"
              >
            Sign Up
          </Button>
        </Fragment>}
      </Toolbar>
    </AppBar>
         <Menu
            className={classes.menu}
            id='menu'
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}>
        <Links href="/contact">

        <MenuItem 
           className={classes.menuItem}
           onClick={handleCloseMenu}>
            Contact
        </MenuItem>
        </Links>

        <MenuItem    
          className={classes.newsLetter}
          onClick={handleCloseMenu}>News Letter</MenuItem>
        <MenuItem           
          className={classes.linkedIn}
          onClick={handleCloseMenu}>LinkedIn</MenuItem>
      </Menu>
    </div>
  )
}

export default Header
