import React from "react";
import {
  Button
} from "material-ui";
import { withStyles,TextField, Chip, Card, CardHeader, Avatar, Input, InputLabel, FormControl, InputAdornment, IconButton } from "material-ui";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import Cancel from '@material-ui/icons/Cancel';
import { RegularCard } from "components";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  button: {
    margin: theme.spacing.unit,
    float: "right",
    backgroundColor: "#2196f3",
    fontWeight: "bold",
    color: "white"
  }
});

class CardView extends React.Component {
state = {
    open: true,
    name : "",
    teamMembersTxt : "",
    teamMembersData: [ ]
  };
  teamMemberDOM = null;

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  descRenderDOM = () => {
    let { classes }= this.props;
    let descDOM = (
      <div>
        <TextField
          id="desc"
          label="Description"
          value={this.state.name}
          onChange={this.handleChange('name')}
          placeholder = "Enter Description"
          margin="normal"
          fullWidth
          multiline
          rows = "2"
        />
      </div>
    );
    return descDOM;
  }

  handleDelete = data => () => {
    this.setState(state => {
      const teamMembersData = [...state.teamMembersData];
      const chipToDelete = teamMembersData.indexOf(data);
      teamMembersData.splice(chipToDelete, 1);
      return { teamMembersData };
    });
  };

  pushTeamMembersData = () =>{
    let teamMembersData = this.state.teamMembersData;
    let newTeamMember = {
      'key' : teamMembersData.length,
      'label':this.state.teamMembersTxt
    };
    teamMembersData.push(newTeamMember);
    this.setState({ 'teamMembersData' : teamMembersData , 'teamMembersTxt' : ""});
  }

  updateTeamMembers = () => {
    let classes = this.props;
    this.teamMemberDOM = (
      this.state.teamMembersData.map(data => {
          return (
            <Chip
              key={ data.key }
              label={ data.label }
              onDelete={this.handleDelete(data)}
              className={classes.chip}
            />
          )
        })
    );
  }

  addTeamMembers = () =>{
    let classes = this.props;
    let teamMembersDOM = (
      <div>
        <TextField
          id="teamMembers"
          label="Add Team Members"
          className={classes.textField}
          value={this.state.teamMembersTxt}
          onChange={this.handleChange('teamMembersTxt')}
          placeholder = "Add Team Members"
          margin="normal"
          fullWidth
          multiline
          rows = "2"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
               <IconButton
                  onClick = { this.pushTeamMembersData }
                >
                <AddCircleOutline />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    );
    return teamMembersDOM;
  }

  render() {
    let { classes } = this.props;
    return (
      <div>
            <RegularCard
              headerColor="green"
              cardTitle="Term Sheet negotiation"
              cardSubtitle="Capitalization Table Creation"
              content={
                <div>
                  { this.descRenderDOM() }
                  { this.addTeamMembers() }
                  { this.updateTeamMembers() }
                  { this.teamMemberDOM }
                  <Button color="primary" className={classes.button}>
                    CREATE
                  </Button>
                </div>
              }
            />

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
