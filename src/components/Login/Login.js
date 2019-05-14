import React, { Component } from "react";
import { Link } from "react-router-dom";

import { func, string } from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import componentClasses from "./Login.css";

import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {
    primary: pink
  },
  typography: {
    useNextVariants: true
  }
});

class Login extends Component {
  static propTypes = {
    headerText: string,
    onConfirmButtonClick: func,
    redirectRoutes: string,
    redirectText: string
  };

  render() {
    const { redirectRoutes, redirectText, headerText, classes } = this.props;

    return (
      <div className="login">
        <Grid
          direction="row"
          justify="center"
          container
          item
          lg={8}
          xs={10}
          spacing={24}
          className={"wrapper"}
        >
          {headerText && <h1 className={"header"}>{headerText}</h1>}
          <Grid item lg={12} xs={12} container direction="row" justify="center">
            <MuiThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                className={classes.margin}
                onClick={this.props.onConfirmButtonClick}
                type="submit"
              >
                Login
              </Button>
            </MuiThemeProvider>
          </Grid>
          <Link to={redirectRoutes}>{redirectText}</Link>
        </Grid>
      </div>
    );
  }
}

export default withStyles()(Login);
