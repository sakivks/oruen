import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
// import People from "@material-ui/icons/People";
//Routing
// import { NavLink } from "react-router-dom";
// core components
import Header from "componentsMK/Header/Header.jsx";
import GridContainer from "componentsMK/Grid/GridContainer.jsx";
import GridItem from "componentsMK/Grid/GridItem.jsx";
import Button from "componentsMK/CustomButtons/Button.jsx";
import IconButton from "componentsMK/CustomButtons/IconButton.jsx";
import Card from "componentsMK/Card/Card.jsx";
import CardBody from "componentsMK/Card/CardBody.jsx";
import CardHeader from "componentsMK/Card/CardHeader.jsx";
import CardFooter from "componentsMK/Card/CardFooter.jsx";
import CustomInput from "componentsMK/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";
import {
  infoColor,
} from "assets/jss/material-dashboard-react.jsx";



class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, register, login, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Neuro Circle"
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          disabled
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={classes.socialIcons + " fab fa-twitter"}
                          />
                        </IconButton>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          disabled
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={classes.socialIcons + " fab fa-facebook"}
                          />
                        </IconButton>
                        <IconButton
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            className={
                              classes.socialIcons + " fab fa-google-plus-g"
                            }
                          />
                        </IconButton>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Or Be Classical</p>
                    <CardBody>
                      {/* <CustomInput
                        labelText="First Name..."
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor}/>
                            </InputAdornment>
                          )
                        }}
                      /> */}
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor}/>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutline className={classes.inputIconsColor}/>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                        <Button simple color="default" size="lg" onClick={register}>
                          Register
                        </Button>
                        <Button simple color="primary" size="lg" onClick={login}>
                          Login
                        </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
