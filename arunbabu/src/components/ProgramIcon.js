// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";

export function ProgramIcon(props) {
  const { icon, language, cssClass = "" } = props;
  return (
    <Grid item container direction={"column"} textAlign={"center"} className={cssClass}>
      <Grid item>
        {/* <FontAwesomeIcon icon={icon} className="icon" /> */}
        <img src={icon} alt="React" className="icon" />
      </Grid>
      <Grid item>{language}</Grid>
    </Grid>
  );
}
