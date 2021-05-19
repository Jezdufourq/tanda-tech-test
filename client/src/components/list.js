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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {},
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function InteractiveList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.demo}>
        <List>
          {generate(
            <ListItem button>
              <ListItemText primary="Organisation" />
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
          )}
        </List>
      </div>
    </div>
  );
}
