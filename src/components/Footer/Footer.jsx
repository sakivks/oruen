import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, withStyles } from "material-ui";

import footerStyle from "assets/jss/material-dashboard-react/footerStyle";

function Footer({ ...props }) {
  const { classes } = props;
  return <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#blog" className={classes.block}>
                Contact Us
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            <a href="https://github.com/sakivks/oruen" className={classes.a}>
              under construction
            </a>
          </span>
        </p>
      </div>
    </footer>;
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
