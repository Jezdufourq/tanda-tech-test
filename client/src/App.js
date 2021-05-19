import React from "react";
import "./App.css";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/forgot-password">
          <div>
            <p>This is a forgot password link</p>
          </div>
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
