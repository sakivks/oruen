import React from "react";
import {
  withStyles,
  Button,
  Dialog,
  DialogActions,
  Slide,
  Table,TableBody , TableCell,TableHead,TableRow
} from "material-ui";

import { RegularCard, Marked } from "components";
import Comments from './Comments.jsx';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const desc = `__DESCRIPTION__ : This card covers the pre-financing capitalization of the company. You should only include shares, options and warrants that are outstanding prior to the financing or top up shares that will be
counted in the fully diluted pre-money shares (i.e., don't include the shares being issued in the
financing in this interview page).`;

const styles = theme => ({
  table: {
    maxWidth: 500
  },
  thead: {
    backgroundColor: "#2196f3",
    color:  "white"
  },
  th:{
    color:"white",
    fontWeight: "bold", 
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  heading: {
    marginBottom: 10,
    marginTop: 10
  }
})
class CardView extends React.Component {
  state = {
    open: true,
    teamMembers:[
      {
        "name":"Vikas",
        "work":"working on Card",
        "timeLog":"20"
      },
      {
       "name":"Ram",
       "work":"working on comments",
       "timeLog":"40" 
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
    let teamTable =(
      <div>
        <h6 className={classes.heading}>Team Members</h6>
        <Table className={classes.table}>
          <TableHead className={classes.thead}>
            <TableRow>
              <TableCell className={classes.th}>Name</TableCell>
              <TableCell className={classes.th}>Work</TableCell>
              <TableCell className={classes.th} numeric>Time Log</TableCell>
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
      </div>
    )

    return teamTable;
  }

  render() {
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
                  { this.displayTeamMembers() }
                  <Comments/>
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
