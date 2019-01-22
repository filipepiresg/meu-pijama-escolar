import React from "react";
import { Switch, Route } from "react-router-dom";

import { LoginPage } from "./Components/Pages";

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
  </Switch>
);

export default Routes;
