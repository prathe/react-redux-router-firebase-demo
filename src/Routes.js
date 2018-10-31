import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./resources/Home";
import NotFound from "./resources/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />

    // This is a "soft not found page" which should
    // never be rendered when using links within the apps of a SPA.
    <Route component={NotFound}/>
  </Switch>;
