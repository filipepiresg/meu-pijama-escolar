import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import { Login, Cadastrar, Conteudo, NotFound } from "./pages";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Cadastrar} />
    <PrivateRoute path="/app" component={Conteudo} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
