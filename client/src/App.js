import React from "react";
import "./App.css";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import Home from "./components/home";
import Shifts from "./components/shifts";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
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
          <Route path="/shifts">
            <Shifts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
