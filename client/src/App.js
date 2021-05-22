import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { Shifts } from "./components/Shifts";
import { ForgotPassword } from "./components/ForgotPassword";
import { NotFound } from "./components/NotFound";
import Header from "./components/Header";

import { ProtectedRoute } from "./components/protected.route";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path={"/"} component={Login} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"/forgot-password"} component={ForgotPassword} />
          <ProtectedRoute exact path={"/shifts"} component={Shifts} />
          <ProtectedRoute exact path={"/home"} component={Home} />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
