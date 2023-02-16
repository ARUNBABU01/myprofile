import {createTheme} from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const myTheme = createTheme({
    palette:{
      mode:"dark",
    //   primary:{
    //     main:'#rgba(241,41,20,0.64)',
    //   },
    //   secondary:{
    //     main:'#f50057',
    //   },
    //   grey:{
    //     main:grey[300],
    //     dark:grey[400],
    //   }
    },
    main: {
      display:'flex',
      width: "100%",
      minWidth: "100%",
    },
    typography:{
      fontSize:12,
    },
    
  })

  export {myTheme}