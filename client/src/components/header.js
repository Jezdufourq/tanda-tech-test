import React from "react";
import { useState } from "react";
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
    color: "#ffffff",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [name, setName] = useState("Jez");
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h5">
            <Box fontWeight="fontWeightBold" className={classes.text}>
              You are Signed In As
            </Box>
          </Typography>
          <Button>Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
