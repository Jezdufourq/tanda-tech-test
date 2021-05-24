import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
} from "@material-ui/core";

import { editOrganisation, joinOrganisation } from "../actions/organisations";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {},
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  dialog: {
    margin: theme.spacing(4),
    alignItems: "center",
  },
}));

export default function UpdatableList(props) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [orgName, setOrgName] = React.useState("");
  const [orgId, setOrgId] = React.useState("");
  const [orgHourlyRate, setOrgHourlyRate] = React.useState("");
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.id);

  function joinOrg(id) {
    setOrgId(id);
    dispatch(joinOrganisation(orgId, userId));
  }

  function editOrg() {
    dispatch(editOrganisation(orgId, orgName, orgHourlyRate));
    setOpenDialog(false);
  }

  function handleDialogOpen(id) {
    setOpenDialog(true);
    setOrgId(id);
  }

  function handleDialogClose() {
    setOpenDialog(false);
  }

  return (
    <div className={classes.root}>
      <div className={classes.demo}>
        <List>
          {props.items.map((v, i) => {
            return (
              <ListItem button>
                <ListItemText primary={v.name} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon onClick={() => handleDialogOpen(v.id)} />
                  </IconButton>
                  <IconButton edge="end" aria-label="edit">
                    <AddIcon onClick={() => joinOrg(v.id)} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
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
          <Button onClick={editOrg} color="primary">
            Edit Org
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
