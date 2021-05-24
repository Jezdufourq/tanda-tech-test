import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const moment = require("moment");

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ShiftTable(props) {
  const classes = useStyles();
  const currentShiftData = useSelector((state) => state.shifts.currentShifts);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell align="right">Shift Start Date</TableCell>
            <TableCell align="right">Shift End Date</TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">Finish Time</TableCell>
            <TableCell align="right">Break Length(m)</TableCell>
            <TableCell align="right">Hours worked</TableCell>
            <TableCell align="right">Shift cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentShiftData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.user.name}
              </TableCell>
              <TableCell align="right">
                {moment(row.start_time).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell align="right">
                {moment(row.end_time).format("DD/MM/YYYY")}
              </TableCell>
              <TableCell align="right">
                {moment(row.start_time).format("h:mm A")}
              </TableCell>
              <TableCell align="right">
                {moment(row.end_time).format("h:mm A")}
              </TableCell>
              <TableCell align="right">{row.break_length}</TableCell>
              <TableCell align="right">{row.hours_worked}</TableCell>
              <TableCell align="right">{row.shift_cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
