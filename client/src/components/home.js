import React from "react";
import { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import UpdatableList from "./UpdatableList";
import {
  Box,
  Button,
  Typography,
  Dialog,
  Container,
  TextField,
  DialogActions,
  DialogContent,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { organisations, createOrganisation } from "../actions/organisations";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(8),
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  text: {
    marginTop: theme.spacing(4),
    display: "flex",
    textAlign: "left",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
  dialog: {
    margin: theme.spacing(4),
    alignItems: "center",
  },
}));

export const Home = (props) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [orgName, setOrgName] = React.useState("");
  const [orgHourlyRate, setOrgHourlyRate] = React.useState("");

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(organisations());
  });

  function createOrg() {
    dispatch(createOrganisation(orgName, orgHourlyRate));
  }

  function handleDialogOpen() {
    setOpenDialog(true);
  }

  function handleDialogClose() {
    setOpenDialog(false);
  }

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.text}>
        <Typography component="h1" variant="h5">
          <Box fontWeight="fontWeightBold">Your Organisations</Box>
        </Typography>
      </div>
      <div>{/* <UpdatableList /> */}</div>
      <div className={classes.text}>
        <Typography component="h1" variant="h5">
          <Box fontWeight="fontWeightBold">Available Organisations</Box>
        </Typography>
      </div>
      <div>
        {/* {props.orgs.length === 0 ? (
          <Typography component="h1" variant="h5">
            <Box>No current organisations</Box>
          </Typography>
        ) : (
          <UpdatableList add={true} items={props.orgs} />
        )} */}
      </div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleDialogOpen}
      >
        Create Organisation
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="orgName"
            label="Organisation Name"
            type="text"
            value={orgName}
            onInput={(e) => setOrgName(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="orgHourRate"
            label="Organisation Hourly Rate"
            type="number"
            value={orgHourlyRate}
            onInput={(e) => setOrgHourlyRate(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={createOrg} color="primary">
            Create Org
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    orgs: state.organisations.currentOrgs,
  };
}
export default connect(mapStateToProps)(Home);
