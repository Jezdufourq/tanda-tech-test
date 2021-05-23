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
import { useState } from "react";
import { connect } from "react-redux";
import { register } from "../actions/auth";
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

export const Register = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCode, setPasswordCode] = useState("");

  const [loading, setLoading] = useState(false);

  // redux hooks
  const dispatch = useDispatch();
  const history = useHistory();

  function handleRegister(event) {
    setLoading(true);
    event.preventDefault();
    dispatch(register(name, email, password, passwordCode))
      .then(() => {
        setLoading(false);
        history.push("/");
      })
      .catch(() => {
        // TODO: Handle the error thrown
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <Box fontWeight="fontWeightBold">Hello 👋 Sign Up Below</Box>
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleRegister}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="What is your name?"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onInput={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="What is your Email Addy?"
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
            label="Enter a Password!"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="forgot-password"
            label="Enter forget password code"
            helperText="Use this code to reset your password"
            type="password"
            id="forgot-password"
            autoComplete="current-password"
            value={passwordCode}
            onInput={(e) => setPasswordCode(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/" variant="body2">
                ⬅️ Back to Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
}
export default connect(mapStateToProps)(Register);
