import React, { Component } from "react";
import HomePage from "./components/HomePage/HomePage";

import { ToastContainer } from "react-toastify";

import { string, func, bool, number } from "prop-types";

import { Route, Switch, withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";
import * as appActions from "./modules/app/app.actions";
import "react-toastify/dist/ReactToastify.css";

import classes from "./App.less";

class App extends Component {
  static propTypes = {};

  render() {
    const prop = this.props;

    return <></>;
  }
}

function mapStateToProps({ app }) {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    { ...appActions }
  )(App)
);
