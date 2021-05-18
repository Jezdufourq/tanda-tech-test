import React from "react";
import "./App.css";
import SignIn from "./components/signIn";
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
          <div>
            <p>This is a sign up link</p>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
