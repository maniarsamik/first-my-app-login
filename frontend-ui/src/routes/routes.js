import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from '../pages/dashboard.jsx';
import Login from '../pages/login.jsx';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Redirect from="/" to="/dashboard" />
    </Switch>
  </BrowserRouter>
);
export default Routes;


