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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { myOrganisations } from "../actions/organisations";

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

export default function OrganisationList() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const myOrgs = useSelector((state) => state.organisations.userOrgs);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    dispatch(myOrganisations())
      .then((response) => {
        console.log(response);
      })
      .catch(() => {
        setAlert(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function enterOrg(org) {
    dispatch(setCurrentOrganisation(org));
    history.push("/shifts");
  }

  if (loading) {
    return (
      <div className={classes.root}>
        <div className={classes.demo}></div>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <div className={classes.demo}>
        <List>
          {myOrgs.map((v, i) => {
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
