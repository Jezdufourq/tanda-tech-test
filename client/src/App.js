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
import Header from "./components/header";

import { logout } from "./actions/auth";

function App({ user, isLoggedIn }) {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path={"/Home"} component={Home}>
            {isLoggedIn ? <Redirect to="/" /> : <Home />}
          </Route>

          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"/shifts"} component={Shifts} />
        </Switch>
      </div>
    </Router>
  );
}
function mapStateToProps(state) {
  const { user, isLoggedIn } = state.auth;
  return {
    user,
    isLoggedIn,
  };
}
export default connect(mapStateToProps)(App);
