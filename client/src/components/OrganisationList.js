import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useHistory } from "react-router-dom";
import { setCurrentOrganisation } from "../actions/organisations";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {},
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function OrganisationList(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  function enterOrg(org) {
    dispatch(setCurrentOrganisation(org));
    history.push("/shifts");
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
                  <ArrowForwardIosIcon onClick={() => enterOrg(v)} />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}
