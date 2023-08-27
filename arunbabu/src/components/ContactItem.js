import { Grid, Typography  } from "@mui/material";


export function ContactItem(props) {
    const {ContactItemIcon, data, itemColor} = props
    return (
    <Grid container item direction="row" spacing={1}>
            <Grid item><ContactItemIcon  sx={{ fontSize: 40 , color:itemColor }}  /></Grid>
            <Grid item ><Typography align="justify">{data}</Typography></Grid>
        </Grid>
    )
}