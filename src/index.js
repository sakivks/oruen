import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/material-dashboard-react.css";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        if (prop.redirect)
          return <Redirect from={prop.path} to={prop.to} key={key} />;
        return (
          <Route
            path={prop.path}
            render={routeProps => <prop.component {...routeProps} {...prop.props} />}
            key={key}
          />
        );
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
