import { makeStyles } from '@material-ui/core/styles';


 const useStyles = makeStyles(theme => ({

    drawerContainer: {
      margin:"100px 20px 0px 20px",
      display: "flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:"5px",
    },

    acount: {
      textAlign:"center",
      width: "100px",
      borderRadius:"40px",
        '&:hover': {
            background: 'purple',
        },
  },

    listedItems:{
       marginBottom:"180px"
  },

    iconButtonContainer: {
        marginLeft: 'auto',
        paddingRight:"0",
        color: 'white',
    },

    menuIconToggle: {
       fontSize: '3rem',
    },

    divider:{
      marginTop:"20px", 
      color:"black"
    },
    menu:{
      padding:"100px",  
      marginTop: '130px',
      marginLeft: '-23px'
    },

    list:{
      borderRadius:"5px", 
      background:"rgb(210, 210, 210)"
    },

    menuItem:{
      padding:"20px 40px 10px 40px",  
      marginLeft:"10px",
      textDecoration:"none"
    },

    newsLetter:{
      padding:"20px 40px 10px 40px"
    },

    linkedIn:{
      padding:"20px 40px 10px 40px", 
      marginLeft:"10px" 
    }


  }));

  export default useStyles