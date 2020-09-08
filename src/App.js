import React from "react";
import "./mysass.scss";
import Signin from './components/signin';
import Account from './components/account';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

toast.configure()

export default function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
    );
}

const routes = [
  {
    path: "/",
    component: Signin,
    exact : true,
  },
  {
    path: "/account",
    component: Account,
    exact : true

  }
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
