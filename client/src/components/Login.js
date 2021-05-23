import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";

import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // redux hooks
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (props.loggedIn) {
      history.push("/home");
    }
  });

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    dispatch(login(email, password))
      .then(() => {
        history.push("/home");
      })
      .catch(() => {
        setAlert(true);
        setLoading(false);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      {alert ? (
        <Alert
          severity="error"
          onClose={() => {
            setAlert(false);
          }}
        >
          {props.message}
        </Alert>
      ) : null}
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <Box fontWeight="fontWeightBold"> Lets get you signed in</Box>
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.isLoggedIn,
    message: state.message,
  };
}
export default connect(mapStateToProps)(Login);
