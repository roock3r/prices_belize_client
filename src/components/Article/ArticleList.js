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
import {Avatar, ListItemIcon} from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import SendIcon from '@material-ui/icons/Send';


// import AudioPlayer from "../Shared/AudioPlayer";
// import LikeTrack from "./LikeTrack";
// import DeleteTrack from "./DeleteTrack";
// import UpdateTrack from "./UpdateTrack";


const ArticleList = ({classes, articles}) => (
    <List>
        {articles.map(article => (
            <ExpansionPanel key={article.id}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <ListItem className={classes.root}>
                        {/*<LikeTrack trackId={track.id} likeCount={track.likes.length}/>*/}
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
                            // secondary={
                            //   <Link to={`/profile/${track.postedBy.id}`}>
                            //     {track.postedBy.username}
                            //   </Link>
                            // }
                        />

                        {/*<AudioPlayer url={track.url}/>*/}
                        <>
                            Current Price:
                        <Chip
                            avatar={<Avatar>$</Avatar>}
                            label={article.articlepriceSet[0].price}
                            clickable
                            color="primary"
                            // onDelete={handleDelete}
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
                    {/*<UpdateTrack track={track}/>*/}
                    {/*<DeleteTrack track={track}/>*/}
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