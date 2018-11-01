import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import NotFound from "./NotFound";

const RoutedViews = () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />

    { /* This is a "soft not found page" which should
         never be rendered when using links within the apps of a SPA. */ }
    <Route component={NotFound}/>
  </Switch>;

export default RoutedViews;
