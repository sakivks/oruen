import React, { Component } from "react";
import {
  withStyles,
  Card,
  CardHeader,
  Avatar,
  Input,
  InputLabel,
  FormControl,
  InputAdornment,
  IconButton,
  Typography
} from "material-ui";

import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import moment from "moment";
import { Muted } from "components";
// import { Typography } from "material-ui/styles/typography";

const styles = theme => ({
  card: {
    width: "70%",
    border: "0.5px solid rgba(0, 0, 0, 0.2)",
    borderRadius: 3
  },
  addComment: {
    width: "70%"
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
    backgroundColor: "#2196f3"
  },
  floatRight: {
    float: "right",
    fontSize: 11
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
        text: "We are expecting completion by the weekend"
      },
      {
        user: "Lawfirm",
        time: "06:12 pm",
        text: "That's great!!"
      }
    ],
    commentTxt: ""
  };

  keyEnterComments = event => {
    if (event.key === "Enter" && event.shiftKey) {
    } else if (event.key === "Enter") {
      console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
      this.updateComments();
    }
  };

  updateComments = () => {
    // user is logged in so user details should be populated from the login
    let user = "Vikas";
    // need to modify the date specific settings based on library used
    let date = new Date().toString();
    let commentTxt = this.state.commentTxt;

    let cmtObj = {
      user: user,
      time: date,
      text: commentTxt
    };

    let commentsObj = this.state.comments;
    commentsObj.push(cmtObj);
    this.setState({ comments: commentsObj, commentTxt: "" });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  addComments = () => {
    const { classes } = this.props;
    return (
      <div>
        <FormControl className={classes.addComment}>
          <InputLabel htmlFor="input-comment">Add Comment</InputLabel>
          <Input
            id="input-comment"
            type="text"
            value={this.state.commentTxt}
            placeholder="comments"
            onChange={this.handleChange("commentTxt")}
            onKeyPress={this.keyEnterComments}
            fullWidth
            multiline
            rows="2"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={this.updateComments}>
                  <AddCircleOutline />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  };

  renderComments = () => {
    const { classes } = this.props;
    let comments = this.state.comments;
    let titleDOM = null;
    let commentsDOM = comments.map((comment, i) => {
      titleDOM = (
        <div>
          <Muted>{comment.user}
            <span className={classes.floatRight}>{comment.time}</span>
          </Muted>
        </div>
      );
      return (
        <Card className={classes.card} elevation={0}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title={titleDOM}
            subheader={<Typography>{comment.text}</Typography>}
          />
          {/* <CardContent>
            
          </CardContent> */}

        </Card>
      );
    });
    return commentsDOM;
  };

  render() {
    return (
      <div>
        {this.renderComments()}
        {this.addComments()}
      </div>
    );
  }
}

export default withStyles(styles)(Comments);
