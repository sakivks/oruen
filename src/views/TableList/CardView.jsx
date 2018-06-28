import React from "react";
import {
  withStyles,
  Button,
  Dialog,
  DialogActions,
  Slide,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui";

import { RegularCard, Marked } from "components";
import Comments from "./Comments.jsx";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const desc = `__Description__ : This card covers the pre-financing capitalization of the company. You should only include shares, options and warrants that are outstanding prior to the financing or top up shares that will be
counted in the fully diluted pre-money shares (i.e., don't include the shares being issued in the
financing in this interview page).`;

const styles = theme => ({
  table: {
    maxWidth: "70%",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: 3
  },
  thead: {
    backgroundColor: "#2196f3",
    color: "white"
  },
  th: {
    color: "white",
    fontWeight: "bold"
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  heading: {
    marginBottom: 10,
    marginTop: 25
  }
});
class CardView extends React.Component {
  state = {
    open: true,
    teamMembers: [
      {
        name: "Vikas",
        work: "working on Card",
        timeLog: "20"
      },
      {
        name: "Ram",
        work: "working on comments",
        timeLog: "40"
      }
    ]
  };

  // handleClose = () => {
  //   this.props.closeDialog();
  // };

  // componentWillReceiveProps = nextProps => {
  //   this.setState({ open: nextProps.open });
  // };

  displayTeamMembers = () => {
    let data = this.state.teamMembers;
    const { classes } = this.props;
    let teamTable = (
      <div>
        <div className={classes.heading}>
          <Marked md="__Team Members:__" />
        </div>
        <Paper className={classes.table} elevation={0}>
          <Table>
            <TableHead className={classes.thead}>
              <TableRow>
                <TableCell className={classes.th}>Name</TableCell>
                <TableCell className={classes.th}>Work</TableCell>
                <TableCell className={classes.th} numeric>
                  Time Log
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(n => {
                return (
                  <TableRow className={classes.row} key={n.id}>
                    <TableCell component="th" scope="row">
                      {n.name}
                    </TableCell>
                    <TableCell>{n.work}</TableCell>
                    <TableCell numeric>{n.timeLog}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );

    return teamTable;
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
        {/* <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          disableBackdro[pClick
          disableEscapeKeyDown
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        > */}
        {/* <div style={{ padding: "20px" }}> */}
        <RegularCard
          headerColor="green"
          cardTitle="Term Sheet negotiation"
          cardSubtitle="Capitalization Table Creation"
          content={
            <div>
              <Marked md={desc} />
              {this.displayTeamMembers()}
              <div className={classes.heading}>
                <Marked md="__Comments:__" />
              </div>
              <Comments />
            </div>
          }
        />
        {/* </div> */}

        {/* <DialogActions> */}
        <Button onClick={this.handleClose} color="primary">
          Share
        </Button>
        <Button onClick={this.handleClose} color="primary">
          Edit
        </Button>
        <Button onClick={this.handleClose} color="primary">
          Close
        </Button>
        {/* </DialogActions> */}
        {/* </Dialog> */}
      </div>
    );
  }
}

export default withStyles(styles)(CardView);
