import React from "react";
import Link from "react-router-dom/Link";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from '@material-ui/core/Chip';
import {Avatar} from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import sortFunction from "../../utils/dateSort";


const ArticleList = ({classes, articles}) => (
    <List>
        {articles.map(article => (
            <ExpansionPanel key={article.id}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <ListItem className={classes.root}>
                        <ListItemText
                            primaryTypographyProps={{
                                variant: "subheading",
                                color: "primary"

                            }}
                            primary={
                                <Link to={`/article/${article.slug}/${article.id}`}>
                                {article.name}
                              </Link>
                            }
                        />
                        <>
                            Current Price:
                        <Chip
                            avatar={<Avatar>$</Avatar>}
                            label={article.articlepriceSet.sort(sortFunction)[0].price}
                            clickable
                            color="primary"
                            deleteIcon={<DoneIcon/>}
                        />
                        </>

                    </ListItem>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <Typography variant="body1">
                        {article.description}
                    </Typography>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                </ExpansionPanelActions>
            </ExpansionPanel>
        ))}
    </List>
);

const styles = {
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    details: {
        alignItems: "center"
    },
    link: {
        color: "#424242",
        textDecoration: "none",
        "&:hover": {
            color: "black"
        }
    }
};

export default withStyles(styles)(ArticleList);