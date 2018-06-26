import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  Slide
} from "material-ui";

import { RegularCard, Marked } from "components";
import Comments from './Comments.jsx';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const desc = `__DESCRIPTION__ : This card covers the pre-financing capitalization of the company. You should only include shares, options and warrants that are outstanding prior to the financing or top up shares that will be
counted in the fully diluted pre-money shares (i.e., don't include the shares being issued in the
financing in this interview page).

__COMMENT__:

`;

class CardView extends React.Component {
  state = {
    open: true
  };

  // handleClose = () => {
  //   this.props.closeDialog();
  // };

  // componentWillReceiveProps = nextProps => {
  //   this.setState({ open: nextProps.open });
  // };

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

export default CardView;
