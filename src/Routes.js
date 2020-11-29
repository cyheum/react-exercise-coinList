import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainContainer } from "pages";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/priceList" component={MainContainer} />
          <Route exact path="/bookMark" component={MainContainer} />
          <Route exact path="/priceList/:id" component={MainContainer} />
          <Route exact path="/bookMark/:id" component={MainContainer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
