import React from "react";
import { useState } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import InteractiveList from "./list";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import IconButton from "@material-ui/core/IconButton";

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
}));

export default function Home() {
  const classes = useStyles();
  const [name, setName] = useState("Jez");

  return (
    <Container component="main" maxWidth="m">
      <CssBaseline />
      <div className={classes.heading}>
        <Typography component="h1" variant="h5">
          <Box fontWeight="fontWeightBold">Welcome Back, {name} 👋</Box>
        </Typography>
        <IconButton edge="end" aria-label="edit">
          <ExitToAppIcon />
        </IconButton>
      </div>
      <div className={classes.text}>
        <Typography component="h1" variant="h5">
          <Box fontWeight="fontWeightBold">Your Orgnisations</Box>
        </Typography>
      </div>
      <div>
        <InteractiveList />
      </div>
      <div className={classes.text}>
        <Typography component="h1" variant="h5">
          <Box fontWeight="fontWeightBold">Available Organisations</Box>
        </Typography>
      </div>
      <div>
        <InteractiveList add={true} />
      </div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Create Organisation
      </Button>
    </Container>
  );
}
