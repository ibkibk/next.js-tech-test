import { makeStyles } from '@material-ui/core/styles';
 const useStyles = makeStyles((theme) => ({
      container:{
        borderRadius: "0 0 0 120px", 
        height:"400px", 
        marginTop:"-10", 
        textAlign:"center",
        background:"hsl(356, 100%, 66%)"
       },

      wrapper:{
        marginTop:"0",
        color:"white"
       },

       
      header:{
       fontSize:"40px",
       marginTop:"0px",
       color:"white"
       },

      parag:{
        fontSize:"18px"
       },

      buttonContainer:{
        marginTop:"40px"
      },

        
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

export default useStyles;