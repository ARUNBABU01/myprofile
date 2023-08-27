import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";

export function ProgramIcon(props) {
  const { icon, language } = props;
  return (
    <Grid item container direction={"column"} textAlign={"center"}>
      <Grid item>
        <FontAwesomeIcon icon={icon} className="icon" />
      </Grid>
      <Grid item>{language}</Grid>
    </Grid>
  );
}
