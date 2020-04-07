import "../styles/css/App.css";

import { app, urls } from "../assets/app.json";

import Button from "@material-ui/core/Button";
import Nav from "./shared/nav";
import React from "react";
import Styled from "../styles/react/styles";
import Typography from "@material-ui/core/Typography";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

function App() {
  const classes = Styled();
  function toGettingstarted() {
    window.location.href = urls.routes[3];
  }
  return (
    <div className={classes.App}>
      <Nav></Nav>
      <header className={classes.AppHeader}>
        <Typography className={classes.title} variant="h3" noWrap>
          {app.NAME}
        </Typography>

        <p>Get updated data about Corona Virus.</p>
        <Button
          variant="contained"
          color="secondary"
          onClick={toGettingstarted}
        >
          Getting Started <VerifiedUserIcon></VerifiedUserIcon>
        </Button>
      </header>
    </div>
  );
}

export default App;
