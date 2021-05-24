import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
    <div className={classes.root}>
      <AppBar position="static" className={classes.headerStyle}>
        {isLoggedIn ? (
          <Toolbar>
            <Typography variant="h5">
              <Box fontWeight="fontWeightBold" className={classes.text}>
                Welcome Back {user.name} 👋
              </Box>
            </Typography>
            <IconButton edge="end" aria-label="edit">
              <ExitToAppIcon onClick={handleLogOut} />
            </IconButton>
          </Toolbar>
        ) : null}
      </AppBar>
    </div>
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
