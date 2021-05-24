import React from "react";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShiftTable from "./ShiftTable";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { getCurrentShiftsOnOrgId } from "../actions/shifts";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import { createShift } from "../actions/shifts";

const moment = require("moment");
const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(8),
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  dialog: {
    margin: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  textField: {
    padding: theme.spacing(2),
    display: "flex",
    textAlign: "left",
  },
}));

export const Shifts = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const currentOrg = useSelector(
    (state) => state.organisations.currentOrganisation
  );
  const currentUser = useSelector((state) => state.auth.user);
  const currentShiftData = useSelector((state) => state.shifts.currentShifts);

  const [openDialog, setOpenDialog] = useState(false);
  const [startTime, setStartTime] = useState("2017-05-24T10:30");
  const [endTime, setEndTime] = useState("2017-05-24T10:30");
  const [breakLength, setBreakLength] = useState("");

  useEffect(() => {
    dispatch(getCurrentShiftsOnOrgId(currentOrg.id));
  }, []);

  function goHome() {
    history.push("/home");
  }

  function handleDialogOpen() {
    setOpenDialog(true);
  }

  function handleDialogClose() {
    setOpenDialog(false);
  }

  function handleCreateShift() {
    dispatch(
      createShift(
        startTime,
        endTime,
        breakLength,
        currentUser.id,
        currentOrg.id
      )
    );
  }

  return (
    <div>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.heading}>
          <Typography component="h1" variant="h5">
            <Box fontWeight="fontWeightBold">
              Organisation {currentOrg.name}
            </Box>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleDialogOpen}
          >
            Create Shift
          </Button>
          <Dialog
            open={openDialog}
            onClose={handleDialogClose}
            aria-labelledby="form-dialog-title"
            className={classes.dialog}
          >
            <DialogContent className={classes.dialog}>
              <Grid>
                <TextField
                  id="start-time"
                  type="datetime-local"
                  label="Start Time"
                  className={classes.textField}
                  value={startTime}
                  defaultValue="2017-05-24T10:30"
                  onInput={(e) => setStartTime(e.target.value)}
                />
                <TextField
                  id="end-time"
                  type="datetime-local"
                  label="End Time"
                  className={classes.textField}
                  value={endTime}
                  defaultValue="2017-05-24T10:30"
                  onInput={(e) => setEndTime(e.target.value)}
                />
                <TextField
                  id="break-length"
                  type="number"
                  label="Break Length"
                  className={classes.textField}
                  value={breakLength}
                  onInput={(e) => setBreakLength(e.target.value)}
                />
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleCreateShift} color="primary">
                Create Shift
              </Button>
            </DialogActions>
          </Dialog>
          <IconButton edge="end" aria-label="edit">
            <ExitToAppIcon
              onClick={() => {
                goHome();
              }}
            />
          </IconButton>
        </div>
        <div>
          <ShiftTable tableDate={currentShiftData} />
        </div>
      </Container>
    </div>
  );
};
