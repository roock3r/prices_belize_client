import React,{useState} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

const Error = ({ classes,error }) => {
    const [open,setOpen] = useState(true)
    return(
        <Snackbar
            className={classes.snackbar}
            open={open}
            message={error.message}
            action={
                <Button onClick={()=> setOpen(false)} color="secondary" size="small">
                    Close
                </Button>
            }
        />
    )
};

const styles = theme => ({
    snackbar: {
        margin: theme.spacing.unit
    }
});

export default withStyles(styles)(Error);
