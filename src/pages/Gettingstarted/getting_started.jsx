import "../../styles/css/App.css";

import Container from "@material-ui/core/Container";
import DownloadBtn from "../../pages/downloads/downloadBtn";
import Nav from "../../shared/nav";
import React from "react";
import Styled from "../../styles/react/styles";
import Typography from "@material-ui/core/Typography";
import WhoIntBtn from "../../shared/whoInt";
import { app } from "../../assets/app.json";
import social_distancing from "../../assets/img/undraw_social_distancing_2g0u.svg";

function GettingStartedPage() {
  const classes = Styled();

  return (
    <div className={classes.App}>
      <Nav></Nav>
      <header className={classes.AppHeader}>
        <Container maxWidth="sm">
          <Typography className={classes.posts} component="div">
            <img
              className={classes.svg_asset}
              src={social_distancing}
              alt={app.NAME}
              srcset={social_distancing}
            />

            <p>
              Coronavirus disease spreads primarily through contact with an
              infected person when they cough or sneeze. It also spreads when a
              person touches a surface or object that has the virus on it, then
              touches their eyes, nose, or mouth.
            </p>
            <WhoIntBtn></WhoIntBtn>
            <p>
              You can use the application in the Web version. For now it is only
              available for the Web. The mobile version for Android and IOS will
              soon be available.
            </p>
            <DownloadBtn></DownloadBtn>
          </Typography>
        </Container>
      </header>
    </div>
  );
}

export default GettingStartedPage;
