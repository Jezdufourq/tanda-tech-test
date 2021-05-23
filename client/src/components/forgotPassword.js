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
import { useDispatch } from "react-redux";
import { resetPassword } from "../actions/auth";
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

export const ForgotPassword = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordCode, setPasswordCode] = useState("");

  // Redux hooks
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    dispatch(resetPassword(email, passwordCode, newPassword))
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setAlert(true);
        setLoading(false);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <Box fontWeight="fontWeightBold">
            Darn, you forgot your password. Enter your recovery code below.
          </Box>
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
            name="password-reset-answer"
            label="Enter your password code"
            type="password"
            id="password-reset-answer"
            value={passwordCode}
            onInput={(e) => setPasswordCode(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Enter your new password"
            type="password"
            id="password"
            value={newPassword}
            onInput={(e) => setNewPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Reset Password
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
