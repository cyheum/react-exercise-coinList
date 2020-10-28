import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainContainer } from "pages";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainContainer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
