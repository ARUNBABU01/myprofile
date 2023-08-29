import makeStyles from "@mui/styles/makeStyles";
import { green } from "@mui/material/colors/";
import { width } from "@mui/system";

const drawerWidth = 285;

export const Styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    fontSize: 12,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1.5)
    },
    alignItems:'center',
    justifyContent:"center",
    width:"100%",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: `${drawerWidth}px`,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarButtons: {
    display: "flex",
    marginLeft: "10em",
  },

  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    // zIndex: 550, not working
    boxSizing: 'border-box',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 75,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },

  personName: {
    fontWeight: "bold",
    color: "#5B9BD5",
    fontFamily: "calibri",
    // textShadow: "#ffffff 1px 1px, #9dc3e6 3px 3px",
  },
  card: {
    minWidth: 275,
    margin: theme.spacing(1),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
  grid: {
    marginTop: 12,
  },
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    margin: 0,
    border: 0,
    backgroundColor: theme.palette.secondary.main,
    padding: "24px 32px 24px 32px",
    // height: theme.spacing(1),
    // width: theme.spacing(1),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  timer: {
    margin: theme.spacing(0, -2, 0),
    padding: theme.spacing(2),
  },

  formdetail: {
    display: "grid",
    gridRowGap: "10px",
    gridTemplateColumns: "1fr 2fr 1fr 2fr 1fr 2fr",
    padding: "20px",
    background: "#eeeeee",
    mozBoxShadow:
      "0 10px 10px -10px rgba(0, 0, 0, 0.5) inset, 0 -10px 10px -10px rgba(0, 0, 0, 0.5) inset",
    webkitBoxShadow:
      "0 10px 10px -10px rgba(0, 0, 0, 0.5) inset, 0 -10px 10px -10px rgba(0, 0, 0, 0.5) inset",
    boxShadow:
      "0 10px 10px -10px rgba(0, 0, 0, 0.5) inset, 0 -10px 10px -10px rgba(0, 0, 0, 0.5) inset",
  },
  tabledetail: {
    display: "grid",
    // gridRowGap: '10px',
    // gridTemplateColumns: '1fr 2fr 1fr 2fr 1fr 2fr',
    padding: "20px",
    background: "#eeeeee",
    mozBoxShadow:
      "0 10px 10px -10px rgba(0, 0, 0, 0.5) inset, 0 -10px 10px -10px rgba(0, 0, 0, 0.5) inset",
    webkitBoxShadow:
      "0 10px 10px -10px rgba(0, 0, 0, 0.5) inset, 0 -10px 10px -10px rgba(0, 0, 0, 0.5) inset",
    boxShadow:
      "0 10px 10px -10px rgba(0, 0, 0, 0.5) inset, 0 -10px 10px -10px rgba(0, 0, 0, 0.5) inset",
  },
  commentdetail: {
    // display: 'grid',
    // gridRowGap: '5px',
    // gridTemplateColumns: '1fr 2fr 2fr',
    padding: "5px",
    background: "#eeeeee",
    mozBoxShadow:
      "0 10px 10px -10px rgba(0, 0, 0, 0.5) inset, 0 -10px 10px -10px rgba(0, 0, 0, 0.5) inset",
    webkitBoxShadow:
      "0 10px 10px -10px rgba(0, 0, 0, 0.5) inset, 0 -10px 10px -10px rgba(0, 0, 0, 0.5) inset",
    boxShadow:
      "0 10px 10px -10px rgba(0, 0, 0, 0.5) inset, 0 -10px 10px -10px rgba(0, 0, 0, 0.5) inset",
  },
  cell: {
    color: "gray",
    display: "flex",
    padding: "4px",
    alignItems: "top",
    marginRight: "1em",

    "&:nth-child(2n)": {
      color: "black",
    },

    "&:nth-child(2n+1)": {
      fontStyle: "italic",
      paddingRight: "0.5em",
      justifyContent: "flex-end",
      textAlign: "right",
      marginRight: "0",
    },
  },

  done: {
    backgroundColor: "green",
    color: "white",
    borderRadius: "6px",
  },

  rejected: {
    backgroundColor: "red",
    color: "white",
    borderRadius: "6px",
  },

  inprogress: {
    backgroundColor: "yellow",
    color: "white",
    borderRadius: "6px",
  },
  errorModal: {
    position: "absolute",
    width: "50vw",
    maxWidth: 900,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  save: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
    borderRadius: "15px",
  },

  disabledInput: {
    color: "black",
  },
  stepper: {
    padding: "24px",
  },
  slideInMUI: {
    "&-enter":{
        transform: "translateX(-100%)"
    },
    "&-enter-active": {
        transform: "translateX(0%)",
        transition: "all 1s ease-in-out"
    },
    "&--exit": {
        transform: "translateX(0%)"
    },
    "&-exit-active": {
        transform: "translateX(-100%)",
        transition: "all 1s ease-in-out"
    }
  },
  slideUpMUI: {
    "&-enter":{
        transform: "translateY(1000px)"
    },
    "&-enter-active": {
        transform: "translateY(0%)",
        transition: "all 1s ease-in-out"
    },
    "&--exit": {
        transform: "translateY(0%)"
    },
    "&-exit-active": {
        transform: "translateY(1000px)",
        transition: "all 1s ease-in-out"
    }
  },

  profileUpdateForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
    background: theme.palette.background.paper,
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.3)',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
  },


}));
