import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../actions/auth";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "spaceBetween",
  },
  text: {
    color: "black",
  },
  headerStyle: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

function Header({ user, isLoggedIn }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogOut() {
    dispatch(logout());
    history.push("/");
  }
  return (
    <Container component="main" maxWidth="sm" className={classes.root}>
      <AppBar position="static" className={classes.headerStyle}>
        {isLoggedIn ? (
          <Toolbar>
            <Grid justify="space-between" alignItems="center" container="true">
              <Typography variant="h5">
                <Box fontWeight="fontWeightBold" className={classes.text}>
                  Welcome Back {user.name} 👋
                </Box>
              </Typography>
              <IconButton edge="end" aria-label="edit">
                <ExitToAppIcon onClick={handleLogOut} />
              </IconButton>
            </Grid>
          </Toolbar>
        ) : null}
      </AppBar>
    </Container>
  );
}
function mapStateToProps(state) {
  const { user, isLoggedIn } = state.auth;
  return {
    user,
    isLoggedIn,
  };
}

export default connect(mapStateToProps)(Header);
