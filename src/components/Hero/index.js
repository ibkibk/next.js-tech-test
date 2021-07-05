import React from 'react'
import { Button} from '@material-ui/core';
import useStyles from '../../styles/hero';

const Hero = () => {
    const classes = useStyles();
    return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
         <h1 className={classes.header}>A modern publising platform</h1>
         <p className={classes.parag}>Grow your audience and build your online brand</p>
         <div className={classes.buttonContainer}>
            <Button className={classes.StartButton}>
              Start for free 
            </Button>
            <Button className={classes.LearnButton}>
              Learn More
            </Button>
         </div>
       </div>
    </div>
    )
}

export default Hero
