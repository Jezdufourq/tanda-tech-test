import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";

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
    backgroundColor: "white",
    boxShadow: "none",
  },
}));

function Header({ user, isLoggedIn }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.headerStyle}>
        <Toolbar>
          <Typography variant="h5">
            {isLoggedIn ? (
              <Box fontWeight="fontWeightBold" className={classes.text}>
                You are Signed In As {user}
              </Box>
            ) : null}
          </Typography>
        </Toolbar>
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
