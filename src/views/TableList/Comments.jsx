import React, { Component } from "react";
import { withStyles, Card, CardHeader, Avatar, Input, InputLabel, FormControl, InputAdornment, IconButton } from "material-ui";

import red from "material-ui/colors/red";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import zIndex from "material-ui/styles/zIndex";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";

const styles = theme => ({
  card: {
    width: "70%",
    elevation: 0,
    marginBottom: 10
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
  },
  floatRight: {
    float : "right",
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
        text: "We are explecting completion by the weekend"
      },
      {
        user: "Lawfirm",
        time: "06:12 pm",
        text: "That's great!!"
      }
    ],
    commentTxt : ""
  };

  updateComments = () => {
    console.log("inside comments updating");
    // user is logged in so user details should be populated from the login
    let user ="Vikas";
    // need to modify the date specific settings based on library used
    let date = new Date();
    let commentTxt  = this.state.commentTxt;

    let cmtObj = {
      user : user,
      time : date,
      text : commentTxt
    }

    let commentsObj = this.state.comments;
    commentsObj.push(cmtObj);
    console.log(commentsObj);
    this.setState({'commentTxt' : ''})

  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  addComments = () => {
    const { classes } = this.props;
    return (
      <div>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="adornment-password">Add Comment</InputLabel>
          <Input
            id="adornment-comment"
            type="text"
            value ={this.state.commentTxt}
            placeholder = "comments"
            onChange = {this.handleChange('commentTxt')}
            endAdornment = {
              <InputAdornment position="end">
                <IconButton
                  onClick = {this.updateComments}
                >
                <AddCircleOutline />
                </IconButton>
              </InputAdornment>
            } 
          />
        </FormControl>
      </div>
    )
  }

  renderComments(){
    const { classes } = this.props;
    let comments = this.state.comments;
    let titleDOM = null;
    let commentsDOM =  comments.map(( comment , i ) => {
      titleDOM = (
        <div>
          {comment.user} 
          <span className={classes.floatRight}>{comment.time}</span>
        </div>
      );
      return (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title= {titleDOM}   
            subheader={comment.text}
          />
        </Card>
      );
    });
    return commentsDOM;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
         { this.renderComments() }
          { this.addComments() }     
      </div>
    );
  }
}

export default withStyles(styles)(Comments);
