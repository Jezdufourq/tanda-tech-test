import React from "react";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import BasicTable from "./table";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Table from "./table";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(8),
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
}));

export const Shifts = (props) => {
  const classes = useStyles();
  const currentOrg = useSelector((state) => state.);

  return (
    <div>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.heading}>
          <Typography component="h1" variant="h5">
            <Box fontWeight="fontWeightBold">{orgName}</Box>
          </Typography>
          <IconButton edge="end" aria-label="edit">
            <ExitToAppIcon />
          </IconButton>
        </div>
        <div>
          <Table />
        </div>
      </Container>
    </div>
  );
};
