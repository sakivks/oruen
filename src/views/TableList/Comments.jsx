import React, { Component } from "react";
import { withStyles, Card, CardHeader, Avatar, IconButton } from "material-ui";

import red from "material-ui/colors/red";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import zIndex from "material-ui/styles/zIndex";

const styles = theme => ({
  card: {
    maxWidth: 400,
    elevation: 0
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class Comments extends Component {
  state = {
    comments: [
      {
        user: "Client",
        time: "06:00 pm",
        text: "progress looks good, what about the ETA?"
      },
      {
        user: "Lawfirm",
        time: "06:10 pm",
        text: "We are explecting completion by the weekend"
      },
      {
        user: "Lawfirm",
        time: "06:12 pm",
        text: "That's great!!"
      }
    ]
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Comments);
