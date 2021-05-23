import React from "react";
import { useEffect } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShiftTable from "./ShiftTable";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { getCurrentShiftsOnOrgId } from "../actions/shifts";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
  const dispatch = useDispatch();
  const currentOrg = useSelector(
    (state) => state.organisations.currentOrganisation
  );
  const history = useHistory();

  const currentShiftData = useSelector((state) => state.shifts.currentShifts);

  useEffect(() => {
    dispatch(getCurrentShiftsOnOrgId(currentOrg.id));
    console.log(currentShiftData);
  }, []);

  function goHome() {
    history.push("/home");
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
          <Button variant="contained" color="primary" type="submit">
            Create Shift
          </Button>
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
