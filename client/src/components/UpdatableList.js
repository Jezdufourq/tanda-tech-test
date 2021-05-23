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

import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {},
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function UpdatableList(props) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [orgName, setOrgName] = React.useState("");
  const [orgHourlyRate, setOrgHourlyRate] = React.useState("");

  function joinOrg() {
    //TODO: Implement
  }

  function editOrg() {
    // TODO: Implement
    setOpenDialog(false);
  }

  function handleDialogOpen() {
    setOpenDialog(true);
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
                    <EditIcon onClick={handleDialogOpen} />
                  </IconButton>
                  {props.add ? (
                    <IconButton edge="end" aria-label="edit">
                      <AddIcon />
                    </IconButton>
                  ) : null}
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
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
              Create Org
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
