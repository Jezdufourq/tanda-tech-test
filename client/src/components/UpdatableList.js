import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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
                    <EditIcon />
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
      </div>
    </div>
  );
}
