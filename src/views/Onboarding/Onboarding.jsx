import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Stepper, { Step, StepLabel } from "material-ui/Stepper";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";

const styles = theme => ({
  root: {
    width: "90%"
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

function getSteps() {
  return [
    "Non-Disclosure Agreement",
    "Request for Proposal",
    "Proposal / Engagement Letter",
    "Add Custom Field (optional)"
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Upload ‘Non-Disclosure Agreement’";
    case 1:
      return "Upload ‘Request for Proposal’";
    case 2:
      return "Upload final ‘Proposal’/ ‘Engagement Letter’ agreed with law firm";
    default:
      return "Add Custom Field (optional)";
  }
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <Paper>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Divider />
          <div style= {{padding: 30}}>
            {this.state.activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&quot;re finished
                </Typography>
                <Button onClick={this.handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button
                    variant="raised"
                    color="primary"
                    onClick={this.handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Upload"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Paper>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);
