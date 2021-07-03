import React from 'react'
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles((theme) => ({
       acount: {
         marginLeft: '20px',
         width: "160px",
         color:"hsl(356, 100%, 66%)",
         fontWeight:"bold",
         background: "white",
         padding:"12px 0 12px 0",
         borderRadius:"40px",
             '&:hover': {
             color:"white",
             borderRadius:"40px",
             background: 'hsl(13, 100%, 72%)',
           },
 
        },
         acounts: {
         marginLeft: '20px',
         padding:"12px 0 12px 0",
         width: "160px",
         fontWeight:"bold",
         borderRadius:"40px",
         border:"2px solid white",
         background: "hsl(356, 100%, 66%)",
         color:"white",
          '&:hover': {
             borderRadius:"40px",
             background: 'white',
             color:"hsl(356, 100%, 66%)",
           },
 
        },
}));
const Hero = () => {
    const classes = useStyles();
    return (
    <div style={{borderRadius: "0 0 0 120px", height:"400px", marginTop:"-10", textAlign:"center",background:"hsl(356, 100%, 66%)"}}>
      <div style={{ marginTop:"0",color:"white"}}>
         <h1 style={{ fontSize:"40px", marginTop:"0px", color:"white"}}>A Modern Publising Platform</h1>
         <p style={{ fontSize:"18px"}}>Grow your audience and build your online brand</p>
         <div style={{ marginTop:"40px"}}>
            <Button className={classes.acount}>
              Start for free 
            </Button>
            <Button className={classes.acounts}>
              Learn More
            </Button>
         </div>
       </div>
    </div>
    )
}

export default Hero
